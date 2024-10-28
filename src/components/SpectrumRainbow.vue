<template>
  <div class="rainbow-div position-relative overflow-hidden rounded-top-4">
    <canvas ref="background" :width="CHART_WIDTH" :height="CHART_HEIGHT"
      >Full-intensity spectrum background</canvas
    >
    <canvas
      ref="overlay"
      class="rainbow-overlay position-absolute"
      :width="CHART_WIDTH"
      :height="CHART_HEIGHT"
      >Transparency increases or decreases based on chart intensity, hiding or
      revealing the background</canvas
    >
  </div>
</template>

<script setup lang="ts">
import { CHART_HEIGHT, CHART_WIDTH, RAINBOW_HEIGHT } from '@/constants';
import type { SpectrumDatum } from '@/utils';
import { computed, onMounted, useTemplateRef, watch } from 'vue';

const { zoom, data } = defineProps<{
  zoom: number;
  data: SpectrumDatum[];
}>();

const rainbowImage = new Image();
rainbowImage.src = 'includes/AI_common/images/Visible_Spectrum_1.png';

const background = useTemplateRef('background');
let backgroundCtx: CanvasRenderingContext2D | null = null;
const overlay = useTemplateRef('overlay');
let overlayCtx: CanvasRenderingContext2D | null = null;

// The left side is always 0.2 microns. The right side, at zoom 1, is 0.95 microns.
// The chart drawing math assumes the chart to be 750 pixels wide.
// Therefore, each pixel is assumed to be 1 nanometer (at zoom 1).
// However, layout needs have moved the chart width away from 750.
// The "pixel zoom" adjusts the zoom to compensate for the ratio of the actual width vs 750.
const pixelZoom = computed(() => {
  const pixelsPerZ1Nm = CHART_WIDTH / 750;
  return Number((pixelsPerZ1Nm * zoom).toFixed(3));
});
const minWavelength = 0.2;

// Get x position corresponding to a wavelength in microns
const xPosFromWavelength = (wavelength: number): number =>
  (wavelength - minWavelength) * 1000 * pixelZoom.value;

const drawBackground = () => {
  if (!background.value || !backgroundCtx) {
    return;
  }
  backgroundCtx.fillStyle = '#dddddd';
  backgroundCtx.fillRect(0, 0, background.value.width, background.value.height);
  const xRainbowStart = xPosFromWavelength(0.4);
  const xRainbowEnd = xPosFromWavelength(0.7);
  const xRainbowWidth = xRainbowEnd - xRainbowStart;
  backgroundCtx.drawImage(
    rainbowImage,
    xRainbowStart,
    0,
    xRainbowWidth,
    background.value.height,
  );
};

const blackOutOverlay = () => {
  if (!overlay.value || !overlayCtx) {
    return;
  }
  overlayCtx.fillStyle = 'black';
  overlayCtx.fillRect(0, 0, overlay.value.width, overlay.value.height);
};

onMounted(() => {
  if (!overlay.value) {
    return;
  }
  overlayCtx = overlay.value.getContext('2d');
  blackOutOverlay();
  if (!background.value) {
    return;
  }
  backgroundCtx = background.value.getContext('2d');
  // wait to load the image before drawing the background
  rainbowImage.decode().then(drawBackground);
});

const drawOverlay = () => {
  if (!overlayCtx) {
    return;
  }
  // Starting point to ensure spectrum areas we don't draw to stay full black
  blackOutOverlay();

  // We need to take care to draw rectangles the same way whether the data is sparse or
  // dense, which is tough using alphas.
  // Instead, group the data by pixel, then average the intensities of the data
  // that share a pixel
  const intensitiesByPixel = new Map<number, number[]>();
  for (const datum of data) {
    const [wavelength, intensity] = datum;
    const xPosition = (wavelength - minWavelength) * 1000 * pixelZoom.value;
    const xPixel = Math.floor(xPosition);
    // Skip pixels off the left edge
    if (xPixel < 0) {
      continue;
    }
    if (!intensitiesByPixel.has(xPixel)) {
      intensitiesByPixel.set(xPixel, [intensity]);
    } else {
      intensitiesByPixel.get(xPixel)?.push(intensity);
    }
  }

  // Draw the rectangles, using average intensities
  let xPreviousPixel: number | null = null;
  for (const [xPixel, intensities] of intensitiesByPixel.entries()) {
    if (!xPreviousPixel) {
      // Skip first xPixel, use it for the second xPixel which draws the first rectangle
      xPreviousPixel = xPixel;
      continue;
    }
    const intensitySum = intensities.reduce(
      (runningSum, intensity) => runningSum + intensity,
    );
    const intensityAverage = intensitySum / intensities.length;
    // Alpha is inverted intensity. More intensity = more transparent = smaller alpha
    const alpha = (1 - intensityAverage).toFixed(3);
    const xWidth = xPixel - xPreviousPixel;
    overlayCtx.fillStyle = `rgb(0 0 0 / ${alpha})`;
    // First, clear the existing blackout
    overlayCtx.clearRect(xPreviousPixel, 0, xWidth, RAINBOW_HEIGHT);
    // Then, draw the alpha overlay
    overlayCtx.fillRect(xPreviousPixel, 0, xWidth, RAINBOW_HEIGHT);
    if (xPixel > CHART_WIDTH) {
      break;
    }
    xPreviousPixel = xPixel;
  }
};

watch([() => zoom], async () => {
  drawBackground();
});
watch([() => zoom, () => data], async () => {
  drawOverlay();
});
</script>

<style>
.rainbow-div {
  height: 60px;
  margin: 0 0 0 28px;
}
.rainbow-overlay {
  top: 0;
  left: 0;
}
</style>
