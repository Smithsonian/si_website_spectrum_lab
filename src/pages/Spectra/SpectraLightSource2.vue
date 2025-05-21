<template>
  <SpectraLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <InstructionHeader>Light source #2</InstructionHeader>
        <InstructionRow row-type="Tool">
          Use your spectroscope to view the spectrum of the
          <strong>second</strong> light source you chose.

          <template #steps>
            <InstructionStep>
              In the top tool, <strong>sketch a graph</strong> that represents
              this spectrum.
            </InstructionStep>
            <InstructionStep>
              Optional: Paste a screenshot of your drawing into your Spectrum
              Notebook in <em>Part A</em> of the
              <em>Light source #2</em> section.
            </InstructionStep>
            <InstructionStep>
              In the bottom panel, use the drop-down menu to select different
              types of light sources and compare their spectra to what you
              observed. Which light source most closely matches yours?
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
      <BottomToolContext>
        <ToolCard :custom-metadata="lightSourceMetadata" class="mb-5" />
      </BottomToolContext>
      <LeftRightGroup>
        <template #left>
          <NextPrevButton direction="prev" to="source-1" light>
            light source 1
          </NextPrevButton>
        </template>
        <template #right>
          <NextPrevButton direction="next" to="../wavelengths-and-energy" light>
            next section
          </NextPrevButton>
        </template>
      </LeftRightGroup>
    </template>
  </SpectraLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';
import { useAllMetadata } from '@/utils/metadataUtils';

useSpecLabHead('Light source 2', 'Spectra');

const allMetadata = useAllMetadata();
const lightSourceMetadata = allMetadata['Lamps'];
</script>
