<template>
  <div class="ms-2" style="height: 30px">
    <canvas ref="canvas" :width="xAxisWidth" height="30"
      >Bottom axis ticks</canvas
    >
  </div>
</template>

<script setup lang="ts">
import { CHART_WIDTH } from '@/constants';
import { onMounted, useTemplateRef, watch } from 'vue';

// Extra canvas space under the left axis
const xLeftSideRoom = 20;
const xAxisWidth = CHART_WIDTH + xLeftSideRoom;

const props = defineProps({
  stretch: { type: Number, default: 1 },
});

const canvas = useTemplateRef('canvas');
let ctx: CanvasRenderingContext2D | null = null;

const drawAxis = (stretch: number) => {
  if (!ctx) {
    return;
  }
  const pixelsPerWv = CHART_WIDTH / 750;
  const pixelStretch = Number((pixelsPerWv * stretch).toFixed(3));

  // Clear
  ctx.clearRect(0, 0, CHART_WIDTH, 30);

  // Small ticks
  for (let i = 0; i < 98; i++) {
    const xTickDistance = 100;
    const xTickPosition = xLeftSideRoom + i * xTickDistance * pixelStretch;
    const xTickPosSharp = Math.floor(xTickPosition) + 0.5;
    if (xTickPosSharp > CHART_WIDTH) {
      break;
    }
    ctx.beginPath();
    ctx.moveTo(xTickPosSharp, 0);
    ctx.lineTo(xTickPosSharp, 4);
    ctx.stroke();
  }
};

watch(
  () => props.stretch,
  async (newStretch) => {},
);

onMounted(() => {
  if (!canvas.value) {
    return;
  }
  ctx = canvas.value.getContext('2d');
  if (!ctx) {
    return;
  }
  ctx.font = '9px Myriad Pro';
  ctx.fillStyle = 'white';
  ctx.strokeStyle = 'white';
  drawAxis(props.stretch);
});
</script>
