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
  // The chart math assumes 750 pixels. This allows us to change the chart
  // size without breaking stuff.
  const pixelsPerWv = CHART_WIDTH / 750;
  const pixelStretch = Number((pixelsPerWv * stretch).toFixed(3));

  // Clear
  ctx.clearRect(0, 0, CHART_WIDTH, 30);

  // Small ticks
  for (let i = 0; i < 98; i++) {
    const xTickDistance = 100;
    const xTickPosition = xLeftSideRoom + i * xTickDistance * pixelStretch;
    // Canvas lines 1 pixel thick are only sharp when 0.5 offset from the grid
    const xTickPosSharp = Math.floor(xTickPosition) + 0.5;
    if (xTickPosSharp > CHART_WIDTH) {
      break;
    }
    ctx.beginPath();
    ctx.moveTo(xTickPosSharp, 0);
    ctx.lineTo(xTickPosSharp, 4);
    ctx.stroke();
  }

  // Numbers
  ctx.font = '11px Arial';
  ctx.fillStyle = 'white';

  // Numbers 0.2 to 0.9
  let start = 2;
  if (stretch > 0.5) {
    for (let i = start; i <= 9; i++) {
      const xSmallTickDistance = 100;
      const xTickPosition =
        xLeftSideRoom + (i - start) * xSmallTickDistance * pixelStretch;
      const xTextOffset = 5;
      ctx.fillText(`${i / 10}`, xTickPosition - xTextOffset, 18);
    }
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
