<template>
  <CompositionLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <InstructionHeader>
          What can we know about other solar system objects from their
          reflection spectra?
        </InstructionHeader>
        <InstructionRow row-type="Tool">
          Choose one reflection spectrum of a non-Earth solar system object.
        </InstructionRow>
        <InstructionRow row-type="Notebook">
          Answer the questions in the
          <em>
            What can we know about other solar system objects from their
            reflection spectra?
          </em>
          section.
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
        <template #right>
          <NextPrevButton light direction="next" to="bonus-solar-system">
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

useSpecLabHead('Solar System', 'Composition');

const mars = useCustomMetadata('Planets', 'Mars_Reflection', {});
const jupiter = useCustomMetadata('Planets', 'Jupiter_Reflection', {});
const europa = useCustomMetadata('Planets', 'Europa_Reflection', {});
const saturn = useCustomMetadata('Planets', 'Saturn_Reflection', {});
const saturnRings = useCustomMetadata('Planets', 'Saturn_Rings_Reflection', {});
const titan = useCustomMetadata('Planets', 'Titan_Reflection', {});
const uranus = useCustomMetadata('Planets', 'Uranus_Reflection', {});
const neptune = useCustomMetadata('Planets', 'Neptune_Reflection', {});
const topMetadata = [
  mars,
  jupiter,
  europa,
  saturn,
  saturnRings,
  titan,
  uranus,
  neptune,
].filter((sm) => !!sm);

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
const dryIce = useCustomMetadata(
  'Atoms and Molecules',
  'Dry_Ice_Reflection',
  {},
);
const methaneVisible = useCustomMetadata(
  'Atoms and Molecules',
  'Methane_Visible_Absorption',
  {},
);
const methaneNearIR = useCustomMetadata(
  'Atoms and Molecules',
  'Methane_Near_IR_Absorption',
  {},
);
const oxygen = useCustomMetadata(
  'Atoms and Molecules',
  'Oxygen_Molecules_Absorption',
  {},
);
const ozone = useCustomMetadata(
  'Atoms and Molecules',
  'Ozone_Absorption_in_UV',
  {},
);
const ironOxide = useCustomMetadata(
  'Atoms and Molecules',
  'Iron_Oxide_Rust_Reflection',
  {},
);
const waterVapor = useCustomMetadata(
  'Atoms and Molecules',
  'Water_Vapor_Absorption',
  {},
);
const iceWater = useCustomMetadata('Atoms and Molecules', 'Ice_Reflection', {});
const bottomMetadata = [
  ammonia,
  co2near,
  co2far,
  dryIce,
  methaneVisible,
  methaneNearIR,
  oxygen,
  ozone,
  ironOxide,
  waterVapor,
  iceWater,
].filter((sm) => !!sm);
</script>
