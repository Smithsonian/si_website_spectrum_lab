<template>
  <div class="spectrum-canvas">
    <div class="d-flex">
      <div class="left-axis-label">
        More Light
        <span class="mt-1">
          <FontAwesomeIcon :icon="['fas', 'arrow-up']" transform="rotate-180"
        /></span>
      </div>
      <SpectrumCursorOverlay>
        <SpectrumRainbow :data="data" />
        <div class="d-flex">
          <LeftAxis />
          <canvas ref="chart" :width="CHART_WIDTH" height="150" class="chart"
            >Spectrum intensity vs wavelength chart</canvas
          >
        </div>
        <BottomAxis />
        <div class="text-center">Wavelength (Microns)</div>
      </SpectrumCursorOverlay>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CHART_HEIGHT, CHART_WIDTH } from '@/constants';
import { showLinesKey, zoomKey } from '@/injectionKeys';
import type { SpectrumDatum } from '@/utils';
import { useTemplateRef, onMounted, watch, computed, inject, ref } from 'vue';
import SpectrumCursorOverlay from './SpectrumCursorOverlay.vue';

const { data } = defineProps<{
  data: SpectrumDatum[];
}>();
const zoom = inject(zoomKey, ref(1));
const showLines = inject(showLinesKey, ref(true));

const canvas = useTemplateRef('chart');
const context = computed(() => {
  if (!canvas.value) {
    return null;
  }
  return canvas.value.getContext('2d');
});

onMounted(() => {
  drawData();
});

watch([zoom, () => data, showLines, context], () => {
  drawData();
});

const clearChart = () => {
  if (!canvas.value) {
    return;
  }
  const ctx = context.value;
  if (!ctx) {
    return;
  }
  ctx.fillStyle = 'white';
  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);
  ctx.fillRect(0, 0, canvas.value.width, canvas.value.height);
};

const drawData = () => {
  const ctx = context.value;
  if (!ctx) {
    return;
  }
  clearChart();

  // Color setup
  const dataColor = 'blue';
  ctx.fillStyle = dataColor;
  ctx.strokeStyle = dataColor;

  // The left side is always 0.2 microns. The right side, at zoom 1, is 0.95 microns.
  // The chart drawing math assumes the chart to be 750 pixels wide.
  // Therefore, each pixel is assumed to be 1 nanometer (at zoom 1).
  // However, layout needs have moved the chart width away from 750.
  // The "pixel zoom" adjusts the zoom to compensate for the ratio of the actual width vs 750.
  const pixelsPerZ1Nm = CHART_WIDTH / 750;
  const pixelZoom = Number((pixelsPerZ1Nm * zoom.value).toFixed(3));
  const minWavelength = 0.2;

  // The intensity axis is inverted due to canvas coordinates increasing top to bottom.
  // That's normal for document order but backwards for graphs.
  // For sanity, count from the bottom and flip at the end.
  // For sharpness, the ticks are at 0.5 off from the grid, since they're 1 pixel wide.
  // Each tick is 13 pixels apart, corresponding to 0.1 intensity.
  // The 0 tick is 10.5 up from the bottom.
  // The 1 tick is 140.5 up from the bottom, 130 pixels above.
  const yPixel0to1Range = 130;
  const yPixel0Level = 10.5;

  let xPrevPosition: number | null = null;
  let yPrevPosition: number | null = null;

  for (let [wavelength, intensity] of data) {
    const xPosition = (wavelength - minWavelength) * 1000 * pixelZoom;
    const yPosition =
      CHART_HEIGHT - (intensity * yPixel0to1Range + yPixel0Level);
    if (xPosition < 0) {
      // Off the left edge, set this as previous position and move on
      xPrevPosition = xPosition;
      yPrevPosition = yPosition;
      continue;
    }
    if (showLines.value && xPrevPosition !== null && yPrevPosition !== null) {
      // Draw line to previous datum, even if the current one is off the right edge
      ctx.beginPath();
      ctx.moveTo(xPosition, yPosition);
      ctx.lineTo(xPrevPosition, yPrevPosition);
      ctx.stroke();
    }
    // Draw circle for the current datum unless it's off the edge
    // And save its position so the next datum can draw a line back to it
    if (xPosition > CHART_WIDTH) {
      break;
    }
    xPrevPosition = xPosition;
    yPrevPosition = yPosition;
    ctx.beginPath();
    ctx.arc(xPosition, yPosition, 1.5, 0, 2 * Math.PI);
    ctx.fill();
  }
};
</script>

<style>
.left-axis-label {
  margin: 60px 0 0 0;
  writing-mode: vertical-rl;
  text-align: center;
  transform: rotate(180deg);
  height: 150px;
}
.spectrum-canvas {
  width: 670px;
}
</style>
