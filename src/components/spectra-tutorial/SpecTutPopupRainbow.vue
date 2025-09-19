<template>
  <TutorialPopover
    :anchor-elem="anchorElem"
    :state-machine="machine"
    show-on-state="rainbow"
  >
    <p>
      The rainbow in the middle of the spectrum shows
      <strong>visible light</strong>. The gray region of the spectrum to the
      right of red is called <strong>infrared light</strong> (IR). The gray
      region to the left of violet is called
      <strong>ultraviolet light</strong> (UV). Only visible light can be seen by
      the human eye.
    </p>
    <p>Beyond IR is microwave and radio. Beyond UV is X-ray and gamma ray.</p>
  </TutorialPopover>
</template>

<script setup lang="ts">
import { useSpectraTutorialStateMachine } from '@/utils/tutorialUtils';
import type { ComponentPublicInstance } from 'vue';

defineProps<{ anchorElem: HTMLElement | ComponentPublicInstance | null }>();

const machine = useSpectraTutorialStateMachine();
</script>
