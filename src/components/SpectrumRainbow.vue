<template>
  <div class="rainbow-div overflow-hidden rounded-top-4">
    <canvas ref="canvas" :width="CHART_WIDTH" height="60"
      >Spectrum rainbow faded in and out based on the charted intensity</canvas
    >
  </div>
</template>

<script setup lang="ts">
import { CHART_WIDTH } from '@/constants';
import { onMounted, useTemplateRef } from 'vue';

const canvas = useTemplateRef('canvas');
let ctx: CanvasRenderingContext2D | null = null;

const clearRainbow = () => {
  if (!canvas.value) {
    return;
  }
  if (!ctx) {
    return;
  }
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.value.width, canvas.value.height);
};

onMounted(() => {
  if (!canvas.value) {
    return;
  }
  ctx = canvas.value.getContext('2d');
  clearRainbow();
});
</script>

<style>
.rainbow-div {
  height: 60px;
  margin: 0 0 0 28px;
}
</style>
