<template>
  <div>
    <canvas ref="canvas" width="20" height="150" class="ms-2"
      >Left axis ticks</canvas
    >
  </div>
</template>

<script setup lang="ts">
import { onMounted, useTemplateRef } from 'vue';

const canvas = useTemplateRef('canvas');

onMounted(() => {
  if (!canvas.value) {
    return;
  }
  let ctx = canvas.value.getContext('2d');
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
});
</script>
