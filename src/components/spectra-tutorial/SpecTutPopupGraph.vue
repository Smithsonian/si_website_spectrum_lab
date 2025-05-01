<template>
  <TutorialPopover
    :anchor-elem="anchorElem"
    :state-machine="machine"
    show-on-state="graph"
  >
    <p>
      This is where we will plot the <strong>Spectrum Graph</strong>. Sometimes
      you will draw the spectrum graph yourself, and sometimes you will look at
      graphs of actual spectral data or models. Click in the box to start
      drawing.
    </p>
  </TutorialPopover>
</template>

<script setup lang="ts">
import { useSpectraTutorialStateMachine } from '@/utils/tutorialUtils';
import type { ComponentPublicInstance } from 'vue';

defineProps<{ anchorElem: HTMLElement | ComponentPublicInstance | null }>();

const machine = useSpectraTutorialStateMachine();
</script>
