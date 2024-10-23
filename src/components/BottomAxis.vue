<template>
  <div class="ms-2" style="height: 30px">
    <canvas ref="canvas" :width="xCanvasWidth" height="30"
      >Bottom axis ticks</canvas
    >
  </div>
</template>

<script setup lang="ts">
import { CHART_WIDTH } from '@/constants';
import { onMounted, useTemplateRef, watch } from 'vue';

// Extra canvas space under the left axis
const xLeftSideRoom = 20;
const xCanvasWidth = CHART_WIDTH + xLeftSideRoom;

const props = defineProps({
  zoom: { type: Number, default: 1 },
});

const canvas = useTemplateRef('canvas');
let ctx: CanvasRenderingContext2D | null = null;

const drawAxis = (zoom: number) => {
  if (!ctx) {
    return;
  }
  // The chart math assumes 750 pixels. This allows us to change the chart
  // size without breaking stuff.
  const pixelsPerWv = CHART_WIDTH / 750;
  const pixelZoom = Number((pixelsPerWv * zoom).toFixed(3));

  // Clear
  ctx.clearRect(0, 0, xCanvasWidth, 30);

  // Configure font
  ctx.font = '11px Arial';
  ctx.fillStyle = 'white';

  // 1/10 micron ticks
  ctx.lineWidth = 1;
  let smallStart = 2;
  if (zoom >= 0.08) {
    for (let i = smallStart; i < 100; i++) {
      const xTickDistance = 100;
      const xTickPosition =
        xLeftSideRoom + (i - smallStart) * xTickDistance * pixelZoom;
      // Canvas lines 1 pixel thick are only sharp when 0.5 offset from the grid
      const xTickPosSharp = Math.floor(xTickPosition) + 0.5;
      if (xTickPosSharp > xCanvasWidth) {
        break;
      }
      ctx.beginPath();
      ctx.moveTo(xTickPosSharp, 0);
      ctx.lineTo(xTickPosSharp, 4);
      ctx.stroke();

      // 1/10 micron labels. Skip whole numbers
      const wavelength = i / 10;
      if (zoom > 0.4 && wavelength !== Math.floor(wavelength)) {
        const xTextOffset = 5;
        ctx.fillText(`${wavelength}`, xTickPosition - xTextOffset, 18);
      }
    }
  } else {
    // Draw zero-ish tick
    const xTickPosSharp = xLeftSideRoom + 0.5;
    ctx.beginPath();
    ctx.moveTo(xTickPosSharp, 0);
    ctx.lineTo(xTickPosSharp, 4);
    ctx.stroke();
  }

  // Medium ticks
  ctx.lineWidth = 2;
  for (let i = 0; i < 60; i++) {
    const xTickDistance = 1000;
    // Since the tenths start at 0.2, we need to start at 800 not 1000
    const xPreviousTicksOffset = 800;
    const xTickPosition =
      xLeftSideRoom + (xPreviousTicksOffset + i * xTickDistance) * pixelZoom;
    // Canvas lines 2 pixels thick are only sharp when on the whole pixel grid
    const xTickPosSharp = Math.floor(xTickPosition);
    if (xTickPosSharp > xCanvasWidth) {
      break;
    }
    ctx.beginPath();
    ctx.moveTo(xTickPosSharp, 0);
    ctx.lineTo(xTickPosSharp, 6);
    ctx.stroke();
  }

  // Numbers
  // Numbers 1 to 10
  let mediumStart = 1;
  for (let i = mediumStart; i <= 10; i++) {
    const xTickDistance = 1000;
    // Since the tenths start at 0.2, we need to start at 800 not 1000
    const xPreviousTicksOffset = 800;
    const xTickPosition =
      xLeftSideRoom +
      (xPreviousTicksOffset + (i - mediumStart) * xTickDistance) * pixelZoom;
    if (xTickPosition > xCanvasWidth) {
      break;
    }
    const tickLabel = `${i}`;
    let xTextOffset = 3;
    if (tickLabel.length > 1) {
      xTextOffset = 6;
    }
    ctx.fillText(tickLabel, xTickPosition - xTextOffset, 18);
  }
};

watch(
  () => props.zoom,
  async (newZoom) => {
    drawAxis(newZoom);
  },
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
  drawAxis(props.zoom);
});
</script>
