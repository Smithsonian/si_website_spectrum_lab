<template>
  <LightLayout>
    <ChallengeCard>
      <template #top>
        <InstructionHeader>Color Filters Part 1: Predictions</InstructionHeader>
        <InstructionRow row-type="Intro">
          Do <strong>NOT</strong> look through any of the colored gels yet!
        </InstructionRow>
        <InstructionRow row-type="Investigate">
          <span class="challenge-emphasis"> PREDICT</span> what you will see
          when you look through the
          <span class="challenge-emphasis">RED</span>-colored gel at the 3
          intersecting colored circles below.
        </InstructionRow>
        <InstructionRow row-type="Notebook">
          <template #steps>
            <InstructionStep>
              In the diagram in your notebook, color in each of the 7 sections
              to represent how you think the onscreen image will look through
              the RED gel, or write the predicted color names in the table.
            </InstructionStep>
            <InstructionStep>
              Explain your reasoning for your predictions of what colors the
              different sections of the circles will appear through the RED gel.
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
            <NextPrevButton direction="prev" light to="../professions">
              previous section
            </NextPrevButton>
          </template>
          <template #right>
            <NextPrevButton
              direction="next"
              light
              to="/light/color-filters/investigate-red"
            >
              part 2
            </NextPrevButton>
          </template>
        </LeftRightGroup>
      </template>
    </ChallengeCard>
  </LightLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';

useSpecLabHead('Color Filters part 1', 'Light');
</script>
