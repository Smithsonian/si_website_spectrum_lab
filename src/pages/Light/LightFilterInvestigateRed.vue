<template>
  <LightLayout>
    <ChallengeCard>
      <template #top>
        <InstructionHeader>Color Filters Part 2: Use Red Gel</InstructionHeader>
        <InstructionRow row-type="Investigate">
          <template #steps>
            <InstructionStep>
              Look through the RED gel and note how what you see compares with
              your predictions.
            </InstructionStep>
          </template>
        </InstructionRow>
        <InstructionRow row-type="Notebook">
          <template #steps>
            <InstructionStep>
              What did you actually see when you looked through the RED gel? How
              did it compare with your prediction?
            </InstructionStep>
            <InstructionStep>
              Describe what you think is happening, given the colors you saw
              through the RED gel.
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
            <NextPrevButton direction="prev" light to="predictions">
              part 1
            </NextPrevButton>
          </template>
          <template #right>
            <NextPrevButton direction="next" light to="investigate-green-blue">
              part 3
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
