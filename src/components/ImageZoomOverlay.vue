<template>
  <!-- Create stacking context -->
  <div class="position-relative" v-resize-observer="onResizeOuterDiv">
    <!-- Render the image below the cursor -->
    <img :src="src" class="challenge-image" />
    <!-- Absolutely positioned rectangle following the pointer -->
    <div
      v-show="pointingOver"
      class="position-absolute pointer-rectangle"
      :style="{
        height: `${yPointerRectHeight}px`,
        width: `${xPointerRectWidth}px`,
        top: `${yPointerRectTop}px`,
        left: `${xPointerRectLeft}px`,
      }"
    ></div>
    <!-- Absolutely positioned zoomed view -->
    <div
      v-show="pointingOver"
      class="position-absolute zoom-window"
      :style="{
        height: `${Y_ZOOM_WINDOW_HEIGHT}px`,
        width: `${X_ZOOM_WINDOW_WIDTH}px`,
        top: '50px',
        left: `-${X_ZOOM_WINDOW_WIDTH + 25}px`,
      }"
    >
      <img
        v-resize-observer="onResizeZoomedImage"
        :src="zoomSrc"
        class="position-absolute"
        :style="{ top: `${yZoomedTop}px`, left: `${xZoomedLeft}px` }"
      />
    </div>
    <!-- This must be after/above everything else to get the pointer events -->
    <div
      class="position-absolute"
      :style="{
        top: '0px',
        left: '0px',
        height: `${yPointingAreaHeight}px`,
        width: `${xPointingAreaWidth}px`,
      }"
      @pointerenter="handlePointerMove"
      @pointermove="handlePointerMove"
      @pointerleave="handlePointerLeave"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { vResizeObserver } from '@vueuse/components';
import type { ResizeObserverCallback } from '@vueuse/core';

/*
These are the height and width of the "zoomed in" window to the left.

The real, 100% size of the `zoomSrc` image determines how "zoomed in" the window appears.

Resize the zoomed image with imagemagick or similar to balance the amount of detail, vs the amount of context.

The size of the `src` image doesn't matter beyond setting its image quality, avoiding browser-based resizing, etc.
You can even use the exact same image, the only issue would be it's probably kinda big to download.
Its size on the page is determined by its container height or width, probably the width of the instruction component.
*/
const X_ZOOM_WINDOW_WIDTH = 250;
const Y_ZOOM_WINDOW_HEIGHT = 200;
defineProps<{ src: string; zoomSrc: string }>();

const pointingOver = ref(false);
const xPointer = ref(0);
const yPointer = ref(0);
const yPointingAreaHeight = ref(1);
const xPointingAreaWidth = ref(1);
const yZoomedImageHeight = ref(1);
const xZoomedImageWidth = ref(1);

// We cannot hardcode either of these sizes, so we need to watch them
const onResizeOuterDiv: ResizeObserverCallback = (entries) => {
  const [outerDiv] = entries;
  const { height, width } = outerDiv.contentRect;
  // Discard duplicates and zeroes
  if (height > 0 && yPointingAreaHeight.value !== height) {
    yPointingAreaHeight.value = height;
    xPointingAreaWidth.value = width;
  }
};
const onResizeZoomedImage: ResizeObserverCallback = (entries) => {
  const [zoomedImage] = entries;
  const { height, width } = zoomedImage.contentRect;
  // Discard duplicates and zeroes
  if (height > 0 && yZoomedImageHeight.value !== height) {
    yZoomedImageHeight.value = height;
    xZoomedImageWidth.value = width;
  }
};

const zoomAmount = computed(
  (): number => yZoomedImageHeight.value / yPointingAreaHeight.value,
);

const yZoomedTop = computed((): number => {
  const yPointingZoomed = yPointer.value * zoomAmount.value;

  let yMoveImageUp = yPointingZoomed - Y_ZOOM_WINDOW_HEIGHT / 2;
  const topBoundary = 0;
  yMoveImageUp = yMoveImageUp < topBoundary ? topBoundary : yMoveImageUp;
  const bottomBoundary = yZoomedImageHeight.value - Y_ZOOM_WINDOW_HEIGHT;
  yMoveImageUp = yMoveImageUp > bottomBoundary ? bottomBoundary : yMoveImageUp;

  return -1 * yMoveImageUp;
});

const xZoomedLeft = computed((): number => {
  const xPointingZoomed = xPointer.value * zoomAmount.value;

  let xMoveImageLeft = xPointingZoomed - X_ZOOM_WINDOW_WIDTH / 2;
  const leftBoundary = 0;
  xMoveImageLeft =
    xMoveImageLeft < leftBoundary ? leftBoundary : xMoveImageLeft;
  const rightBoundary = xZoomedImageWidth.value - X_ZOOM_WINDOW_WIDTH;
  xMoveImageLeft =
    xMoveImageLeft > rightBoundary ? rightBoundary : xMoveImageLeft;
  return -1 * xMoveImageLeft;
});

const yPointerRectHeight = computed(
  (): number => Y_ZOOM_WINDOW_HEIGHT / zoomAmount.value,
);

const xPointerRectWidth = computed(
  (): number => X_ZOOM_WINDOW_WIDTH / zoomAmount.value,
);

const yPointerRectTop = computed(
  (): number => (-1 * yZoomedTop.value) / zoomAmount.value,
);

const xPointerRectLeft = computed(
  (): number => (-1 * xZoomedLeft.value) / zoomAmount.value,
);

const handlePointerMove = (e: PointerEvent): void => {
  e.preventDefault();
  if (!pointingOver.value) {
    pointingOver.value = true;
  }

  xPointer.value = e.offsetX;
  yPointer.value = e.offsetY;
};

const handlePointerLeave = (e: PointerEvent): void => {
  e.preventDefault();
  pointingOver.value = false;
};
</script>

<style>
.zoom-window {
  overflow: clip;
  outline: 5px solid var(--sl-royal-blue);
  background-color: var(--sl-royal-blue);
}

.pointer-rectangle {
  background-color: var(--sl-light-blue);
  opacity: 0.7;
}
</style>
