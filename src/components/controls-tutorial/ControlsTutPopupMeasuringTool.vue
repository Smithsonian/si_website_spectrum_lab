<template>
  <TutorialPopover
    :anchor-elem="anchorElem"
    :state-machine="machine"
    show-on-state="measuringTool"
  >
    <p>
      This is the <strong>measuring tool</strong>. This tool tells you the
      wavelength or energy of the light at a specific part of the spectrum. Try
      moving your cursor over the spectrum graph or spectrum image to move the
      measuring tool.
    </p>
    <p>
      Move your cursor off the left or right edge to dismiss the measuring tool.
      Move your cursor off the top or bottom edge to fix the measuring tool at a
      particular wavelength.
    </p>
  </TutorialPopover>
</template>

<script setup lang="ts">
import { useControlsTutorialStateMachine } from '@/utils/tutorialUtils';
import type { ComponentPublicInstance } from 'vue';

defineProps<{ anchorElem: HTMLElement | ComponentPublicInstance | null }>();

const machine = useControlsTutorialStateMachine();
</script>
