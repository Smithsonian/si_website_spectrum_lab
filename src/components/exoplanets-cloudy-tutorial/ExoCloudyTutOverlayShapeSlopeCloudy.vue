<script setup lang="ts">
import { CHART_HEIGHT, CHART_WIDTH } from '@/constants';
// See https://www.aleksandrhovhannisyan.com/blog/svg-tutorial/ for a SVG by hand tutorial :D
</script>

<template>
  <svg
    class="position-absolute shape-slope-clear-svg"
    viewBox="0 0 610 150"
    :style="{ height: CHART_HEIGHT, width: CHART_WIDTH }"
  >
    <path
      d="
        M 5 37
        q 20 -25 100 -25
        h 400
        q 80 0 100 25
      "
    />
  </svg>
</template>

<style>
.shape-slope-clear-svg {
  top: 0;
  left: 0;
  stroke: var(--gen-black);
  stroke-width: 2;
  fill: none;
}
</style>
