<template>
  <LightLayout>
    <CardWithSlideshow :slide-order="slideOrder" next-section="predictions">
      <InstructionHeader>Light in Different Fields</InstructionHeader>
      <InstructionRow row-type="Slideshow">
        Step through this slideshow for an overview of how different fields use
        light.
      </InstructionRow>
      <InstructionRow row-type="Notebook">
        Answer these questions in your notebook:
        <template #steps>
          <InstructionStep singleton="true">
            Of the different fields featured in the slideshow, which are you
            most curious about? What questions do you have about how that field
            investigates and uses light?
          </InstructionStep>
        </template>
      </InstructionRow>
    </CardWithSlideshow>
  </LightLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';
import slide1 from '@/assets/light_intro/light_intro_slide1.png';
import slide2 from '@/assets/light_intro/light_intro_slide2.png';
import slide3 from '@/assets/light_intro/light_intro_slide3.png';
import slide4 from '@/assets/light_intro/light_intro_slide4.png';
import slide5 from '@/assets/light_intro/light_intro_slide5.png';
import slide6 from '@/assets/light_intro/light_intro_slide6.png';

useSpecLabHead('Introduction', 'Light');

const slideOrder = [slide1, slide2, slide3, slide4, slide5, slide6];
</script>
