<template>
  <CompositionLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <InstructionHeader
          >Atomic Emission Part 3: Identify Gases</InstructionHeader
        >
        <InstructionRow row-type="Tool">
          Identify the types of gas in the two light sources by comparing their
          spectra with reference spectra for different elements.
          <template #steps>
            <InstructionStep>
              Under <span class="challenge-tool-label">Source 1</span>, use the
              dropdown menu to toggle between the spectra for the two light
              sources.
            </InstructionStep>
            <InstructionStep>
              Under <span class="challenge-tool-label">Source 2</span>, use the
              dropdown menu to toggle between the spectra for different types of
              gases.
            </InstructionStep>
            <InstructionStep>
              Look for the best matches between the emission lines of the light
              sources and the reference spectra to identify which gases are used
              in the bulb and lamp.
            </InstructionStep>
          </template>
        </InstructionRow>
        <InstructionRow row-type="Notebook">
          Answer the questions in your Notebook.
          <template #steps>
            <InstructionStep>
              What type of gas is in the metal halide bulb?
            </InstructionStep>
            <InstructionStep>
              What type of gas is in the vapor lamp?
            </InstructionStep>
            <InstructionStep>
              Identifying elements from the patterns in an emission line
              spectrum takes a lot of practice. If you ran into any problems or
              questions while trying to identify the elements in these light
              bulbs, note them briefly here.
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
          <ToolCard :custom-metadata="bottomMetadata" />
        </template>
      </ToolControlGroup>
      <LeftRightGroup class="mt-4">
        <template #left>
          <NextPrevButton light direction="prev" to="slideshow">
            part 2
          </NextPrevButton>
        </template>
        <template #right>
          <NextPrevButton light direction="next" to="../atomic-absorption">
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

useSpecLabHead('Atomic emission part 2', 'Composition');

const metalHalide = useCustomMetadata('Lamps', 'Metal_Halide_Bulb', {});
const vapor = useCustomMetadata('Lamps', 'Sodium_Vapor_Lamp_Low_Pressure', {
  title: 'Vapor Lamp',
});
const topMetadata = [metalHalide, vapor].filter((sm) => !!sm);

const hydrogen = useCustomMetadata(
  'Atoms and Molecules',
  'Hydrogen_Emission',
  {},
);
const helium = useCustomMetadata('Atoms and Molecules', 'Helium_Emission', {});
const neon = useCustomMetadata('Atoms and Molecules', 'Neon_Emission', {});
const sodium = useCustomMetadata(
  'Atoms and Molecules',
  'Sodium_Low_Pressure_Emission',
  {},
);
const mercury = useCustomMetadata(
  'Atoms and Molecules',
  'Mercury_Emission',
  {},
);
const bottomMetadata = [hydrogen, helium, neon, sodium, mercury].filter(
  (sm) => !!sm,
);
</script>
