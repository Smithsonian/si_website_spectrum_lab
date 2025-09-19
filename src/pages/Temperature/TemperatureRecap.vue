<template>
  <TemperatureLayout>
    <template #challenge-tab>
      <CardWithSlideshow :slide-order="slideOrder" prev-path="earth">
        <InstructionHeader>Recap</InstructionHeader>
        <InstructionRow row-type="Slideshow">
          This slideshow recaps how, for sources of
          <span class="challenge-bold">thermal emission</span>, their color
          provides information about their temperature.
        </InstructionRow>
      </CardWithSlideshow>
    </template>
  </TemperatureLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';

import slide1 from '@/assets/thermal_recap/thermal_recap_1.png';
import slide2 from '@/assets/thermal_recap/thermal_recap_2.png';
import slide3 from '@/assets/thermal_recap/thermal_recap_3.png';

useSpecLabHead('Recap', 'Temperature');

const slideOrder = [slide1, slide2, slide3];
</script>
