<template>
  <LightLayout>
    <CardWithSlideshow
      :slide-order="slideOrder"
      prev-path="../mixing"
      next-path="filter-recap"
      next-label="part 2"
    >
      <InstructionHeader
        >Behaviors of Light Part 1: Slideshow</InstructionHeader
      >
      <InstructionRow row-type="Slideshow">
        Learn about the four key behaviors of light: emission, absorption,
        transmission, and reflection.
      </InstructionRow>
      <InstructionRow row-type="Notebook">
        <template #steps>
          <InstructionStep>
            For the figure in your notebook, circle or highlight the letters of
            the objects that are associated with the light phenomena listed.
          </InstructionStep>
        </template>
      </InstructionRow>
    </CardWithSlideshow>
  </LightLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';
import slide1 from '@/assets/behaviors_of_light/behaviors_of_light_slide1.png';
import slide2 from '@/assets/behaviors_of_light/behaviors_of_light_slide2.png';
import slide3 from '@/assets/behaviors_of_light/behaviors_of_light_slide3.png';
import slide4 from '@/assets/behaviors_of_light/behaviors_of_light_slide4.png';

useSpecLabHead('Behaviors of Light', 'Light');

const slideOrder = [slide1, slide2, slide3, slide4];
</script>
