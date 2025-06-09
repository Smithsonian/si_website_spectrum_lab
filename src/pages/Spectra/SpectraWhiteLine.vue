<template>
  <SpectraLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <template #top>
          <InstructionHeader>Observe White Light Source</InstructionHeader>
          <InstructionRow row-type="Investigate">
            Look at the white line on your screen through your spectroscope.
            (Remember to took to the right or left to see the spectrum along the
            inside wall of the spectroscope tube.)
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
            <template #steps>
              <InstructionStep>
                Optional: Paste a screenshot of your drawing into your Spectrum
                Notebook.
              </InstructionStep>
              <InstructionStep>
                Answer the questions in your Notebook about the spectrum you
                drew.
              </InstructionStep>
            </template>
          </InstructionRow>
        </template>
        <template #middle>
          <div class="bg-gen-black">
            <img
              src="/src/assets/white_vertical_line.png"
              alt="Vertical white line on a black background"
              class="d-block mx-auto"
              style="max-width: 575px"
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
