<template>
  <div
    class="position-absolute d-flex flex-fill"
    :style="{
      top: `${y1}px`,
      left: `${x1}px`,
      height: `${height}px`,
    }"
  >
    <div
      class="height-dimension-left"
      :style="{
        borderRightWidth: `${BORDER_WIDTH}px`,
        width: `${leftWidth}px`,
      }"
    ></div>
    <div
      class="height-dimension-right"
      :style="{
        width: `${rightWidth}px`,
      }"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{ y1: number; x1: number; y2: number }>();

const height = computed(() => {
  return props.y2 - props.y1;
});

const BORDER_WIDTH = 2;
const totalWidth = computed(() => {
  if (height.value > 20) {
    return 12;
  }
  return 10;
});

const leftWidth = computed(() => {
  return totalWidth.value / 2;
});
const rightWidth = computed(() => {
  return totalWidth.value / 2 - BORDER_WIDTH;
});
</script>

<style>
.height-dimension-left {
  border-width: 2px;
  border-style: solid;
  border-color: var(--gen-black);
  border-left: none;
}

.height-dimension-right {
  border-width: 2px;
  border-style: solid;
  border-color: var(--gen-black);
  border-left: none;
  border-right: none;
}
</style>
