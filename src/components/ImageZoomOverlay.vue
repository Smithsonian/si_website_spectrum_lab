<template>
  <div class="position-relative">
    <div
      ref="pointingArea"
      @pointerenter="handlePointerMove"
      @pointermove="handlePointerMove"
      @pointerleave="handlePointerLeave"
    >
      <img :src="src" class="challenge-image" />
    </div>
    <div
      v-show="pointingOver"
      class="zoom-container"
      :style="{
        height: `${Y_CONTAINER_HEIGHT}px`,
        width: `${X_CONTAINER_WIDTH}px`,
        top: '50px',
        left: `-${X_CONTAINER_WIDTH + 25}px`,
      }"
    >
      <img
        ref="zoomedImage"
        :src="zoomSrc"
        class="zoom-contents"
        :style="{ top: `${top}px`, left: `${left}px` }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, useTemplateRef } from 'vue';
const X_CONTAINER_WIDTH = 250;
const Y_CONTAINER_HEIGHT = 200;

defineProps<{ src: string; zoomSrc: string }>();

const pointingOver = ref(false);
const xPointing = ref(0);
const yPointing = ref(0);
const pointingArea = useTemplateRef('pointingArea');
const zoomedImage = useTemplateRef('zoomedImage');

const top = computed((): number => {
  if (!pointingArea.value || !zoomedImage.value) {
    return 0;
  }
  const rect = pointingArea.value.getBoundingClientRect();
  const zoomAmount = zoomedImage.value.height / rect.height;

  const yPointingZoomed = yPointing.value * zoomAmount;

  let yMoveImageUp = yPointingZoomed - Y_CONTAINER_HEIGHT / 2;
  const topBoundary = 0;
  yMoveImageUp = yMoveImageUp < topBoundary ? topBoundary : yMoveImageUp;
  const bottomBoundary = zoomedImage.value.height - Y_CONTAINER_HEIGHT;
  yMoveImageUp = yMoveImageUp > bottomBoundary ? bottomBoundary : yMoveImageUp;

  return -1 * yMoveImageUp;
});

const left = computed((): number => {
  if (!pointingArea.value || !zoomedImage.value) {
    return 0;
  }
  const rect = pointingArea.value.getBoundingClientRect();
  const zoomAmount = zoomedImage.value.width / rect.width;

  const xPointingZoomed = xPointing.value * zoomAmount;

  let xMoveImageLeft = xPointingZoomed - X_CONTAINER_WIDTH / 2;
  const leftBoundary = 0;
  xMoveImageLeft =
    xMoveImageLeft < leftBoundary ? leftBoundary : xMoveImageLeft;
  const rightBoundary = zoomedImage.value.width - X_CONTAINER_WIDTH;
  xMoveImageLeft =
    xMoveImageLeft > rightBoundary ? rightBoundary : xMoveImageLeft;
  return -1 * xMoveImageLeft;
});

const handlePointerMove = (e: PointerEvent): void => {
  e.preventDefault();
  if (!pointingOver.value) {
    pointingOver.value = true;
  }

  xPointing.value = e.offsetX;
  yPointing.value = e.offsetY;
};

const handlePointerLeave = (e: PointerEvent): void => {
  e.preventDefault();
  pointingOver.value = false;
};
</script>

<style>
.zoom-container {
  position: absolute;
  overflow: hidden;
  outline: 5px solid var(--sl-navy);
  background-color: var(--sl-navy);
}

.zoom-contents {
  position: absolute;
}
</style>
