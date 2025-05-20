<template>
  <SpectraLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <InstructionHeader>Spectroscope: White line</InstructionHeader>
        <InstructionRow row-type="Tool">
          Wait for your teacher to display the vertical white line on the black
          background.

          <template #before-steps>
            <p>
              Look at it through your spectroscope like we did at the beginning
              of class.
            </p>
          </template>
          <template #steps>
            <InstructionStep>
              In the top panel, draw a graph that represents what you see in
              your spectroscope.
            </InstructionStep>
            <InstructionStep>
              Optional: Paste a screenshot of your drawing into your Spectrum
              Notebook in <em>Part A</em> of the
              <em
                >Make connections between your spectroscope and the Spectrum
                Tool</em
              >
              section.
            </InstructionStep>
          </template>
        </InstructionRow>
        <InstructionRow row-type="Notebook">
          Answer the questions in <em>Part B</em>.
          <template #note>
            If you don’t remember what x-values are associated with each color,
            you can draw a straight line across the graph and use the lit up
            spectrum image as a reference to aid in drawing your actual spectrum
            graph.
          </template>
        </InstructionRow>
      </ChallengeCard>
    </template>
    <template #tool-col>
      <ToolCard ref="topToolRef" draw-only class="mb-5" />
      <LeftRightGroup>
        <template #right>
          <NextPrevButton direction="next" to="light-sources" light>
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
