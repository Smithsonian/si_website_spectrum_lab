<template>
  <div class="spectrum-canvas">
    <div class="d-flex align-items-start">
      <div class="left-axis-label">
        More Light
        <span class="mt-1">
          <FontAwesomeIcon :icon="['fas', 'arrow-up']" transform="rotate-180"
        /></span>
      </div>
      <div>
        <div class="d-flex">
          <LeftAxis />
          <div style="height: 150px">
            <canvas ref="chart" width="610" height="150"
              >Spectrum intensity vs wavelength chart</canvas
            >
          </div>
        </div>
        <BottomAxis />
        <div class="text-center">Wavelength (Microns)</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTemplateRef, onMounted } from 'vue';
const chartCanvas = useTemplateRef('chart');
let chartCtx: CanvasRenderingContext2D | null = null;

const clearChart = () => {
  if (!chartCanvas.value) {
    return;
  }
  chartCtx = chartCanvas.value.getContext('2d');
  if (!chartCtx) {
    return;
  }
  chartCtx.fillStyle = 'white';
  chartCtx.fillRect(0, 0, chartCanvas.value.width, chartCanvas.value.height);
};

onMounted(() => {
  clearChart();
});
</script>

<style>
.left-axis-label {
  writing-mode: vertical-rl;
  text-align: center;
  transform: rotate(180deg);
  height: 150px;
}
.spectrum-canvas {
  width: 670px;
}
</style>
