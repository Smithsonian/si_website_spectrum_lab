<template>
  <CompositionLayout>
    <template #challenge-tab>
      <CardWithSlideshow
        :slide-order="slideOrder"
        prev-path="lamps"
        prev-label="part 1"
        next-path="gas"
        next-label="part 3"
      >
        <InstructionHeader>Atomic Emission Part 2: Slideshow</InstructionHeader>
        <InstructionRow row-type="Slideshow">
          This slideshow can be reviewed as a class discussion, in small groups,
          or on your own, as instructed by your teacher.
          <template #steps>
            <InstructionStep>
              Learn how atoms and molecules emit light at specific wavelengths.
              The line patterns in spectra allow scientists to determine the
              composition of a light source.
            </InstructionStep>
          </template>
        </InstructionRow>
      </CardWithSlideshow>
    </template>
  </CompositionLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';
import slide1 from '@/assets/atomic_emission/atomic_emission_1.png';
import slide2 from '@/assets/atomic_emission/atomic_emission_2.png';

useSpecLabHead('Behaviors of Light', 'Color');

const slideOrder = [slide1, slide2];
</script>
