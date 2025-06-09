<template>
  <SpectraLayout>
    <template #challenge-tab>
      <CardWithSlideshow
        :slide-order="slideOrder"
        prev-path="white-line"
        next-path="light-sources"
      >
        <InstructionHeader>Understand Your Spectroscope</InstructionHeader>
        <InstructionRow row-type="Slideshow">
          This brief slideshow gives on overview of how spectroscopes work. They
          separate light into a rainbow, similar to how prisms work.
        </InstructionRow>
      </CardWithSlideshow>
    </template>
  </SpectraLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';

import slide1 from '@/assets/spectroscope/spectroscope_how_1.png';
import slide2 from '@/assets/spectroscope/spectroscope_how_2.png';

useSpecLabHead('Spectroscope', 'Spectra');

const slideOrder = [slide1, slide2];
</script>
