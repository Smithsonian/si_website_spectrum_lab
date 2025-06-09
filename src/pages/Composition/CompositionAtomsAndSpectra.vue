<template>
  <CompositionLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <InstructionHeader>Atoms and Spectra</InstructionHeader>
        <InstructionRow row-type="Intro">
          Atoms can interact with light in different ways. So far, we have
          explored how atoms emit light at specific wavelengths, as with
          hydrogen in the top panel.
          <template #before-steps>
            The spectrum in the bottom panel results from a different type of
            interaction between atoms and light.
          </template>
        </InstructionRow>
        <InstructionRow row-type="Tool">
          Examine these two spectra.
          <template #steps>
            <InstructionStep>
              What do the hydrogen emission spectrum and the comparison spectrum
              have in common? In what ways are they different?
            </InstructionStep>
          </template>
        </InstructionRow>
        <InstructionRow row-type="Notebook">
          Write your answers in the <em>Atoms and Spectra</em> section.
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
        <template #right>
          <NextPrevButton light direction="next" to="sun">
            next section
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

useSpecLabHead('Atoms and Spectra', 'Composition');

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
