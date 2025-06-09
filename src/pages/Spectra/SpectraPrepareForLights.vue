<template>
  <SpectraLayout>
    <template #challenge-tab>
      <CardWithSlideshow
        :slide-order="slideOrder"
        prev-path="../understand-spectroscope"
        next-path="source-1"
        next-label="Part 2"
      >
        <InstructionHeader
          >Investigate Light Sources: Prepare</InstructionHeader
        >
        <InstructionRow row-type="Slideshow">
          Follow the instructions in this slideshow to prepare for this
          investigation.
        </InstructionRow>
      </CardWithSlideshow>
    </template>
  </SpectraLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';

import slide1 from '@/assets/spectroscope/lights_prep_1.png';
import slide2 from '@/assets/spectroscope/lights_prep_2.png';

useSpecLabHead('Light Sources', 'Spectra');

const slideOrder = [slide1, slide2];
</script>
