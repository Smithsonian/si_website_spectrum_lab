<template>
  <ColorLayout>
    <template #challenge-tab>
      <CardWithSlideshow
        :slide-order="slideOrder"
        prev-path="tutorial"
        next-path="predictions"
      >
        <InstructionHeader>How We See</InstructionHeader>
        <InstructionRow row-type="Slideshow">
          This slideshow can be reviewed as a class discussion, in small groups,
          or on your own, as instructed by your teacher.
          <template #bullets>
            <InstructionStep>
              <span style="font-weight: 500">Slides 1-3:</span> Review the four
              key behaviors of light:
              <span style="font-weight: 500"
                >emission, absorption, transmission,</span
              >
              and <span style="font-weight: 500">reflection</span>.
            </InstructionStep>
            <InstructionStep>
              <span style="font-weight: 500">Slide 4:</span> Discuss as a class
              or group, or consider what is happening that allows the person to
              see the tree depicted. What is emitting the light in the image?
              How does the light emitted interact with the tree before coming to
              the person's eye?
            </InstructionStep>
            <InstructionStep>
              <span style="font-weight: 500">Slide 5:</span> Discuss as a class
              or group, or consider how the blue car will appear if we shine
              only a yellow light on it on a moonless night.
            </InstructionStep>
            <InstructionStep>
              <span style="font-weight: 500">Slide 6:</span> Review the steps
              for following the path of light that determines what we see. For
              any given scenario, you will want to ask yourself the questions
              listed in order to trace the entire path of light.
            </InstructionStep>
          </template>
        </InstructionRow>
        <InstructionRow row-type="Notebook">
          For each of the scenarios, imagine tracing the path of light from a
          source to our eyes. Describe how the light is behaving and how that
          leads us to see the color that we do.
          <template #steps>
            <InstructionStep>
              You are outside during the day, looking at a green tree. What
              allows you to see the tree, and why does it appear green?
              (Depicted in Slide 4.)
            </InstructionStep>
            <InstructionStep>
              You come out of a shopping mall on a moonless night and look at
              your car. Your car is painted blue, and the light illuminating the
              car is yellow. What color does your car appear to you in the
              yellow light? (Depicted in Slide 5.)
            </InstructionStep>
            <InstructionStep>
              A red and white candy cane is in a green glass jar. A white light
              bulb shines on the jar. What do you see, and what processes are
              making that happen? Be sure to describe separately what both the
              white and red parts of the candy cane look like when the candy
              cane is in the green glass jar. (Not depicted in Slideshow.)
            </InstructionStep>
          </template>
        </InstructionRow>
      </CardWithSlideshow>
    </template>
  </ColorLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';
import slide1 from '@/assets/behaviors_of_light/behaviors_of_light_slide2.png';
import slide2 from '@/assets/behaviors_of_light/behaviors_of_light_slide3.png';
import slide3 from '@/assets/behaviors_of_light/behaviors_of_light_slide4.png';
import slide4 from '@/assets/how_we_see/how_we_see_1.png';
import slide5 from '@/assets/how_we_see/how_we_see_2.png';
import slide6 from '@/assets/how_we_see/how_we_see_3.png';
import answerQuestionsSlide from '@/assets/ending_slides/answer_questions.png';

useSpecLabHead('Behaviors of Light', 'Color');

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
