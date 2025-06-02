<template>
  <TutorialPopover
    :anchor-elem="anchorElem"
    :state-machine="machine"
    show-on-state="unitDropdown"
  >
    <p>
      Use this dropdown menu to change the units of the x-axis and measuring
      tool.
    </p>
  </TutorialPopover>
</template>

<script setup lang="ts">
import { useWavelengthTutorialStateMachine } from '@/utils/tutorialUtils';
import type { ComponentPublicInstance } from 'vue';

defineProps<{ anchorElem: HTMLElement | ComponentPublicInstance | null }>();

const machine = useWavelengthTutorialStateMachine();
</script>
