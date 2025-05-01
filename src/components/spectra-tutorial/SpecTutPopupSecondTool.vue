<template>
  <TutorialPopover
    :anchor-elem="anchorElem"
    :state-machine="machine"
    show-on-state="secondTool"
  >
    <p>
      Sometimes you will get a <strong>second panel</strong> to see a second
      spectrum. It will often be useful to compare the spectrum and graph from
      your top panel with another object in the bottom panel.
    </p>
  </TutorialPopover>
</template>

<script setup lang="ts">
import { useSpectraTutorialStateMachine } from '@/utils/tutorialUtils';
import type { ComponentPublicInstance } from 'vue';

defineProps<{ anchorElem: HTMLElement | ComponentPublicInstance | null }>();

const machine = useSpectraTutorialStateMachine();
</script>
