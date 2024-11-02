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
import {
  createRefWithUpdater,
  drawnSpectrumDataKey,
  zoomKey,
} from '@/injectionKeys';
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
const xMostRecent = ref<number | null>(null);
const yMostRecent = ref<number | null>(null);
watch(currentlyDrawing, (newCurrentlyDrawing) => {
  if (!newCurrentlyDrawing) {
    xMostRecent.value = null;
    yMostRecent.value = null;
  }
});

const drawPoint = (xLoc: number, yLoc: number): void => {
  const ctx = context.value;
  if (!ctx) {
    return;
  }
  const bucket = bucketFromXLoc(xLoc);
  // Clear this bucket's rectangle
  const xBucketStart = bucket * X_BUCKET_WIDTH;
  ctx.clearRect(xBucketStart, 0, X_BUCKET_WIDTH, CHART_HEIGHT);

  // Draw point at the center
  const xCenter = (bucket + 0.5) * X_BUCKET_WIDTH;
  const yInRange = yInRangeFromY(yLoc);
  ctx.beginPath();
  ctx.arc(xCenter, yInRange, 1.5, 0, 2 * Math.PI);
  ctx.fill();
  xMostRecent.value = xCenter;
  yMostRecent.value = yInRange;
};

const drawDrag = (xLoc: number, yLoc: number): void => {
  const xRecent = xMostRecent.value;
  const yRecent = yMostRecent.value;
  if (xRecent === null || yRecent === null) {
    drawPoint(xLoc, yLoc);
    return;
  }

  const mostRecentBucket = bucketFromXLoc(xRecent);
  const currentBucket = bucketFromXLoc(xLoc);
  const bucketDifference = currentBucket - mostRecentBucket;
  if (Math.abs(bucketDifference) <= 1) {
    // No intermediate buckets to draw
    drawPoint(xLoc, yLoc);
    return;
  }
  // We do have intermediate buckets to draw
  const xDiff = xLoc - xRecent;
  const yDiff = yLoc - yRecent;
  const slope = yDiff / xDiff;
  const intercept = yLoc - slope * xLoc;
  const drawBucket = (b: number): void => {
    const xCenter = (b + 0.5) * X_BUCKET_WIDTH;
    const yLine = xCenter * slope + intercept;
    drawPoint(xCenter, yLine);
  };
  // Handle both left and right drags
  if (mostRecentBucket < currentBucket) {
    // right drag
    for (let b = mostRecentBucket + 1; b <= currentBucket; b++) {
      drawBucket(b);
    }
  } else {
    // left drag
    for (let b = mostRecentBucket - 1; b >= currentBucket; b--) {
      drawBucket(b);
    }
  }
};

const handlePointerDown = (e: PointerEvent) => {
  e.preventDefault();
  drawPoint(e.offsetX, e.offsetY);
  currentlyDrawing.value = true;
};
const handlePointerMove = (e: PointerEvent) => {
  e.preventDefault();
  if (currentlyDrawing.value) {
    drawDrag(e.offsetX, e.offsetY);
  }
};
const handlePointerUp = (e: PointerEvent) => {
  e.preventDefault();
  currentlyDrawing.value = false;
};
const handlePointerLeave = (e: PointerEvent) => {
  e.preventDefault();
  if (currentlyDrawing.value) {
    drawDrag(e.offsetX, e.offsetY);
    currentlyDrawing.value = false;
  }
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
const zoom = inject(zoomKey, ref(1));
watch(zoom, () => {
  clearChart();
});
</script>

<style>
.drawn-chart-bg {
  background-color: white;
}
</style>
