<template>
  <TutorialPopover
    :anchor-elem="anchorElem"
    :state-machine="machine"
    show-on-state="plotType"
  >
    <p>
      This <strong>plot type dropdown menu</strong> lets you toggle whether to
      display the spectrum data as individual points (<strong
        >scatter plot</strong
      >) or with a line connecting the points (<strong>line chart</strong>).
    </p>
    <p>
      Some spectra have high wavelength resolution and show many data points
      within a wavelength range. Others have low wavelength resolution and show
      few data points within a wavelength range. Using the scatter plot option
      can make it easier to see differences between data sets in spectral
      resolution.
    </p>
  </TutorialPopover>
</template>

<script setup lang="ts">
import { useControlsTutorialStateMachine } from '@/utils/tutorialUtils';
import type { ComponentPublicInstance } from 'vue';

defineProps<{ anchorElem: HTMLElement | ComponentPublicInstance | null }>();

const machine = useControlsTutorialStateMachine();
</script>
