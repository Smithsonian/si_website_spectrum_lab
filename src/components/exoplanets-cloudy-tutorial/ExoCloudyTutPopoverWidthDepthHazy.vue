<template>
  <TutorialPopover
    :anchor-elem="anchorElem"
    :state-machine="machine"
    show-on-state="dampenedAbsorption"
  >
    <p>
      <strong>Hazes</strong> also significantly dampen and obscure the expected
      deep absorption features.
    </p>
  </TutorialPopover>
</template>

<script setup lang="ts">
import { useExoplanetsCloudyTutorialStateMachine } from '@/utils/tutorialUtils';
import type { ComponentPublicInstance } from 'vue';

defineProps<{ anchorElem: HTMLElement | ComponentPublicInstance | null }>();

const machine = useExoplanetsCloudyTutorialStateMachine();
</script>
