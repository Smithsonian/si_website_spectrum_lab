<template>
  <div class="rainbow-offset">
    <div class="rainbow-div position-relative overflow-hidden rounded-top-4">
      <canvas
        ref="background"
        :width="CHART_WIDTH"
        :height="RAINBOW_HEIGHT"
        class="d-block"
        >Full-intensity spectrum background</canvas
      >
      <canvas
        ref="overlay"
        class="position-absolute"
        style="top: 0px; left: 0px"
        :width="CHART_WIDTH"
        :height="RAINBOW_HEIGHT"
        >Transparency increases or decreases based on chart intensity, hiding or
        revealing the background</canvas
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { CHART_WIDTH, RAINBOW_HEIGHT } from '@/constants';
import { spectrumDataKey, zoomKey } from '@/injectionKeys';
import { computed, inject, onMounted, ref, useTemplateRef, watch } from 'vue';

const data = inject(spectrumDataKey, ref([]));
const zoom = inject(zoomKey, ref(1));

const rainbowImage = new Image();
rainbowImage.src = 'includes/AI_common/images/Visible_Spectrum_1.png';

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

// The left side is always 0.2 microns. The right side, at zoom 1, is 0.95 microns.
// The chart drawing math assumes the chart to be 750 pixels wide.
// Therefore, each pixel is assumed to be 1 nanometer (at zoom 1).
// However, layout needs have moved the chart width away from 750.
// The "pixel zoom" adjusts the zoom to compensate for the ratio of the actual width vs 750.
const pixelZoom = computed(() => {
  const pixelsPerZ1Nm = CHART_WIDTH / 750;
  return Number((pixelsPerZ1Nm * zoom.value).toFixed(3));
});
const minWavelength = 0.2;

// Get x position corresponding to a wavelength in microns
const xPosFromWavelength = (wavelength: number): number =>
  (wavelength - minWavelength) * 1000 * pixelZoom.value;

const drawBackground = () => {
  const context = backgroundCtx.value;
  if (!background.value || !context) {
    return;
  }
  context.fillStyle = '#dddddd';
  context.fillRect(0, 0, background.value.width, background.value.height);
  const xRainbowStart = xPosFromWavelength(0.4);
  const xRainbowEnd = xPosFromWavelength(0.7);
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
  drawOverlay();
  // wait to load the image before drawing the background
  rainbowImage.decode().then(drawBackground);
});

const drawOverlay = () => {
  const context = overlayCtx.value;
  if (!context) {
    return;
  }
  // Starting point to ensure spectrum areas we don't draw to stay full black
  blackOutOverlay();

  // We need to take care to draw rectangles the same way whether the data is sparse or
  // dense, which is tough using alphas.
  // Instead, group the data by pixel, then average the intensities of the data
  // that share a pixel
  const intensitiesByPixel = new Map<number, number[]>();
  for (const datum of data.value) {
    const [wavelength, intensity] = datum;
    const xPosition = (wavelength - minWavelength) * 1000 * pixelZoom.value;
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
    if (xPreviousPixel === null) {
      xPreviousPixel = xPixel;
      previousAlpha = alpha;
      continue;
    }
    const xWidth = xPixel - xPreviousPixel;
    // First, clear the existing blackout
    context.clearRect(xPreviousPixel, 0, xWidth, RAINBOW_HEIGHT);
    if (xWidth === 1) {
      // Fillstyle is a single alpha
      context.fillStyle = `rgb(0 0 0 / ${alpha})`;
    } else {
      // Fillstyle is an alpha gradient from left to right
      const gradient = context.createLinearGradient(
        xPreviousPixel,
        0,
        xPixel,
        0,
      );
      gradient.addColorStop(0, `rgb(0 0 0 / ${previousAlpha})`);
      gradient.addColorStop(1, `rgb(0 0 0 / ${alpha})`);
      context.fillStyle = gradient;
    }
    context.fillRect(xPreviousPixel, 0, xWidth, RAINBOW_HEIGHT);
    if (xPixel > CHART_WIDTH) {
      break;
    }
    xPreviousPixel = xPixel;
    previousAlpha = alpha;
  }
};

watch([zoom, backgroundCtx], () => {
  drawBackground();
});
watch([zoom, data, overlayCtx], () => {
  drawOverlay();
});
</script>

<style>
.rainbow-offset {
  margin: 0 0 0 28px;
}
</style>
