<template>
  <div>
    <div class="d-flex">
      <div>
        <div class="left-axis">More Light</div>
      </div>
      <canvas ref="chart" width="610" height="150"
        >Spectrum intensity vs wavelength chart</canvas
      >
    </div>
    <div class="text-center">Wavelength (Microns)</div>
  </div>
</template>

<script setup lang="ts">
import { useTemplateRef, onMounted } from 'vue';
const canvas = useTemplateRef('chart');
let ctx: CanvasRenderingContext2D | null = null;

onMounted(() => {
  if (!canvas.value) {
    return;
  }
  ctx = canvas.value.getContext('2d');
  if (!ctx) {
    return;
  }
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.value.width, canvas.value.height);
});
</script>

<style>
.left-axis {
  transform-origin: bottom right;
  transform: rotate(270deg);
}
</style>
