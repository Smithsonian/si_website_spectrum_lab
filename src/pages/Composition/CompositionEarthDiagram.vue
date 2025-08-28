<template>
  <CompositionLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <template #top>
          <InstructionHeader>
            Earth Part 1: Behaviors of Light
          </InstructionHeader>
          <InstructionRow row-type="Investigate">
            This diagram shows 4 light paths that are associated with different
            behaviors of light in the context of the Earth-Sun system. Consider
            each of the 4 light paths and use the information to complete the
            Table in your Notebook.
          </InstructionRow>
          <InstructionRow row-type="Notebook">
            Complete the Table in your Notebook with the following information:
            <template #steps>
              <InstructionStep>
                Match the letter of the light paths with the type of spectrum
                (emission, transmission, absorption, or reflection).
              </InstructionStep>
              <InstructionStep>
                Identify the source of the photons in each case.
              </InstructionStep>
              <InstructionStep>
                Describe the path of the photons and identify what they are
                interacting with in each case.
              </InstructionStep>
            </template>
            <template #note>
              One row of the table in your Spectrum Notebook is pre-filled as an
              example of what to do.
            </template>
          </InstructionRow>
        </template>
        <template #middle>
          <div class="bg-gen-black">
            <img
              class="d-block mx-auto"
              style="width: 450px; max-width: 100%"
              src="/src/assets/earth_sun_light_paths.png"
              alt="Diagram of 4 light paths from the Sun to the Earth."
            />
          </div>
        </template>
        <template #bottom>
          <LeftRightGroup>
            <template #left>
              <NextPrevButton light direction="prev" to="../sun">
                previous section
              </NextPrevButton>
            </template>
            <template #right>
              <NextPrevButton light direction="next" to="reflection">
                part 2
              </NextPrevButton>
            </template>
          </LeftRightGroup>
        </template>
      </ChallengeCard>
    </template>
  </CompositionLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';

useSpecLabHead('Earth part 1', 'Composition');
</script>
