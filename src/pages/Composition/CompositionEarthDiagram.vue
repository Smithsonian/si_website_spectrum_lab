<template>
  <CompositionLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <template #top>
          <InstructionHeader>
            What can we know about Earth from its spectra? Part 1
          </InstructionHeader>
          <InstructionRow row-type="Investigate">
            This diagram shows 4 light paths that are associated with different
            behaviors of light in the context of the Earth-Sun system. Use the
            diagram to complete the following tasks.
            <template #steps>
              <InstructionStep>
                Match the letter of the light paths with the type of spectrum.
              </InstructionStep>
              <InstructionStep>
                Identify the source of the photons in each case.
              </InstructionStep>
              <InstructionStep>
                Identify what the photons are interacting with in each case.
              </InstructionStep>
            </template>
            <template #note>
              One row of the table in your Spectrum Notebook is pre-filled as an
              example of what to do.
            </template>
          </InstructionRow>
          <InstructionRow row-type="Notebook">
            Write your answers in <em>Part 1</em> of the
            <em>What can we know about Earth from its spectra?</em> section.
          </InstructionRow>
        </template>
        <template #middle>
          <div class="bg-gen-black">
            <img
              class="d-block mx-auto"
              style="width: 400px; max-width: 100%"
              src="/src/assets/earth_sun_light_paths.png"
              alt="Diagram of 4 light paths from the Sun to the Earth."
            />
          </div>
        </template>
        <template #bottom>
          <LeftRightGroup>
            <template #right>
              <NextPrevButton light direction="next" to="spectra">
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
