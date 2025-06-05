<template>
  <ColorLayout>
    <template #challenge-tab>
      <CardWithSlideshow
        :slide-order="slideOrder"
        prev-section="tutorial"
        next-section="predictions"
      >
        <InstructionHeader>Seeing Color</InstructionHeader>
        <InstructionRow row-type="Slideshow">
          Recall the four key behaviors of light: emission, absorption,
          transmission, and reflection.
          <span class="needs-updating"
            >Add a slide that outlines steps of tracing light from emission -
            through path of absorption/transmission/reflection - and what's left
            is the color you would see.</span
          >
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

useSpecLabHead('Behaviors of Light', 'Color');

const slideOrder = [slide1, slide2, slide3];
</script>
