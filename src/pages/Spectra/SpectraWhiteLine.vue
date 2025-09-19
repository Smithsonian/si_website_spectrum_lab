<template>
  <SpectraLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <template #top>
          <InstructionHeader>Observe White Light Source</InstructionHeader>
          <InstructionRow row-type="Investigate">
            Look at the white line on your screen through your spectroscope.
          </InstructionRow>
          <InstructionRow row-type="Tool">
            <template #steps>
              <InstructionStep>
                Draw a graph that represents what you see in your spectroscope.
              </InstructionStep>
              (If you don’t remember what x-values are associated with each
              color, you can draw a straight line across the graph and use the
              lit up spectrum image as a reference to aid in drawing your actual
              spectrum graph.)
            </template>
          </InstructionRow>
          <InstructionRow row-type="Notebook">
            Answer the questions in your Notebook about the spectrum you drew.
            <template #steps>
              <InstructionStep>
                What colors (of ROYGBIV) do you see in your spectrum?
              </InstructionStep>
              <InstructionStep>
                Describe how the brightness of the light varies across the
                different colors that you see. For example, are all colors the
                same brightness, or are some colors bright and some dark?)
              </InstructionStep>
            </template>
          </InstructionRow>
        </template>
        <template #middle>
          <div class="bg-gen-black">
            <img
              src="/src/assets/spectroscope/spectroscope_line_white.png"
              alt="Vertical white line on a black background"
              class="d-block mx-auto"
              style="width: 100%"
            />
          </div>
        </template>
      </ChallengeCard>
    </template>
    <template #tool-col>
      <ToolCard draw-only class="mb-5" />
      <LeftRightGroup>
        <template #left>
          <NextPrevButton direction="prev" to="draw-spectra" light>
            previous section
          </NextPrevButton>
        </template>
        <template #right>
          <NextPrevButton direction="next" to="understand-spectroscope" light>
            next section
          </NextPrevButton>
        </template>
      </LeftRightGroup>
    </template>
  </SpectraLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';

useSpecLabHead('White line', 'Spectra');
</script>
