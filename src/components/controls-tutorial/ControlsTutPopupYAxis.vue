<template>
  <TutorialPopover
    :anchor-elem="anchorElem"
    :state-machine="machine"
    show-on-state="yAxis"
  >
    <p>
      The <strong>y-axis</strong> on a spectrum graph tells you the
      <strong>relative amount of light being emitted or reflected</strong> at
      each wavelength. This could also be labeled “brightness” or “intensity.”
      This spectrum tool scales the brightness of every source to values between
      0 and 1.
    </p>
  </TutorialPopover>
</template>

<script setup lang="ts">
import { useControlsTutorialStateMachine } from '@/utils/tutorialUtils';
import type { ComponentPublicInstance } from 'vue';

defineProps<{ anchorElem: HTMLElement | ComponentPublicInstance | null }>();

const machine = useControlsTutorialStateMachine();
</script>
