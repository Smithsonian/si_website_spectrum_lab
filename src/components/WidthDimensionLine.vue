<template>
  <div
    class="position-absolute d-flex flex-column flex-fill"
    :style="{
      top: `${y}px`,
      left: `${x1}%`,
      width: `${width}%`,
    }"
  >
    <div
      class="width-dimension-top"
      :style="{
        borderBottomWidth: `${BORDER_WIDTH}px`,
        height: `${topHeight}px`,
      }"
    ></div>
    <div
      class="width-dimension-bottom"
      :style="{
        height: `${bottomHeight}px`,
      }"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

// y: pixels
// x1 and x2: percents. To deal with width design changes
const props = defineProps<{ y: number; x1: number; x2: number }>();

const width = computed(() => {
  return props.x2 - props.x1;
});

const BORDER_WIDTH = 2;
const totalHeight = computed(() => {
  if (width.value > 3) {
    return 12;
  }
  return 10;
});

const topHeight = computed(() => {
  return totalHeight.value / 2;
});
const bottomHeight = computed(() => {
  return totalHeight.value / 2 - BORDER_WIDTH;
});
</script>

<style>
.width-dimension-top {
  border-width: 2px;
  border-style: solid;
  border-color: var(--gen-black);
  border-top: none;
}

.width-dimension-bottom {
  border-width: 2px;
  border-style: solid;
  border-color: var(--gen-black);
  border-top: none;
  border-bottom: none;
}
</style>
