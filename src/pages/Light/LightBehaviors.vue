<template>
  <ColorLayout>
    <CardWithSlideshow :slide-order="slideOrder">
      <InstructionHeader>Behaviors of Light</InstructionHeader>
      <InstructionRow row-type="Slideshow">
        Learn about the four key behaviors of light: emission, absorption,
        transmission, and reflection.
      </InstructionRow>
      <InstructionRow row-type="Notebook">
        In <em>Part A</em> of the <em>Behaviors of Light</em> section, label the
        diagram with the key behaviors of light. Then, answer the questions in
        <em>Part B</em>.
      </InstructionRow>
    </CardWithSlideshow>
  </ColorLayout>
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
