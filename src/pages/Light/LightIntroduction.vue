<template>
  <LightLayout>
    <CardWithSlideshow :slide-order="slideOrder" next-path="color-filters">
      <InstructionHeader>Light in Different Professions</InstructionHeader>
      <InstructionRow row-type="Slideshow">
        Step through this slideshow for an overview of how different professions
        use light.
      </InstructionRow>
      <InstructionRow row-type="Notebook">
        Answer these questions in your notebook:
        <template #steps>
          <InstructionStep>
            Of the different professions featured in the slideshow, which are
            you most curious about? What questions do you have about how that
            field investigates and uses light?
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
import answerQuestionsSlide from '@/assets/ending_slides/answer_questions.png';

useSpecLabHead('Professions', 'Light');

const slideOrder = [
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  slide6,
  answerQuestionsSlide,
];
</script>
