<template>
  <div class="drawn-chart-bg">
    <canvas
      ref="canvas"
      :width="CHART_WIDTH"
      :height="CHART_HEIGHT"
      class="drawn-chart d-block"
      @pointerdown="handlePointerDown"
      @pointermove="handlePointerMove"
      @pointerup="handlePointerUp"
      @pointerleave="handlePointerLeave"
      >Spectrum intensity vs wavelength chart, drawn by the user</canvas
    >
  </div>
</template>

<script setup lang="ts">
import { CHART_HEIGHT, CHART_WIDTH, X_BUCKET_WIDTH } from '@/constants';
import { createRefWithUpdater, drawnSpectrumDataKey } from '@/injectionKeys';
import { bucketFromXLoc, yInRangeFromY } from '@/utils/drawingUtils';
import { computed, inject, onMounted, ref, useTemplateRef, watch } from 'vue';
const canvas = useTemplateRef('canvas');
const context = computed(() => {
  if (!canvas.value) {
    return null;
  }
  const newContext = canvas.value.getContext('2d');
  if (!newContext) {
    return null;
  }
  newContext.fillStyle = 'green';
  return newContext;
});

const clearChart = () => {
  const ctx = context.value;
  if (!ctx) {
    return;
  }
  ctx.clearRect(0, 0, CHART_WIDTH, CHART_HEIGHT);
};

onMounted(() => {
  clearChart();
});

const currentlyDrawing = ref(false);

const drawBucket = (e: PointerEvent): void => {
  const ctx = context.value;
  if (!ctx) {
    return;
  }
  const bucket = bucketFromXLoc(e.offsetX);
  // Clear this bucket's rectangle
  const xBucketStart = bucket * X_BUCKET_WIDTH;
  ctx.clearRect(xBucketStart, 0, X_BUCKET_WIDTH, CHART_HEIGHT);

  // Draw point at the center
  const xCenter = (bucket + 0.5) * X_BUCKET_WIDTH;
  const yInRange = yInRangeFromY(e.offsetY);
  ctx.beginPath();
  ctx.arc(xCenter, yInRange, 1.5, 0, 2 * Math.PI);
  ctx.fill();
};

const handlePointerDown = (e: PointerEvent) => {
  e.preventDefault();
  drawBucket(e);
  currentlyDrawing.value = true;
};
const handlePointerMove = (e: PointerEvent) => {
  e.preventDefault();
  if (currentlyDrawing.value) {
    drawBucket(e);
  }
};
const handlePointerUp = (e: PointerEvent) => {
  e.preventDefault();
  currentlyDrawing.value = false;
};
const handlePointerLeave = (e: PointerEvent) => {
  e.preventDefault();
  drawBucket(e);
  currentlyDrawing.value = false;
};

const { ref: drawnSpectrumData } = inject(
  drawnSpectrumDataKey,
  createRefWithUpdater([]),
);

watch(drawnSpectrumData, (newDrawnSpectrumData) => {
  if (newDrawnSpectrumData.length === 0) {
    clearChart();
  }
});
</script>

<style>
.drawn-chart-bg {
  background-color: white;
}
</style>
