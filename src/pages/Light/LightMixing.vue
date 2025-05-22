<template>
  <LightLayout>
    <ChallengeCard>
      <template #top>
        <InstructionHeader>Photons and Color Simulation</InstructionHeader>
        <InstructionRow row-type="Simulation">
          <span class="challenge-emphasis"> Double-click</span>
          the “RGB Bulbs” to launch the simulation.
        </InstructionRow>
        <InstructionRow row-type="Notebook">
          Follow instructions in <em>Part A</em> of the
          <em>Color Mixing</em> section.
          <template #steps>
            <InstructionStep>
              In the table, note what light combinations of RGB light make each
              color.
            </InstructionStep>
          </template>
          <template #after-steps>
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
          <template #left>
            <NextPrevButton direction="prev" light to="photons">
              previous section
            </NextPrevButton>
          </template>
          <template #right>
            <NextPrevButton direction="next" light to="behaviors">
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

useSpecLabHead('Color Mixing', 'Light');
</script>
