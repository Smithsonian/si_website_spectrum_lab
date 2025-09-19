<template>
  <TutorialPopover
    :anchor-elem="anchorElem"
    :state-machine="machine"
    show-on-state="tool"
  >
    <p>
      This is the <strong>Spectrum Tool</strong>. You will use the Spectrum Tool
      to compare a spectrum image to its spectrum graph. You will also plot
      spectrum graphs of your own from the spectra that you observe.
    </p>
  </TutorialPopover>
</template>

<script setup lang="ts">
import { useSpectraTutorialStateMachine } from '@/utils/tutorialUtils';
import type { ComponentPublicInstance } from 'vue';

defineProps<{ anchorElem: HTMLElement | ComponentPublicInstance | null }>();

const machine = useSpectraTutorialStateMachine();
</script>
