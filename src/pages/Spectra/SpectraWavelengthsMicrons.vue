<template>
  <SpectraLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <InstructionHeader>
          Measuring wavelengths and energy: microns
        </InstructionHeader>
        <InstructionRow row-type="Tool">
          Move the measuring tool across the spectrum graph with your cursor to
          identify the wavelengths (in microns) of the three brightest features
          (labeled A, B, and C) in this spectrum.
        </InstructionRow>
        <InstructionRow row-type="Notebook">
          Follow the instructions in the
          <em>Measuring wavelengths and energy</em> section.
          <template #steps>
            <InstructionStep>
              Write the wavelengths of the three brightest features, in
              <em>Part II</em>.
            </InstructionStep>
          </template>
          <template #note>
            Looking for the measuring tool? It’s the vertical line with the
            triangle above it that moves with your cursor as you hover over the
            spectrum graph. The measuring tool allows you to identify
            wavelengths of specific parts of the graph.
          </template>
        </InstructionRow>
      </ChallengeCard>
    </template>
    <template #tool-col>
      <ToolCard
        :custom-metadata="metadataList"
        :spectrum-picker-placeholder="null"
      >
        <WavelengthEnergyOverlay />
      </ToolCard>
      <LeftRightGroup class="mt-4">
        <template #left>
          <NextPrevButton direction="prev" light to="../light-sources">
            previous section
          </NextPrevButton>
        </template>
        <template #right>
          <NextPrevButton direction="next" light to="part-2">
            go to nanometers
          </NextPrevButton>
        </template>
      </LeftRightGroup>
    </template>
  </SpectraLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';
import { useCustomMetadata } from '@/utils/metadataUtils';

useSpecLabHead('Wavelengths and energy: microns', 'Spectra');

const fluorescent = useCustomMetadata('Lamps', 'Fluorescent_Bulb', {});
const metadataList = fluorescent ? [fluorescent] : [];
</script>
