<template>
  <ColorLayout>
    <ChallengeCard remove-padding>
      <div class="pt-3 ps-3 pe-5">
        <InstructionHeader>Photons and Color Simulation</InstructionHeader>
        <InstructionRow row-type="Simulation">
          Select the “Single Bulb” to launch the Physics Education Technology
          (PhET) simulation.
        </InstructionRow>
        <InstructionRow row-type="Notebook">
          Follow instructions in <em>Part A</em> of the
          <em>Photons and Color</em> section.
          <p class="mt-2">Then, answer the questions in <em>Part B</em>.</p>
        </InstructionRow>
      </div>
      <iframe
        height="500px"
        width="100%"
        src="https://phet.colorado.edu/sims/html/color-vision/latest/color-vision_en.html"
        allow="fullscreen"
      ></iframe>
      <div class="py-4 px-5">
        <LeftRightGroup>
          <template #right>
            <NextPrevButton direction="next" light to="mixing">
              next section
            </NextPrevButton>
          </template>
        </LeftRightGroup>
      </div>
    </ChallengeCard>
  </ColorLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';

useSpecLabHead('Color Mixing', 'Color');
</script>
