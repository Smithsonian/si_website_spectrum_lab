<template>
  <CompositionLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <InstructionHeader> Earth Part 3: Emission Spectrum </InstructionHeader>
        <InstructionRow row-type="Tool">
          Compare Earth's emission spectrum with comparison spectra of different
          molecules.
          <template #steps>
            <InstructionStep>
              Under <span class="challenge-tool-label">Source 1</span>, select
              "Earth Emission." Adjust the
              <span class="challenge-tool-label">wavelength stretch</span> as
              needed to bring the spectrum into view.
            </InstructionStep>
            <InstructionStep>
              Under <span class="challenge-tool-label">Source 2</span>, select
              the spectra for different comparison molecules.
            </InstructionStep>
            <InstructionStep>
              Compare absorption line features between Earth's emission spectrum
              and the molecules to identify at least two matches. (For each
              molecule, you may need to make an identification based on only one
              line.)
            </InstructionStep>
          </template>
        </InstructionRow>
        <InstructionRow row-type="Notebook">
          Answer these questions in your Notebook.
          <template #steps>
            <InstructionStep>
              What aspect of the Sun-Earth system (shown in the diagram from
              Part 1) is causing the absorption in Earth’s emission spectrum?
            </InstructionStep>
            <InstructionStep>
              Identify at least two molecules in the absorption features of
              Earth’s emission spectrum.
            </InstructionStep>
          </template>
        </InstructionRow>
      </ChallengeCard>
    </template>
    <template #tool-col>
      <ToolControlGroup>
        <template #top-tool>
          <ToolCard :custom-metadata="topMetadata" />
        </template>
        <template #bottom-tool>
          <ToolCard :custom-metadata="bottomMetadata" />
        </template>
      </ToolControlGroup>
      <LeftRightGroup class="mt-4">
        <template #left>
          <NextPrevButton light direction="prev" to="reflection">
            part 2
          </NextPrevButton>
        </template>
        <template #right>
          <NextPrevButton light direction="next" to="transmission">
            part 4
          </NextPrevButton>
        </template>
      </LeftRightGroup>
    </template>
  </CompositionLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';
import { useCustomMetadata } from '@/utils/metadataUtils';

useSpecLabHead('Earth part 3', 'Composition');

const earthReflection = useCustomMetadata(
  'Solar System',
  'Earth_Reflection',
  {},
);
const earthEmission = useCustomMetadata('Solar System', 'Earth_Emission', {});
const earthTransmission = useCustomMetadata(
  'Solar System',
  'Earth_Transmission',
  {},
);
const topMetadata = [earthReflection, earthEmission, earthTransmission].filter(
  (sm) => !!sm,
);

const ammonia = useCustomMetadata(
  'Atoms and Molecules',
  'Ammonia_Absorption',
  {},
);
const co2near = useCustomMetadata(
  'Atoms and Molecules',
  'Carbon_Dioxide_Absorption_Near_to_Mid_IR',
  {},
);
const co2far = useCustomMetadata(
  'Atoms and Molecules',
  'Carbon_Dioxide_Absorption_Mid_to_Far_IR',
  {},
);
const oxygen = useCustomMetadata(
  'Atoms and Molecules',
  'Oxygen_Molecules_Absorption',
  {},
);
const ozone = useCustomMetadata(
  'Atoms and Molecules',
  'Ozone_Absorption_in_IR',
  {},
);
const water = useCustomMetadata(
  'Atoms and Molecules',
  'Water_Vapor_Absorption',
  {},
);
const bottomMetadata = [ammonia, co2near, co2far, oxygen, ozone, water].filter(
  (sm) => !!sm,
);
</script>
