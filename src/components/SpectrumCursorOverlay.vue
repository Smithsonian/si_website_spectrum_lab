<template>
  <!-- Create stacking context -->
  <div class="position-relative">
    <!-- Render children (what we're putting the cursor above) -->
    <slot></slot>
    <!-- Position at the pointer. This also makes a new stacking context we
     use to arrange the cursor parts around the pointer. -->
    <div
      v-if="xRenderLocation"
      class="cursor position-absolute"
      :style="`top: 0px; left: ${xRenderLocation}px`"
    >
      <div
        class="cursor-line position-absolute"
        :style="`height: ${CHART_HEIGHT + RAINBOW_HEIGHT}px; width: 2px; left: -1px`"
      ></div>
      <img
        :src="'includes/AI_common/images/play-button_2.png'"
        class="cursor-triangle d-block position-absolute"
      />
    </div>
    <!-- Target for pointer events. Above the cursor, so we always get the hits here. -->
    <div
      class="position-absolute pointer-event-capture"
      :style="eventCaptureStyle"
      @pointerenter="handlePointerEvent"
      @pointermove="handlePointerEvent"
      @pointerleave="handlePointerEvent"
    ></div>
  </div>
</template>

<script setup lang="ts">
import {
  CHART_HEIGHT,
  CHART_WIDTH,
  LEFT_AXIS_WIDTH,
  RAINBOW_HEIGHT,
} from '@/constants';
import { createRefWithUpdater, xPointerLocationKey } from '@/injectionKeys';
import { computed, inject } from 'vue';

const props = withDefaults(defineProps<{ show?: boolean }>(), { show: true });
const { ref: xPointerLocation, update: updateXPointerLocation } = inject(
  xPointerLocationKey,
  createRefWithUpdater(null),
);

const eventCaptureStyle =
  'top: 0px; ' +
  `left: ${LEFT_AXIS_WIDTH}px; ` +
  `height: ${CHART_HEIGHT + RAINBOW_HEIGHT}px; ` +
  `width: ${CHART_WIDTH}px`;

const handlePointerEvent = (e: PointerEvent): void => {
  e.preventDefault();
  updateXPointerLocation(e.offsetX);
};

const xRenderLocation = computed((): number | null => {
  if (!props.show) {
    return null;
  }
  const xLoc = xPointerLocation.value;
  if (xLoc === null) {
    return null;
  }
  // Sometimes pointer events send you off the edge for some reason
  if (xLoc < 0 || xLoc > CHART_WIDTH) {
    return null;
  }
  // Apply left axis offset
  return xLoc + LEFT_AXIS_WIDTH;
});
</script>

<style>
.cursor-triangle {
  height: 20px;
  width: 20px;
  top: 0px;
  left: -10px;
}
.cursor-line {
  border-left: 1px solid black;
}
</style>
