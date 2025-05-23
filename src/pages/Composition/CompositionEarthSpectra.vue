<template>
  <CompositionLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <InstructionHeader>
          What can we know about Earth from its spectra? Part 2
        </InstructionHeader>
        <InstructionRow row-type="Tool">
          Compare each type of spectra from Earth with spectra from different
          atoms and molecules. There are 3 spectra types in the top tool to
          investigate:
          <template #steps>
            <InstructionStep>Reflection</InstructionStep>
            <InstructionStep>Emission</InstructionStep>
            <InstructionStep>Transmission</InstructionStep>
          </template>
        </InstructionRow>
        <InstructionRow row-type="Notebook">
          Answer the questions in parts <em>II, III,</em> and <em>IV</em> in the
          <em>What can we know about Earth from its spectra?</em> section.
        </InstructionRow>
      </ChallengeCard>
    </template>
    <template #tool-col>
      <ToolControlGroup show-zoom>
        <template #top-tool>
          <ToolCard :custom-metadata="topMetadata" />
        </template>
        <template #bottom-tool>
          <ToolCard :custom-metadata="bottomMetadata" />
        </template>
      </ToolControlGroup>
      <LeftRightGroup class="mt-4">
        <template #right>
          <NextPrevButton light direction="next" to="solar-system">
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

useSpecLabHead('Earth part 2', 'Composition');

const earthReflection = useCustomMetadata('Planets', 'Earth_Reflection', {});
const earthEmission = useCustomMetadata('Planets', 'Earth_Emission', {});
const earthTransmission = useCustomMetadata(
  'Planets',
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
