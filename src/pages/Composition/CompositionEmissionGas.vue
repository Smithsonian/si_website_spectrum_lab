<template>
  <CompositionLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <InstructionHeader>Atomic emission: Part 2</InstructionHeader>
        <InstructionRow row-type="Tool">
          Identify the types of gas in the two lamps. Use the dropdown in the
          top tool to switch between them. Compare them to the gases in the
          bottom tool.
          <template #steps>
            <InstructionStep>
              What type of gas is in the metal halide bulb?
            </InstructionStep>
            <InstructionStep>
              What type of gas is in the vapor lamp?
            </InstructionStep>
          </template>
        </InstructionRow>
        <InstructionRow row-type="Notebook">
          Write your answers in the <em>Atomic Line Emission</em> section.
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
          <NextPrevButton light direction="prev" to="lamps">
            part 1
          </NextPrevButton>
        </template>
        <template #right>
          <NextPrevButton light direction="next" to="../atoms-and-spectra">
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
