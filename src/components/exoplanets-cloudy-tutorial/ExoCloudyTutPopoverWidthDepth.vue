<template>
  <TutorialPopover
    :anchor-elem="anchorElem"
    :state-machine="machine"
    show-on-state="widthDepth"
  >
    <p>
      Different atmospheric conditions — such as <strong>Clouds</strong> — can
      change how individual spectral signatures appear, including the
      <strong>width</strong> and <strong>depth</strong> of specific absorption
      features.
    </p>
  </TutorialPopover>
</template>

<script setup lang="ts">
import { useExoplanetsCloudyTutorialStateMachine } from '@/utils/tutorialUtils';
import type { ComponentPublicInstance } from 'vue';

defineProps<{ anchorElem: HTMLElement | ComponentPublicInstance | null }>();

const machine = useExoplanetsCloudyTutorialStateMachine();
</script>
