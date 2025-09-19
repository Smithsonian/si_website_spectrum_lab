<template>
  <div :style="`height: ${CHART_HEIGHT}px`">
    <canvas ref="canvas" :width="`${LEFT_AXIS_WIDTH}px`" :height="CHART_HEIGHT"
      >Left axis ticks</canvas
    >
  </div>
</template>

<script setup lang="ts">
import {
  CHART_HEIGHT,
  LEFT_AXIS_WIDTH,
  Y_1_FROM_TOP,
  Y_TICK_DISTANCE,
} from '@/constants';
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
  ctx.font = canvasFontFromSize('11px');
  ctx.fillStyle = 'white';
  ctx.strokeStyle = 'white';
  for (let tick = 0; tick <= 10; tick++) {
    // * tick distance + offset
    const yTick = tick * Y_TICK_DISTANCE + Y_1_FROM_TOP;
    // Start at 1 counting down by one tenth
    const tickValue = (10 - tick) / 10;
    const tickLabel = tick % 2 ? '' : `${tickValue}`;
    // Scootch short labels to the right
    let xLeftSpace = 0;
    if (tickLabel.length === 1) {
      xLeftSpace = 9;
    }
    // Draw label
    ctx.fillText(tickLabel, xLeftSpace, yTick + 3);
    // Draw tick
    const xTickLength = 7;
    ctx.beginPath();
    ctx.moveTo(LEFT_AXIS_WIDTH - xTickLength, yTick);
    ctx.lineTo(LEFT_AXIS_WIDTH, yTick);
    ctx.stroke();
  }
});
</script>
