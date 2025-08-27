<template>
  <ExoplanetsLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <template #top>
          <InstructionHeader>
            Capturing Spectra Part 1: Exoplanets & Light Interactions
          </InstructionHeader>
          <InstructionRow row-type="Investigate">
            This diagram shows 5 light paths that are associated with different
            interactions between starlight and the exoplanet. Match the letter
            of the light paths with the phenomena in the table below.
            <template #steps>
              <InstructionStep>
                Match the letter of the light paths with the type of spectrum.
              </InstructionStep>
              <InstructionStep>
                Identify the source of the photons in each case.
              </InstructionStep>
              <InstructionStep>
                Describe the path of the photons, and identify what they are
                interacting with in each case.
              </InstructionStep>
            </template>
          </InstructionRow>
          <InstructionRow row-type="Notebook">
            Write your answers in the Table in your Notebook.
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
              style="max-width: 100%"
              src="/src/assets/exoplanetgraphicdark.png"
              alt="Diagram of 5 light paths from a star that are associated with different interactions between starlight and the exoplanet."
            />
          </div>
        </template>
        <template #bottom>
          <LeftRightGroup>
            <template #left>
              <NextPrevButton light direction="prev" to="../intro">
                previous section
              </NextPrevButton>
            </template>
            <template #right>
              <NextPrevButton light direction="next" to="telescope-pov">
                part 2
              </NextPrevButton>
            </template>
          </LeftRightGroup>
        </template>
      </ChallengeCard>
    </template>
  </ExoplanetsLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';

useSpecLabHead('Light Interactions', 'Exoplanets');
</script>
