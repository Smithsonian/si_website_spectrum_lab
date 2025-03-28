<template>
  <div class="rainbow-offset">
    <div class="position-relative">
      <div class="rainbow-div position-relative overflow-hidden rounded-top-4">
        <canvas
          ref="background"
          :width="CHART_WIDTH"
          :height="RAINBOW_HEIGHT"
          class="d-block"
          >Full-intensity spectrum background</canvas
        >
        <!-- Make overlay fully transparent to reveal the rainbow at this tutorial step -->
        <canvas
          v-show="spectraTutorialState !== 'image'"
          ref="overlay"
          class="position-absolute"
          style="top: 0px; left: 0px"
          :width="CHART_WIDTH"
          :height="RAINBOW_HEIGHT"
          >Transparency increases or decreases based on chart intensity, hiding
          or revealing the background</canvas
        >
        <!-- This sets the temperature tutorial popup arrow position -->
        <div
          ref="tempImageTutAnchor"
          class="position-absolute"
          style="bottom: 10px; left: 170px; width: 0; height: 0"
        ></div>
        <!-- And for the spectra tutorial -->
        <div
          ref="spectraImageTutAnchor"
          class="position-absolute"
          style="bottom: 10px; left: 300px; width: 0; height: 0"
        ></div>
      </div>
      <TempTutPopupSpectrumImage :anchor-elem="tempImageTutAnchor" />
      <SpecTutPopupImage :anchor-elem="spectraImageTutAnchor" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { CHART_WIDTH, RAINBOW_HEIGHT } from '@/constants';
import {
  spectrumDataKey,
  spectrumDataSourceKey,
  zoomKey,
  type SpectrumDataSource,
} from '@/injectionKeys';
import { xLocFromMicrons } from '@/utils/chartUtils';
import {
  intensityFromYLoc,
  useCurrentlyDrawing,
  useDrawnSpectrumY,
  xLocsFromBucket,
} from '@/utils/drawingUtils';
import {
  computed,
  inject,
  onMounted,
  ref,
  useTemplateRef,
  watch,
  watchEffect,
} from 'vue';
import rainbowImageUrl from '/includes/AI_common/images/Visible_Spectrum_1.png';
import { useSpectraTutorialStateMachine } from '@/utils/tutorialUtils';

const tempImageTutAnchor = useTemplateRef('tempImageTutAnchor');
const spectraImageTutAnchor = useTemplateRef('spectraImageTutAnchor');
const { tutorialState: spectraTutorialState } =
  useSpectraTutorialStateMachine();

const data = inject(spectrumDataKey, ref([]));
const zoom = inject(zoomKey, ref(1));

const rainbowImage = new Image();
rainbowImage.src = rainbowImageUrl;

const background = useTemplateRef('background');
const backgroundCtx = computed(() => {
  if (!background.value) {
    return null;
  }
  return background.value.getContext('2d');
});
const overlay = useTemplateRef('overlay');
const overlayCtx = computed(() => {
  if (!overlay.value) {
    return null;
  }
  return overlay.value.getContext('2d');
});

const drawBackground = () => {
  const context = backgroundCtx.value;
  if (!background.value || !context) {
    return;
  }
  context.fillStyle = '#dddddd';
  context.fillRect(0, 0, background.value.width, background.value.height);
  const xRainbowStart = xLocFromMicrons(0.4, zoom.value);
  const xRainbowEnd = xLocFromMicrons(0.7, zoom.value);
  const xRainbowWidth = xRainbowEnd - xRainbowStart;
  context.drawImage(
    rainbowImage,
    xRainbowStart,
    0,
    xRainbowWidth,
    background.value.height,
  );
};

const blackOutOverlay = () => {
  const context = overlayCtx.value;
  if (!overlay.value || !context) {
    return;
  }
  context.fillStyle = 'black';
  context.fillRect(0, 0, overlay.value.width, overlay.value.height);
};

onMounted(() => {
  redrawOverlay();
  // wait to load the image before drawing the background
  rainbowImage.decode().then(drawBackground);
});

const spectrumDataSource = inject(
  spectrumDataSourceKey,
  ref<SpectrumDataSource>('file'),
);

const redrawOverlay = (): void => {
  // Starting point to ensure spectrum areas we don't draw to stay full black
  blackOutOverlay();

  if (spectrumDataSource.value === 'drawing') {
    redrawDrawingData();
  } else {
    redrawFileData();
  }
};

const redrawFileData = () => {
  // We need to take care to draw rectangles the same way whether the data is sparse or
  // dense, which is tough using alphas.
  // Instead, group the data by pixel, then average the intensities of the data
  // that share a pixel
  const intensitiesByPixel = new Map<number, number[]>();
  for (const datum of data.value) {
    const [wavelength, intensity] = datum;
    const xPosition = xLocFromMicrons(wavelength, zoom.value);
    const xPixel = Math.floor(xPosition);
    if (!intensitiesByPixel.has(xPixel)) {
      intensitiesByPixel.set(xPixel, [intensity]);
    } else {
      intensitiesByPixel.get(xPixel)?.push(intensity);
    }
  }

  // Draw the rectangles, using average intensities
  let xPreviousPixel: number | null = null;
  let previousAlpha: string | null = null;
  for (const [xPixel, intensities] of intensitiesByPixel.entries()) {
    const intensitySum = intensities.reduce(
      (runningSum, intensity) => runningSum + intensity,
    );
    const intensityAverage = intensitySum / intensities.length;
    // Alpha is inverted intensity. More intensity = more transparent = smaller alpha
    const alpha = (1 - intensityAverage).toFixed(3);
    // Don't draw anything for the first xPixel.
    // Wait until the second xPixel to draw the first rectangle or gradient.
    if (xPreviousPixel === null || previousAlpha === null) {
      xPreviousPixel = xPixel;
      previousAlpha = alpha;
      continue;
    }
    drawRectangle(xPreviousPixel, previousAlpha, xPixel, alpha);
    if (xPixel > CHART_WIDTH) {
      break;
    }
    xPreviousPixel = xPixel;
    previousAlpha = alpha;
  }
};

const drawRectangle = (
  xPreviousPixel: number,
  previousAlpha: string,
  xPixel: number,
  alpha: string,
): void => {
  const context = overlayCtx.value;
  if (!context) {
    return;
  }
  const xWidth = xPixel - xPreviousPixel;
  // First, clear the existing blackout
  context.clearRect(xPreviousPixel, 0, xWidth, RAINBOW_HEIGHT);
  if (xWidth === 1) {
    // Fillstyle is a single alpha
    context.fillStyle = `rgb(0 0 0 / ${alpha})`;
  } else {
    // Fillstyle is an alpha gradient from left to right
    const gradient = context.createLinearGradient(xPreviousPixel, 0, xPixel, 0);
    gradient.addColorStop(0, `rgb(0 0 0 / ${previousAlpha})`);
    gradient.addColorStop(1, `rgb(0 0 0 / ${alpha})`);
    context.fillStyle = gradient;
  }
  context.fillRect(xPreviousPixel, 0, xWidth, RAINBOW_HEIGHT);
};

const { drawnSpectrumY } = useDrawnSpectrumY();
const { currentlyDrawing } = useCurrentlyDrawing();
const redrawDrawingData = () => {
  const ctx = overlayCtx.value;
  if (!ctx) {
    return;
  }

  // Every pixel is controlled by a single bucket, so the logic is simpler
  let xPreviousPixel: number | null = null;
  let previousAlpha: string | null = null;
  drawnSpectrumY.value.forEach((y, bucket) => {
    const { xCenter } = xLocsFromBucket(bucket);
    const xPixel = Math.floor(xCenter);
    const intensity = intensityFromYLoc(y);
    // Alpha is inverted intensity. More intensity = more transparent = smaller alpha
    const alpha = (1 - intensity).toFixed(3);
    // Don't draw anything for the first xPixel.
    // Wait until the second xPixel to draw the first rectangle or gradient.
    if (xPreviousPixel === null || previousAlpha === null) {
      xPreviousPixel = xPixel;
      previousAlpha = alpha;
      return;
    }
    drawRectangle(xPreviousPixel, previousAlpha, xPixel, alpha);
    xPreviousPixel = xPixel;
    previousAlpha = alpha;
  });
};

watchEffect(drawBackground);
watchEffect(redrawOverlay);
watch(currentlyDrawing, (newCurrentlyDrawing) => {
  if (!newCurrentlyDrawing) {
    redrawOverlay();
  }
});
</script>

<style>
.rainbow-offset {
  margin: 0 0 0 28px;
}
</style>
