<template>
  <FishTankLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <InstructionHeader>Inhabitants Under Your Lights</InstructionHeader>
        <InstructionRow row-type="Investigate">
          Imagine adding the fish, coral, and plants to your tank and describe
          the color of each inhabitant under your lighting scheme.
        </InstructionRow>
        <InstructionRow row-type="Simulation">
          If you need additional guidance, use the Stage Lighting simulator to
          help envision how different colored objects appear under different
          colored lights.
          <template #before-steps>
            <p>
              <BLink
                href="https://www.physicsclassroom.com/Physics-Interactives/Light-and-Color/Stage-Lighting/Stage-Lighting-Interactive"
                target="_blank"
                rel="noopener"
              >
                Stage Lighting Simulator at The Physics Classroom
              </BLink>
            </p>
            <p>Tips:</p>
          </template>
          <template #steps>
            <InstructionStep>
              Choose the white light from the list of color options on the
              bottom.
            </InstructionStep>
            <InstructionStep>
              Click on the character on the stage to change to a character with
              a different color.
            </InstructionStep>
          </template>
        </InstructionRow>
        <InstructionRow row-type="Notebook">
          <template #steps>
            <InstructionStep>
              Identify the color of each inhabitant in your tank as it would
              appear under your lighting scheme.
            </InstructionStep>
            <InstructionStep>
              Color in your chosen fish in the notebook with the colors they
              would appear under your lighting scheme or complete the table.
            </InstructionStep>
          </template>
        </InstructionRow>
        <LeftRightGroup class="mt-5">
          <template #left>
            <NextPrevButton direction="prev" light to="light-your-tank">
              previous section
            </NextPrevButton>
          </template>
          <template #right>
            <NextPrevButton direction="next" light to="put-it-together">
              next section
            </NextPrevButton>
          </template>
        </LeftRightGroup>
      </ChallengeCard>
    </template>
  </FishTankLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';

useSpecLabHead('Inhabitants Under Your Lights', 'Fishtank');
</script>
