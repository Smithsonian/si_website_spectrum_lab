<template>
  <ExoplanetsLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <InstructionHeader>
          Comparative Exoplanetology: How do atmospheric conditions vary among
          exoplanets? First planet
        </InstructionHeader>
        <InstructionRow row-type="Tool">
          Now that you’ve examined WASP-17b, let’s look at some other
          exoplanets. In the top graph, choose a transmission spectrum of any of
          the other Exoplanet targets.
        </InstructionRow>
        <InstructionRow row-type="Notebook">
          Go to
          <em
            >Hot, Hazy, Humid, Salty! - Exoplanet Atmospheric Spectra Features
            Chart
          </em>
          in your notebook.
          <template #steps>
            <InstructionStep>
              Choose one other exoplanet transmission spectrum from the list in
              the Spectrum 1 dropdown menu, and use the Spectrum 2 dropdown menu
              to fill in the chart in your Notebook for that planet.
            </InstructionStep>
          </template>
        </InstructionRow>
        <InstructionRow row-type="Notebook">
          Go to the <em>Challenge 2. Comparative Exoplanetology!</em> section.
          Then, answer the following questions:
          <template #steps>
            <InstructionStep> What target did you choose? </InstructionStep>
            <InstructionStep>
              Elaborate on any questions or challenges you had in filling out
              the evidence for your conclusions in the chart.
            </InstructionStep>
          </template>
        </InstructionRow>
      </ChallengeCard>
    </template>
    <template #tool-col>
      <ToolControlGroup
        v-model:plot-type="plotType"
        v-model:zoom="zoom"
        show-zoom
      >
        <template #top-tool>
          <ToolCard :custom-metadata="exoplanetMetadata" />
        </template>
        <template #bottom-tool>
          <ToolCard :custom-metadata="bottomMetadataList" />
        </template>
      </ToolControlGroup>
      <LeftRightGroup class="mt-5">
        <template #right>
          <NextPrevButton direction="next" to="part-2" light>
            part 2
          </NextPrevButton>
        </template>
      </LeftRightGroup>
    </template>
  </ExoplanetsLayout>
</template>

<script setup lang="ts">
import type { PlotType } from '@/constants';
import { useSpecLabHead } from '@/utils/locationUtils';
import { useAllMetadata, useCustomMetadata } from '@/utils/metadataUtils';
import { ref } from 'vue';

useSpecLabHead('Comparing Part 1', 'Exoplanets');

const plotType = ref<PlotType>('scatter');
const zoom = ref(41);

const allMetadata = useAllMetadata();
const exoplanetMetadata = allMetadata['Exoplanets'];
const modelMetadata = allMetadata['Exoplanet Models'];

const sodium = useCustomMetadata(
  'Atoms and Molecules',
  'Sodium_Absorption',
  {},
);
const potassium = useCustomMetadata(
  'Atoms and Molecules',
  'Potassium_Absorption',
  {},
);
const waterVapor = useCustomMetadata(
  'Atoms and Molecules',
  'Water_Vapor_Absorption',
  {},
);
const bottomMetadataListMaybe = [
  ...modelMetadata,
  sodium,
  potassium,
  waterVapor,
];
const bottomMetadataList = bottomMetadataListMaybe.filter((sm) => !!sm);
</script>
