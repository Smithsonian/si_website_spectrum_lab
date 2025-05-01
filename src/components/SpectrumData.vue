<template>
  <canvas
    ref="chart"
    :width="CHART_WIDTH"
    :height="CHART_HEIGHT"
    class="d-block"
  >
    Spectrum intensity vs wavelength chart
  </canvas>
</template>

<script setup lang="ts">
import { CHART_HEIGHT, CHART_WIDTH } from '@/constants';
import { showLinesKey, spectrumDataKey, zoomKey } from '@/injectionKeys';
import { xLocFromMicrons, yLocFromIntensity } from '@/utils/chartUtils';
import { useTemplateRef, onMounted, watch, computed, inject, ref } from 'vue';

const data = inject(spectrumDataKey, ref([]));
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

watch([zoom, data, showLines, context], () => {
  drawData();
});

const clearChart = () => {
  const ctx = context.value;
  if (!ctx) {
    return;
  }
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, CHART_WIDTH, CHART_HEIGHT);
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

  let xPrevPosition: number | null = null;
  let yPrevPosition: number | null = null;

  for (const [wavelength, intensity] of data.value) {
    const xPosition = xLocFromMicrons(wavelength, zoom.value);
    const yPosition = yLocFromIntensity(intensity);
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
