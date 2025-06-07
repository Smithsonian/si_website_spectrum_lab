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
          <template #steps>
            <InstructionStep>
              Recall the four key behaviors of light: emission, absorption,
              transmission, and reflection.
            </InstructionStep>
            <InstructionStep>
              For the scenarios in the slideshow, trace the path of light from a
              source to our eyes, and consider how that relates to the color we
              see.
            </InstructionStep>
          </template>
        </InstructionRow>
        <InstructionRow row-type="Notebook">
          <template #steps>
            <InstructionStep>
              Answer the questions in your notebook.
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

useSpecLabHead('Behaviors of Light', 'Color');

const slideOrder = [slide1, slide2, slide3, slide4, slide5, slide6];
</script>
