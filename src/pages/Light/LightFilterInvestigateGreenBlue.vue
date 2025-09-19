<template>
  <LightLayout>
    <ChallengeCard>
      <template #top>
        <InstructionHeader
          >Color Filters Part 3: Use Green and Blue Gels</InstructionHeader
        >
        <InstructionRow row-type="Investigate">
          <template #steps>
            <InstructionStep>
              Having seen the circles through the RED gel, what do you expect
              the circles to look like through the GREEN or the BLUE gel? Look
              through the GREEN gel, then look through the BLUE gel.
            </InstructionStep>
          </template>
        </InstructionRow>
        <InstructionRow row-type="Notebook">
          <template #steps>
            <InstructionStep>
              When looking through the GREEN or BLUE gels, does what you see
              match what you would expect based on your observations with the
              RED gel? Does anything you see surprise you? Describe your
              reasoning.
            </InstructionStep>
          </template>
        </InstructionRow>
      </template>
      <template #middle>
        <div class="bg-gen-black">
          <img
            src="/src/assets/2x/RGB circles@2x.webp"
            alt="Intersecting red, green, and blue circles of light"
            class="d-block mx-auto"
            style="max-width: 575px"
          />
        </div>
      </template>
      <template #bottom>
        <LeftRightGroup>
          <template #left>
            <NextPrevButton direction="prev" light to="investigate-red">
              part 2
            </NextPrevButton>
          </template>
          <template #right>
            <NextPrevButton direction="next" light to="../photons">
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

useSpecLabHead('Color Filters part 2', 'Light');
</script>
