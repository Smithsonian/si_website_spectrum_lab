<template>
  <LightLayout>
    <ChallengeCard>
      <template #top>
        <InstructionHeader>Color Mixing</InstructionHeader>
        <InstructionRow row-type="Simulation">
          <span class="challenge-emphasis"> Double-click</span>
          the “RGB Bulbs” to launch the simulation.
          <template #steps>
            <InstructionStep>
              Experiment with the RGB (red, green, and blue) lights in different
              amounts to create different colors. Try turning on two at a time,
              or three at a time but at different levels.
            </InstructionStep>
            <InstructionStep>
              Try to create the colors specified in the table in your Notebook.
            </InstructionStep>
          </template>
        </InstructionRow>
        <InstructionRow row-type="Notebook">
          <template #steps>
            <InstructionStep>
              Note in the table what combinations of RGB light mix to create
              each color. Specify whether the R, G, and B bulb was OFF (<span
                class="challenge-emphasis"
                >O</span
              >), or on at low (<span class="challenge-emphasis">L</span>),
              medium (<span class="challenge-emphasis">M</span>), or high (<span
                class="challenge-emphasis"
                >H</span
              >) power. You do not have to be very precise.
            </InstructionStep>
            <InstructionStep>
              Imagine you are looking at a source that is emitting yellow light.
              There are at least two possible combinations of one or more photon
              colors that would cause your eye to observe the source as yellow
              in color. Write the two combinations in your Notebook.
            </InstructionStep>
          </template>
        </InstructionRow>
      </template>
      <template #middle>
        <PhetIframe />
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
