<template>
  <CompositionLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <InstructionHeader
          >Atomic Absorption Part 1: Hydrogen</InstructionHeader
        >
        <InstructionRow row-type="Tool">
          <p class="mt-1">
            Atoms can interact with light in different ways. So far, we have
            explored how atoms emit light at specific wavelengths, as with
            hydrogen under
            <span class="challenge-tool-label">Source 1</span> below.
          </p>
          <p>
            The spectrum shown in
            <span class="challenge-tool-label">Source 2</span> results from a
            different type of interaction between atoms and light.
          </p>
          <template #steps>
            <InstructionStep>
              Examine the two spectra shown. Note their similarities and
              differences.
            </InstructionStep>
          </template>
        </InstructionRow>
        <InstructionRow row-type="Notebook">
          Answer these questions in your Notebook.
          <template #steps>
            <InstructionStep>
              What do the hydrogen emission spectrum and the comparison spectrum
              have in common?
            </InstructionStep>
            <InstructionStep>
              In what ways are the hydrogen emission spectrum and the comparison
              spectrum different from each other?
            </InstructionStep>
          </template>
        </InstructionRow>
      </ChallengeCard>
    </template>
    <template #tool-col>
      <ToolControlGroup>
        <template #top-tool>
          <ToolCard
            :custom-metadata="topMetadata"
            :spectrum-picker-placeholder="null"
          />
        </template>
        <template #bottom-tool>
          <ToolCard
            :custom-metadata="bottomMetadata"
            :spectrum-picker-placeholder="null"
          />
        </template>
      </ToolControlGroup>
      <LeftRightGroup class="mt-4">
        <template #left>
          <NextPrevButton light direction="prev" to="../atomic-emission">
            previous section
          </NextPrevButton>
        </template>
        <template #right>
          <NextPrevButton light direction="next" to="slideshow">
            part 2
          </NextPrevButton>
        </template>
      </LeftRightGroup>
    </template>
  </CompositionLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';
import { useCustomMetadata } from '@/utils/metadataUtils';
import mystery from '@/assets/spectrum_data/mystery@2x.png';

useSpecLabHead('Atomic absorption part 1', 'Composition');

const hydrogenEmission = useCustomMetadata(
  'Atoms and Molecules',
  'Hydrogen_Emission',
  {},
);
const topMetadata = [hydrogenEmission].filter((sm) => !!sm);
const hydrogenAbsorption = useCustomMetadata(
  'Atoms and Molecules',
  'Hydrogen_Absorption',
  { title: 'Comparison Spectrum', imageUrl: mystery },
);
const bottomMetadata = [hydrogenAbsorption].filter((sm) => !!sm);
</script>
