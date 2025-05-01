<template>
  <TutorialPopover
    :anchor-elem="anchorElem"
    :state-machine="machine"
    show-on-state="cloudShapeSlope"
  >
    <p>
      Different atmospheric conditions can also change the overall
      <strong>shape</strong> and <strong>slope</strong> of the spectrum plot.
    </p>

    <p>
      <strong>Clouds</strong> — opaque masses of condensed liquid or ice
      particles — block and scatter Visible and IR light equally, flattening out
      the spectrum.
    </p>
  </TutorialPopover>
</template>

<script setup lang="ts">
import { useExoplanetsCloudyTutorialStateMachine } from '@/utils/tutorialUtils';
import type { ComponentPublicInstance } from 'vue';

defineProps<{ anchorElem: HTMLElement | ComponentPublicInstance | null }>();

const machine = useExoplanetsCloudyTutorialStateMachine();
</script>
