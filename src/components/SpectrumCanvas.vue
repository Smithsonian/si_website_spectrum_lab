<template>
  <div class="spectrum-canvas">
    <div class="d-flex">
      <div class="left-axis-label">
        <div class="left-axis-rotate">
          More Light
          <span class="mt-1">
            <FontAwesomeIcon :icon="['fas', 'arrow-up']" transform="rotate-180"
          /></span>
        </div>
      </div>
      <canvas ref="leftAxis" width="20" height="150" class="ms-2"
        >Left axis ticks</canvas
      >
      <canvas ref="chart" width="610" height="150"
        >Spectrum intensity vs wavelength chart</canvas
      >
    </div>
    <div class="text-center">Wavelength (Microns)</div>
  </div>
</template>

<script setup lang="ts">
import { useTemplateRef, onMounted } from 'vue';
const chartCanvas = useTemplateRef('chart');
const leftAxisCanvas = useTemplateRef('leftAxis');
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

const drawLeftAxis = () => {
  if (!leftAxisCanvas.value) {
    return;
  }
  let ctx = leftAxisCanvas.value.getContext('2d');
  if (!ctx) {
    return;
  }
  ctx.font = '9px Myriad Pro';
  ctx.fillStyle = 'white';
  ctx.strokeStyle = 'white';
  for (let tick = 0; tick <= 10; tick++) {
    // * tick distance + offset
    const yTick = tick * 13 + 9.5;
    // Start at 1 counting down by one tenth
    const tickValue = (10 - tick) / 10;
    const tickLabel = `${tickValue}`;
    // Scootch short labels to the right
    let leftSpace = 0;
    if (tickLabel.length === 1) {
      leftSpace = 7;
    }
    // Draw label
    ctx.fillText(`${tickValue}`, leftSpace, yTick + 2);
    // Draw tick
    ctx.beginPath();
    ctx.moveTo(15, yTick);
    ctx.lineTo(25, yTick);
    ctx.stroke();
  }
};

onMounted(() => {
  clearChart();
  drawLeftAxis();
});
</script>

<style>
.left-axis-label {
  writing-mode: vertical-rl;
  text-align: center;
}
.left-axis-rotate {
  transform: rotate(180deg);
}
.spectrum-canvas {
  width: 670px;
}
</style>
