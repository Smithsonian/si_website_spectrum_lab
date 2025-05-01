<template>
  <TutorialPopover
    :anchor-elem="anchorElem"
    :state-machine="machine"
    show-on-state="clear"
  >
    <p>
      This is the <strong>Clear Drawing</strong> button. You can reset your
      spectrum graph if you ever want to start over from a blank screen.
    </p>
  </TutorialPopover>
</template>

<script setup lang="ts">
import { useSpectraTutorialStateMachine } from '@/utils/tutorialUtils';
import type { ComponentPublicInstance } from 'vue';

defineProps<{ anchorElem: HTMLElement | ComponentPublicInstance | null }>();
const machine = useSpectraTutorialStateMachine();
</script>
