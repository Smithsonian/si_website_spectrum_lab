<template>
  <div class="ms-2" :style="`height: ${CHART_HEIGHT}px`">
    <canvas ref="canvas" width="20" :height="CHART_HEIGHT"
      >Left axis ticks</canvas
    >
  </div>
</template>

<script setup lang="ts">
import { CHART_HEIGHT, Y_1_FROM_TOP, Y_TICK_DISTANCE } from '@/constants';
import { canvasFontFromSize } from '@/utils/chartUtils';
import { onMounted, useTemplateRef } from 'vue';

const canvas = useTemplateRef('canvas');

onMounted(() => {
  if (!canvas.value) {
    return;
  }
  const ctx = canvas.value.getContext('2d');
  if (!ctx) {
    return;
  }
  ctx.font = canvasFontFromSize('9px');
  ctx.fillStyle = 'white';
  ctx.strokeStyle = 'white';
  for (let tick = 0; tick <= 10; tick++) {
    // * tick distance + offset
    const yTick = tick * Y_TICK_DISTANCE + Y_1_FROM_TOP;
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
});
</script>
