<template>
  <TutorialPopover
    :anchor-elem="anchorElem"
    :state-machine="machine"
    show-on-state="model"
  >
    <p>
      This is a high-resolution <strong>model</strong> of the predicted
      transmission spectrum from a cloud-free “Hot Jupiter” exoplanet.
    </p>
    <p>
      It is based on what astronomers know about planetary atmospheres and the
      physics and chemistry of atoms and molecules at the temperatures and
      pressures found in these planets.
    </p>
  </TutorialPopover>
</template>

<script setup lang="ts">
import { useExoplanetsClearTutorialStateMachine } from '@/utils/tutorialUtils';
import type { ComponentPublicInstance } from 'vue';

defineProps<{ anchorElem: HTMLElement | ComponentPublicInstance | null }>();

const machine = useExoplanetsClearTutorialStateMachine();
</script>
