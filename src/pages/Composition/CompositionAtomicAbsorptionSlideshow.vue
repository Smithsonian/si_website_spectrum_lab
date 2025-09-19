<template>
  <CompositionLayout>
    <template #challenge-tab>
      <CardWithSlideshow
        :slide-order="slideOrder"
        prev-path="hydrogen"
        prev-label="part 1"
        next-path="../line-matching"
      >
        <InstructionHeader
          >Atomic Absorption Part 2: Slideshow</InstructionHeader
        >
        <InstructionRow row-type="Slideshow">
          This slideshow can be reviewed as a class discussion, in small groups,
          or on your own, as instructed by your teacher.
          <template #bullets>
            <InstructionStep>
              <span class="challenge-less-bold">Slide 1:</span> Consider the two
              spectra you compared in Part 1, and discuss as a class or a group
              what you think is happening in the comparison spectrum.
            </InstructionStep>
            <InstructionStep>
              <span class="challenge-less-bold">Slide 2:</span> Learn how atoms
              and molecules absorb light at specific wavelengths—the SAME
              specific wavelengths that they emit at.
            </InstructionStep>
            <InstructionStep>
              <span class="challenge-less-bold">Slide 3:</span> Discuss as a
              class or a group, or consider the schematic showing how atoms can
              both emit and absorb light, and our point of view impacts what we
              observe.
            </InstructionStep>
          </template>
        </InstructionRow>
      </CardWithSlideshow>
    </template>
  </CompositionLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';
import slide1 from '@/assets/atomic_absorption/atomic_absorption_1.png';
import slide2 from '@/assets/atomic_absorption/atomic_absorption_2.png';
import slide3 from '@/assets/atomic_absorption/atomic_absorption_3.png';

useSpecLabHead('Atomic absorption part 2', 'Composition');

const slideOrder = [slide1, slide2, slide3];
</script>
