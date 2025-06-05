<template>
  <TutorialPopover
    :anchor-elem="anchorElem"
    :state-machine="machine"
    show-on-state="spectrumGraph"
  >
    <p>
      This is the <strong>spectrum graph</strong>, which is a plot of the
      spectrum. It shows how much light the source emits or reflects at a given
      wavelength (or color, or energy). The spectrum is taken at one moment in
      time.
    </p>
  </TutorialPopover>
</template>

<script setup lang="ts">
import { useControlsTutorialStateMachine } from '@/utils/tutorialUtils';

defineProps<{ anchorElem: HTMLElement | null }>();

const machine = useControlsTutorialStateMachine();
</script>
