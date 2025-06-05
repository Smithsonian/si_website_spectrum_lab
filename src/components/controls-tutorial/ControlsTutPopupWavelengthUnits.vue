<template>
  <TutorialPopover
    :anchor-elem="anchorElem"
    :state-machine="machine"
    show-on-state="wavelengthUnits"
  >
    <p>
      This <strong>wavelength units</strong> dropdown menu lets you choose the
      units (in wavelength or energy) for the x-axis and measuring tool. Recall
      from Session 2 that photons with higher energy have shorter wavelengths
      than photons with lower energy.
    </p>
  </TutorialPopover>
</template>

<script setup lang="ts">
import { useControlsTutorialStateMachine } from '@/utils/tutorialUtils';
import type { ComponentPublicInstance } from 'vue';

defineProps<{ anchorElem: HTMLElement | ComponentPublicInstance | null }>();

const machine = useControlsTutorialStateMachine();
</script>
