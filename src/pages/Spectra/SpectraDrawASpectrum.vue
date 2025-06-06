<template>
  <SpectraLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <InstructionHeader
          >Draw a Spectrum Part 2: Draw and Reflect</InstructionHeader
        >
        <InstructionRow row-type="Tool">
          Draw a spectrum that matches the graph shown in your Spectrum
          Notebook.
        </InstructionRow>
        <InstructionRow row-type="Notebook">
          <template #steps>
            <InstructionStep>
              Optional: Paste a screenshot of your drawing into your Spectrum
              Notebook.
            </InstructionStep>
            <InstructionStep>
              Answer the questions in your Notebook about the spectrum you drew.
            </InstructionStep>
          </template>
        </InstructionRow>
      </ChallengeCard>
    </template>
    <template #tool-col>
      <ToolCard draw-only class="mb-5" />
      <LeftRightGroup>
        <template #right>
          <NextPrevButton direction="next" to="../white-line" light>
            next section
          </NextPrevButton>
        </template>
      </LeftRightGroup>
    </template>
  </SpectraLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';

useSpecLabHead('Draw a Spectrum', 'Spectra');
</script>
