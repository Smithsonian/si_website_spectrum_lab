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
  </div>
</template>

<script setup lang="ts">
import { CHART_HEIGHT, CHART_WIDTH, RAINBOW_HEIGHT } from '@/constants';
import { createRefWithUpdater, xPointerLocationKey } from '@/injectionKeys';
import { computed, inject } from 'vue';

const props = withDefaults(defineProps<{ show?: boolean }>(), { show: true });
const { ref: xPointerLocation } = inject(
  xPointerLocationKey,
  createRefWithUpdater(null),
);

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
  return xLoc;
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
