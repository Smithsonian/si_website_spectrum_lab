<template>
  <ExoplanetsLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <InstructionHeader>
          WASP-17b Case Study Part 2: Hot, Hazy, Humid, Salty!
        </InstructionHeader>
        <InstructionRow row-type="Tool">
          <template #steps>
            <InstructionStep>
              Under <span class="challenge-tool-label">plot type</span>, select
              "line chart."
            </InstructionStep>
            <InstructionStep>
              Under the
              <span class="challenge-tool-label">Source 2</span> dropdown menu,
              select category
              <span class="challenge-bold">Atoms and Molecules</span> and choose
              different comparison spectra to identify what might be present in
              the atmosphere of WASP-17b. Use this information to answer
              questions about the
              <span class="challenge-bold">Atmospheric Chemistry</span> columns
              in your Notebook table.
            </InstructionStep>
            <InstructionStep>
              Under the <span class="challenge-tool-label">Source 2</span> top
              dropdown menu, select category
              <span class="challenge-bold">Exoplanet Models</span> and choose
              different model spectra for Hot Jupiter planets to identify what
              conditions might be present in the atmosphere of WASP-17b. Use
              this information to answer questions about the
              <span class="challenge-bold">"Weather"</span> columns in your
              Notebook table.
            </InstructionStep>
          </template>
        </InstructionRow>
        <InstructionRow row-type="Notebook">
          Answer this question in your Notebook.
          <template #steps>
            <InstructionStep>
              The Table in your Notebook shows a potential analysis of the
              WASP-17b spectrum. Based on your exploration of the Atmospheric
              Chemistry and Weather, explain why you would agree or disagree
              with this analysis.
            </InstructionStep>
          </template>
        </InstructionRow>
      </ChallengeCard>
    </template>
    <template #tool-col>
      <ToolControlGroup v-model:plot-type="plotType" v-model:zoom="zoom">
        <template #top-tool>
          <ToolCard
            :custom-metadata="topMetadataList"
            :spectrum-picker-placeholder="null"
          />
        </template>
        <template #bottom-tool>
          <ToolCard
            :custom-metadata="bottomMetadataList"
            spectrum-picker-placeholder="Choose a spectrum"
          />
        </template>
      </ToolControlGroup>
      <LeftRightGroup class="mt-5">
        <template #left>
          <NextPrevButton direction="prev" to="resolution" light>
            part 1
          </NextPrevButton>
        </template>
        <template #right>
          <NextPrevButton direction="next" to="../comparing" light>
            next section
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

useSpecLabHead('WASP-17b', 'Exoplanets');

const plotType = ref<PlotType>('scatter');
const zoom = ref(41);

const wasp17bMetadata = useCustomMetadata('Exoplanets', 'WASP_17b', {
  title: 'WASP-17b (Hubble Space Telescope)',
});
const topMetadataList = wasp17bMetadata ? [wasp17bMetadata] : [];

const allMetadata = useAllMetadata();
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
  sodium,
  potassium,
  waterVapor,
  ...modelMetadata,
];
const bottomMetadataList = bottomMetadataListMaybe.filter((sm) => !!sm);
</script>
