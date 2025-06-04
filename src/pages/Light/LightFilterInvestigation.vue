<template>
  <LightLayout>
    <ChallengeCard>
      <template #top>
        <InstructionHeader
          >Color Filters Part 2: Investigation</InstructionHeader
        >
        <InstructionRow row-type="Investigate">
          <span class="challenge-emphasis"> NOW </span> look through the gels,
          and note how what you see compares with your predictions.
        </InstructionRow>
        <InstructionRow row-type="Notebook">
          <template #steps>
            <InstructionStep>
              What did you actually see when you looked through the red gel? How
              did it compare with your prediction?
            </InstructionStep>
            <InstructionStep>
              Describe what you think is happening, given the colors you saw
              through the red gel.
            </InstructionStep>
            <InstructionStep>
              Discuss your ideas with your partner. What ideas did your partner
              add that seemed helpful?
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
