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
import { zoomKey } from '@/injectionKeys';
import {
  bucketDatumFromLocs,
  bucketFromXLoc,
  useDrawnSpectrumY,
  xLocsFromBucket,
} from '@/utils/drawingUtils';
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
  newContext.strokeStyle = 'green';
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
  drawWholeChart();
});

const { drawnSpectrumY, clearDrawnSpectrumY, setBucket } = useDrawnSpectrumY();
const currentlyDrawing = ref(false);
const mostRecentBucket = ref<number | null>(null);
watch(currentlyDrawing, (newCurrentlyDrawing) => {
  if (!newCurrentlyDrawing) {
    mostRecentBucket.value = null;
    drawWholeChart();
  }
});

const redrawBucket = (bucket: number): void => {
  const ctx = context.value;
  if (!ctx) {
    return;
  }
  // Clear this bucket's rectangle
  const xBucketStart = bucket * X_BUCKET_WIDTH;
  ctx.clearRect(xBucketStart, 0, X_BUCKET_WIDTH, CHART_HEIGHT);

  // Draw
  const { xCenter } = xLocsFromBucket(bucket);
  const yCenter = drawnSpectrumY.value[bucket];
  drawPoint(xCenter, yCenter);
};

const drawPoint = (xLoc: number, yLoc: number): void => {
  const ctx = context.value;
  if (!ctx) {
    return;
  }
  ctx.beginPath();
  ctx.arc(xLoc, yLoc, 1.5, 0, 2 * Math.PI);
  ctx.fill();
};

const redrawCorrespondingBucketAndSave = (xLoc: number, yLoc: number): void => {
  const { bucket, yInRange } = bucketDatumFromLocs(xLoc, yLoc);
  setBucket(bucket, yInRange);
  redrawBucket(bucket);
  mostRecentBucket.value = bucket;
};

const redrawDraggedBucketsAndSave = (xLoc: number, yLoc: number): void => {
  if (mostRecentBucket.value === null) {
    redrawCorrespondingBucketAndSave(xLoc, yLoc);
    return;
  }

  const currentBucket = bucketFromXLoc(xLoc);
  const bucketDifference = currentBucket - mostRecentBucket.value;
  if (Math.abs(bucketDifference) <= 1) {
    // No intermediate buckets to draw
    redrawCorrespondingBucketAndSave(xLoc, yLoc);
    return;
  }
  // We do have intermediate buckets to draw
  const { xCenter: xRecent } = xLocsFromBucket(mostRecentBucket.value);
  const yRecent = drawnSpectrumY.value[mostRecentBucket.value];
  const xDiff = xLoc - xRecent;
  const yDiff = yLoc - yRecent;
  const slope = yDiff / xDiff;
  const intercept = yLoc - slope * xLoc;
  const redrawIntermediateBucket = (b: number): void => {
    const { xCenter } = xLocsFromBucket(b);
    const yLine = xCenter * slope + intercept;
    redrawCorrespondingBucketAndSave(xCenter, yLine);
  };
  // Handle both left and right drags
  if (mostRecentBucket.value < currentBucket) {
    // right drag
    for (let b = mostRecentBucket.value + 1; b <= currentBucket; b++) {
      redrawIntermediateBucket(b);
    }
  } else {
    // left drag
    for (let b = mostRecentBucket.value - 1; b >= currentBucket; b--) {
      redrawIntermediateBucket(b);
    }
  }
};

const drawLine = (startBucket: number, endBucket: number): void => {
  const ctx = context.value;
  if (!ctx) {
    return;
  }
  const { xCenter: xCenterStart } = xLocsFromBucket(startBucket);
  const { xCenter: xCenterEnd } = xLocsFromBucket(endBucket);
  const yStart = drawnSpectrumY.value[startBucket];
  const yEnd = drawnSpectrumY.value[endBucket];

  ctx.beginPath();
  ctx.moveTo(xCenterStart, yStart);
  ctx.lineTo(xCenterEnd, yEnd);
  ctx.stroke();
};

const drawWholeChart = (): void => {
  clearChart();
  // Draw all points
  drawnSpectrumY.value.forEach((_, bucket) => {
    redrawBucket(bucket);
  });

  // Draw all lines
  let previousBucket: number | null = null;
  drawnSpectrumY.value.forEach((_, bucket) => {
    if (previousBucket === null) {
      previousBucket = bucket;
      return;
    }
    drawLine(previousBucket, bucket);
    previousBucket = bucket;
  });
};

const handlePointerDown = (e: PointerEvent) => {
  e.preventDefault();
  redrawCorrespondingBucketAndSave(e.offsetX, e.offsetY);
  currentlyDrawing.value = true;
};
const handlePointerMove = (e: PointerEvent) => {
  e.preventDefault();
  if (currentlyDrawing.value) {
    redrawDraggedBucketsAndSave(e.offsetX, e.offsetY);
  }
};
const handlePointerUp = (e: PointerEvent) => {
  e.preventDefault();
  currentlyDrawing.value = false;
};
const handlePointerLeave = (e: PointerEvent) => {
  e.preventDefault();
  if (currentlyDrawing.value) {
    redrawDraggedBucketsAndSave(e.offsetX, e.offsetY);
    currentlyDrawing.value = false;
  }
};

watch(drawnSpectrumY, (newDrawnSpectrumData) => {
  if (newDrawnSpectrumData.length === 0) {
    clearChart();
  }
});
const zoom = inject(zoomKey, ref(1));
watch(zoom, () => {
  clearDrawnSpectrumY();
});
</script>

<style>
.drawn-chart-bg {
  background-color: white;
}
</style>
