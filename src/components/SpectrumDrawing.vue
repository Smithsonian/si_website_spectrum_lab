<template>
  <div class="drawn-chart-bg position-relative">
    <div
      v-if="showClickHere"
      class="position-absolute color-sl-dark-purple drawing-click-here-layer"
    >
      <div>
        Click here to draw
        <FontAwesomeIcon :icon="['fas', 'pencil']"></FontAwesomeIcon>
      </div>
    </div>
    <canvas
      ref="canvas"
      :width="CHART_WIDTH"
      :height="CHART_HEIGHT"
      class="drawn-chart d-block"
      @pointerdown="handlePointerDown"
      @pointermove="handlePointerMove"
      @pointerleave="handlePointerLeave"
      >Spectrum intensity vs wavelength chart, drawn by the user</canvas
    >
    <div
      ref="spectraImageTutAnchor"
      class="position-absolute"
      style="bottom: 20px; left: 300px; width: 0; height: 0"
    ></div>
    <SpecTutPopupGraph :anchor-elem="spectraImageTutAnchor" />
  </div>
</template>

<script setup lang="ts">
import { CHART_HEIGHT, CHART_WIDTH } from '@/constants';
import { zoomKey } from '@/injectionKeys';
import {
  bucketDatumFromLocs,
  bucketFromXLoc,
  useCurrentlyDrawing,
  useDrawnSpectrumY,
  xLocsFromBucket,
} from '@/utils/drawingUtils';
import { computed, inject, ref, useTemplateRef, watch, watchEffect } from 'vue';

const spectraImageTutAnchor = useTemplateRef('spectraImageTutAnchor');
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

const { drawnSpectrumY, clearDrawnSpectrumY, setBucket } = useDrawnSpectrumY();
const { currentlyDrawing, setCurrentlyDrawing } = useCurrentlyDrawing();
const showClickHere = ref(true);
// Hide "click here" when drawing data is present, show again when cleared
watchEffect(() => {
  if (drawnSpectrumY.value.length > 0) {
    showClickHere.value = false;
  } else {
    showClickHere.value = true;
  }
});

const mostRecentBucket = ref<number | null>(null);
watch(currentlyDrawing, (newCurrentlyDrawing) => {
  if (!newCurrentlyDrawing) {
    mostRecentBucket.value = null;
  }
});

const drawBucket = (bucket: number): void => {
  const ctx = context.value;
  if (!ctx) {
    return;
  }
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

const updateCorrespondingBucket = (xLoc: number, yLoc: number): void => {
  const { bucket, yInRange } = bucketDatumFromLocs(xLoc, yLoc);
  setBucket(bucket, yInRange);
  mostRecentBucket.value = bucket;
};

const updateDraggedBuckets = (xLoc: number, yLoc: number): void => {
  if (mostRecentBucket.value === null) {
    updateCorrespondingBucket(xLoc, yLoc);
    return;
  }

  const currentBucket = bucketFromXLoc(xLoc);
  const bucketDifference = currentBucket - mostRecentBucket.value;
  if (Math.abs(bucketDifference) <= 1) {
    // No intermediate buckets to draw
    updateCorrespondingBucket(xLoc, yLoc);
    return;
  }
  // We do have intermediate buckets to draw
  const { xCenter: xRecent } = xLocsFromBucket(mostRecentBucket.value);
  const yRecent = drawnSpectrumY.value[mostRecentBucket.value];
  const xDiff = xLoc - xRecent;
  const yDiff = yLoc - yRecent;
  const slope = yDiff / xDiff;
  const intercept = yLoc - slope * xLoc;
  const updateIntermediateBucket = (b: number): void => {
    const { xCenter } = xLocsFromBucket(b);
    const yLine = xCenter * slope + intercept;
    updateCorrespondingBucket(xCenter, yLine);
  };
  // Handle both left and right drags
  if (mostRecentBucket.value < currentBucket) {
    // right drag
    for (let b = mostRecentBucket.value + 1; b <= currentBucket; b++) {
      updateIntermediateBucket(b);
    }
  } else {
    // left drag
    for (let b = mostRecentBucket.value - 1; b >= currentBucket; b--) {
      updateIntermediateBucket(b);
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
    drawBucket(bucket);
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
watchEffect(drawWholeChart);

const handlePointerDown = (e: PointerEvent) => {
  e.preventDefault();
  updateCorrespondingBucket(e.offsetX, e.offsetY);
  setCurrentlyDrawing(true);
};
const handlePointerMove = (e: PointerEvent) => {
  e.preventDefault();
  if (currentlyDrawing.value) {
    updateDraggedBuckets(e.offsetX, e.offsetY);
  }
};
const handlePointerLeave = (e: PointerEvent) => {
  e.preventDefault();
  if (currentlyDrawing.value) {
    updateDraggedBuckets(e.offsetX, e.offsetY);
    mostRecentBucket.value = null;
  }
};

const zoom = inject(zoomKey, ref(1));
watch(zoom, () => {
  clearDrawnSpectrumY();
});
</script>

<style>
.drawn-chart-bg {
  background-color: white;
  z-index: 0;
}

.drawing-click-here-layer {
  /* Keep it behind the canvas */
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}
</style>
