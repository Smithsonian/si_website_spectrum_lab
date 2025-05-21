<template>
  <LightLayout>
    <CardWithSlideshow :slide-order="slideOrder" next-section="predictions">
      <InstructionHeader>Behaviors of Light</InstructionHeader>
      <InstructionRow row-type="Slideshow">
        Watch this video to understand how spectra can be applicable to a
        variety of careers.
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
