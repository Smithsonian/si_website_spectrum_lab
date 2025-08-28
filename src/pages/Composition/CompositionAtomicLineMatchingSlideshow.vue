<template>
  <CompositionLayout>
    <template #challenge-tab>
      <CardWithSlideshow
        :slide-order="slideOrder"
        prev-path="atomic-absorption"
        next-path="sun"
      >
        <InstructionHeader>What Counts as a Match?</InstructionHeader>
        <InstructionRow row-type="Slideshow">
          This slideshow can be reviewed as a class discussion, in small groups,
          or on your own, as instructed by your teacher.
          <template #steps>
            <InstructionStep>
              See examples and learn some tips for deciding whether a sample
              spectrum contains a good match for a reference element.
            </InstructionStep>
          </template>
        </InstructionRow>
      </CardWithSlideshow>
    </template>
  </CompositionLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';
import slide1 from '@/assets/atomic_line_matching/atomic_line_matching_1.png';
import slide2 from '@/assets/atomic_line_matching/atomic_line_matching_2.png';
import slide3 from '@/assets/atomic_line_matching/atomic_line_matching_3.png';
import slide4 from '@/assets/atomic_line_matching/atomic_line_matching_4.png';

useSpecLabHead('Atomic line matching', 'Composition');

const slideOrder = [slide1, slide2, slide3, slide4];
</script>
