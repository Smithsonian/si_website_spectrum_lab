<script setup lang="ts">
import { CHART_HEIGHT, CHART_WIDTH } from '@/constants';
// See https://www.aleksandrhovhannisyan.com/blog/svg-tutorial/ for a SVG by hand tutorial :D
</script>

<template>
  <svg
    class="position-absolute shape-slope-svg"
    viewBox="0 0 610 150"
    :style="{ height: CHART_HEIGHT, width: CHART_WIDTH }"
  >
    <path
      d="
        M 5 120
        q 200 -95 600 -95
      "
    />
  </svg>
</template>
