<template>
  <SpectraLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <InstructionHeader>Draw a spectrum</InstructionHeader>
        <InstructionRow row-type="Tool">
          Follow the instructions in <em>Part A</em> of the
          <em>Draw a spectrum</em> section.
          <template #steps>
            <InstructionStep>
              Copy that graph into the Spectrum Tool.
            </InstructionStep>
            <InstructionStep>
              Optional: Paste a screenshot of your drawing into your Spectrum
              Notebook.
            </InstructionStep>
          </template>
        </InstructionRow>
        <InstructionRow row-type="Notebook">
          Answer the questions in <em>Part B</em>.
        </InstructionRow>
      </ChallengeCard>
    </template>
    <template #tool-col>
      <ToolCard draw-only class="mb-5" />
      <LeftRightGroup>
        <template #right>
          <NextPrevButton direction="next" to="white-line" light>
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
