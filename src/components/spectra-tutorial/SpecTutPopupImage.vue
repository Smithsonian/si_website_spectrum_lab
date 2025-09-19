<template>
  <TutorialPopover
    :anchor-elem="anchorElem"
    :state-machine="machine"
    show-on-state="image"
  >
    <p>
      This is the <strong>Spectrum Image</strong>. This represents what you
      would see through a spectroscope when you point it at a light source.
    </p>
    <p>
      The spectrum shown here represents a source that is emitting equally
      across all wavelengths. More typically, some wavelength sections will be
      brighter and others will be darker.
    </p>
  </TutorialPopover>
</template>

<script setup lang="ts">
import { useSpectraTutorialStateMachine } from '@/utils/tutorialUtils';
import type { ComponentPublicInstance } from 'vue';

defineProps<{ anchorElem: HTMLElement | ComponentPublicInstance | null }>();

const machine = useSpectraTutorialStateMachine();
</script>
