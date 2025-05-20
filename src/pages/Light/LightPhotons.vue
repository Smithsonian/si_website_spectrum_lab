<template>
  <LightLayout>
    <ChallengeCard>
      <template #top>
        <InstructionHeader>Photons and Color Simulation</InstructionHeader>
        <InstructionRow row-type="Simulation">
          Select the “Single Bulb” to launch the Physics Education Technology
          (PhET) simulation.
        </InstructionRow>
        <InstructionRow row-type="Notebook">
          Follow instructions in <em>Part A</em> of the
          <em>Photons and Color</em> section.
          <template #before-steps>
            <p>Then, answer the questions in <em>Part B</em>.</p>
          </template>
        </InstructionRow>
      </template>
      <template #middle>
        <iframe
          height="500px"
          width="100%"
          src="https://phet.colorado.edu/sims/html/color-vision/latest/color-vision_en.html"
          allow="fullscreen"
        ></iframe>
      </template>
      <template #bottom>
        <LeftRightGroup>
          <template #right>
            <NextPrevButton direction="next" light to="mixing">
              next section
            </NextPrevButton>
          </template>
        </LeftRightGroup>
      </template>
    </ChallengeCard>
  </LightLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';

useSpecLabHead('Photons and Color', 'Light');
</script>
