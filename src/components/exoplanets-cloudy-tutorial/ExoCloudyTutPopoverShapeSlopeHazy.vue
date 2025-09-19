<template>
  <TutorialPopover
    :anchor-elem="anchorElem"
    :state-machine="machine"
    show-on-state="hazeShapeSlope"
  >
    <p>
      Different atmospheric conditions can also change the overall
      <strong>shape</strong> and <strong>slope</strong> of the spectrum plot.
    </p>

    <p>
      <strong>Hazes</strong> — small suspended particles created by UV starlight
      — scatter shorter wavelengths away from the line of sight and allow longer
      wavelengths through.
    </p>
  </TutorialPopover>
</template>

<script setup lang="ts">
import { useExoplanetsCloudyTutorialStateMachine } from '@/utils/tutorialUtils';
import type { ComponentPublicInstance } from 'vue';

defineProps<{ anchorElem: HTMLElement | ComponentPublicInstance | null }>();

const machine = useExoplanetsCloudyTutorialStateMachine();
</script>
