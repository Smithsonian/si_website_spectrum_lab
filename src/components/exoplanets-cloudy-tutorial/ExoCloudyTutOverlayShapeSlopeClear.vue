<script setup lang="ts">
import { CHART_HEIGHT, CHART_WIDTH } from '@/constants';
// See https://www.aleksandrhovhannisyan.com/blog/svg-tutorial/ for a SVG by hand tutorial :D
</script>

<template>
  <svg
    class="position-absolute shape-slope-svg"
    viewBox="0 0 700 150"
    :style="{ height: CHART_HEIGHT, width: CHART_WIDTH }"
  >
    <path
      d="
        M 5 70
        c 100 -80 600 -80 690 0
      "
    />
  </svg>
</template>

<style>
.shape-slope-svg {
  top: 0;
  left: 0;
  stroke: var(--gen-black);
  stroke-width: 2;
  fill: none;
}
</style>
