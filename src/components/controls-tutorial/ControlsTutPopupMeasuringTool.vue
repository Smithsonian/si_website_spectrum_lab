<template>
  <TutorialPopover
    :anchor-elem="anchorElem"
    :state-machine="machine"
    show-on-state="measuringTool"
  >
    <p>
      This is the <strong>measuring tool</strong>. This tool tells you the
      wavelength or energy of the light at a specific part of the spectrum.
    </p>
  </TutorialPopover>
</template>

<script setup lang="ts">
import { useControlsTutorialStateMachine } from '@/utils/tutorialUtils';
import type { ComponentPublicInstance } from 'vue';

defineProps<{ anchorElem: HTMLElement | ComponentPublicInstance | null }>();

const machine = useControlsTutorialStateMachine();
</script>
