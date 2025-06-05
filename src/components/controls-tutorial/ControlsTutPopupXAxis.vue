<template>
  <TutorialPopover
    :anchor-elem="anchorElem"
    :state-machine="machine"
    show-on-state="xAxis"
  >
    <p>
      The <strong>x-axis</strong> tells you the <strong>wavelength</strong> of
      the light at a given brightness level. Sometimes spectra are displayed
      with energy as the x-axis. Recall that when wavelength increases, energy
      decreases.
    </p>
  </TutorialPopover>
</template>

<script setup lang="ts">
import { useControlsTutorialStateMachine } from '@/utils/tutorialUtils';

defineProps<{ anchorElem: HTMLElement | null }>();

const machine = useControlsTutorialStateMachine();
</script>
