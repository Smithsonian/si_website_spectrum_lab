<template>
  <CompositionLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <InstructionHeader> Solar System Composition </InstructionHeader>
        <InstructionRow row-type="Tool">
          Investigate the reflection spectrum of a non-Earth Solar System object
          of your choice.
          <template #steps>
            <InstructionStep>
              Under <span class="challenge-tool-label">Source 1</span>, select
              one of the reflection spectra. Adjust the
              <span class="challenge-tool-label">wavelength stretch</span> as
              needed to bring the spectrum into view.
            </InstructionStep>
            <InstructionStep>
              Under <span class="challenge-tool-label">normalize data</span>,
              choose <span class="challenge-bold">visible</span> while
              investigating the object's color. (Switch the normalization back
              to <span class="challenge-bold">all</span> before moving on.)
            </InstructionStep>
            <InstructionStep>
              Compare spectral features between your chosen object's reflection
              spectrum and the reference spectra to identify at least one
              material in your object's composition.
            </InstructionStep>
          </template>
        </InstructionRow>
        <InstructionRow row-type="Notebook">
          Answer these questions in your Notebook.
          <template #steps>
            <InstructionStep>
              Which object’s reflection spectrum did you choose?
            </InstructionStep>
            <InstructionStep>
              What color do you expect this object to appear based on its
              spectrum?
            </InstructionStep>
            <InstructionStep>
              Identify 2 characteristics of the object that you can know based
              on its spectrum and explain how you know. (One of the
              characteristics can be its color if you describe the evidence
              clearly. Another characteristic might be what atoms or molecules
              are present.)
            </InstructionStep>
          </template>
        </InstructionRow>
      </ChallengeCard>
    </template>
    <template #tool-col>
      <ToolControlGroup
        :control-names="['units', 'plotType', 'normalize', 'zoom']"
      >
        <template #top-tool>
          <ToolCard :custom-metadata="topMetadata" />
        </template>
        <template #bottom-tool>
          <ToolCard :custom-metadata="bottomMetadata" />
        </template>
      </ToolControlGroup>
      <LeftRightGroup class="mt-4">
        <template #left>
          <NextPrevButton light direction="prev" to="../earth">
            prev section
          </NextPrevButton>
        </template>
        <template #right>
          <NextPrevButton light direction="next" to="bonus">
            bonus
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

const mars = useCustomMetadata('Solar System', 'Mars_Reflection', {
  imageUrl: '',
});
const jupiter = useCustomMetadata('Solar System', 'Jupiter_Reflection', {
  imageUrl: '',
});
const europa = useCustomMetadata('Solar System', 'Europa_Reflection', {
  imageUrl: '',
});
const saturn = useCustomMetadata('Solar System', 'Saturn_Reflection', {
  imageUrl: '',
});
const saturnRings = useCustomMetadata(
  'Solar System',
  'Saturn_Rings_Reflection',
  { imageUrl: '' },
);
const titan = useCustomMetadata('Solar System', 'Titan_Reflection', {
  imageUrl: '',
});
const uranus = useCustomMetadata('Solar System', 'Uranus_Reflection', {
  imageUrl: '',
});
const neptune = useCustomMetadata('Solar System', 'Neptune_Reflection', {
  imageUrl: '',
});
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
