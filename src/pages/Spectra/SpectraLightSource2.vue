<template>
  <SpectraLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <InstructionHeader
          >Investigate Light Sources: Source 2</InstructionHeader
        >
        <InstructionRow row-type="Investigate">
          Use your spectroscope to view the spectrum of the second light source
          you chose.
        </InstructionRow>
        <InstructionRow row-type="Tool">
          <template #steps>
            <InstructionStep>
              In the top tool, <strong>sketch a graph</strong> that represents
              the spectrum you see.
            </InstructionStep>
            <InstructionStep>
              In the bottom panel, use the drop-down menu to select different
              types of light sources and compare their spectra to what you
              observed. Which light source most closely matches yours?
            </InstructionStep>
          </template>
        </InstructionRow>
        <InstructionRow row-type="Notebook">
          <template #steps>
            <InstructionStep>
              Optional: Paste a screenshot of your drawing into your Spectrum
              Notebook.
            </InstructionStep>
            <InstructionStep>
              Answer the questions in your Notebook.
            </InstructionStep>
          </template>
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
            part 2
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
// Exclude the IR lamp we have in here
const lightSourceMetadata = allMetadata['Lamps'].filter(
  (sm) => sm.filename !== 'tvRemote',
);
</script>
