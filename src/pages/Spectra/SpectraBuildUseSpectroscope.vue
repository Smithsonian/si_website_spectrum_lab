<template>
  <SpectraLayout>
    <template #challenge-tab>
      <CardWithSlideshow :slide-order="slideOrder" next-path="tutorial">
        <InstructionHeader>Build and Use a Spectroscope</InstructionHeader>
        <InstructionRow row-type="Slideshow">
          Follow this slideshow to build your own spectroscope, then try it on
          different colors.
        </InstructionRow>
      </CardWithSlideshow>
    </template>
  </SpectraLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';
import build1 from '@/assets/spectroscope/spectroscope_build_1.jpg';
import use1 from '@/assets/spectroscope/spectroscope_use_1.jpg';
import use2 from '@/assets/spectroscope/spectroscope_use_2.jpg';
import white from '@/assets/spectroscope/spectroscope_line_white.png';
import yellow from '@/assets/spectroscope/spectroscope_line_yellow.png';
import orange from '@/assets/spectroscope/spectroscope_line_orange.png';
import cyan from '@/assets/spectroscope/spectroscope_line_cyan.png';
import magenta from '@/assets/spectroscope/spectroscope_line_magenta.png';

useSpecLabHead('Build and Use a Spectroscope', 'Spectra');

const slideOrder = [build1, use1, use2, white, yellow, orange, cyan, magenta];
</script>
