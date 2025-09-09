<template>
  <ExoplanetsLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <InstructionHeader> Comparative Exoplanetology </InstructionHeader>
        <InstructionRow row-type="Intro">
          Now that you’ve examined WASP-17b, let’s look at some other exoplanets
          to see how atmospheric conditions vary among them. All these
          exoplanets were observed with the Hubble Space Telescope (HST) in
          visible and near-IR wavelengths. A few of the exoplanets also have
          low-resolution, mid-IR data from the Spitzer Space Telescope.
          <p class="mt-2">
            Consistent with what you learned earlier, almost all the exoplanet
            spectra featured here are for Hot Jupiters. One planet available
            here, K2-18b, is a "Super Earth."
          </p>
        </InstructionRow>
        <InstructionRow row-type="Tool">
          <template #steps>
            <InstructionStep>
              Under <span class="challenge-tool-label">Source 1</span>, choose a
              transmission spectrum of any of the other exoplanet targets.
              Adjust the
              <span class="challenge-tool-label">wavelength stretch</span> as
              needed to view the entire spectrum.
            </InstructionStep>
            <InstructionStep>
              As with WASP-17b, explore comparison spectra for
              <span class="challenge-bold">Atoms and Molecules</span> under
              <span class="challenge-tool-label">Source 2</span> to complete the
              <span class="challenge-bold">Atmospheric Chemistry</span> columns
              in your Notebook table.
            </InstructionStep>
            <InstructionStep>
              Explore comparison spectra for
              <span class="challenge-bold">Exoplanet Models</span> to complete
              the <span class="challenge-bold">"Weather"</span> columns in your
              Notebook table.
            </InstructionStep>
            <InstructionStep>
              Complete these steps for a second exoplanet target of your choice.
            </InstructionStep>
          </template>
        </InstructionRow>
        <InstructionRow row-type="Notebook">
          Answer these questions in your Notebook.
          <template #steps>
            <InstructionStep>
              Complete the table with an analysis of the Atmospheric Chemistry
              and “Weather” for two additional exoplanets and describe your
              evidence.
            </InstructionStep>
            <InstructionStep>
              For your chosen exoplanets, elaborate on any questions or
              challenges you had in filling out the evidence for your
              conclusions in the chart.
            </InstructionStep>
            <InstructionStep>
              How did your two exoplanet spectra compare? Describe which target
              had better resolution or data quality, which was easier to
              interpret, and why.
            </InstructionStep>
          </template>
        </InstructionRow>
      </ChallengeCard>
    </template>
    <template #tool-col>
      <ToolControlGroup v-model:plot-type="plotType" v-model:zoom="zoom">
        <template #top-tool>
          <ToolCard :custom-metadata="exoplanetFiltered" />
        </template>
        <template #bottom-tool>
          <ToolCard :custom-metadata="bottomMetadataList" />
        </template>
      </ToolControlGroup>
      <LeftRightGroup class="mt-5">
        <template #left>
          <NextPrevButton direction="prev" to="wasp-17b" light>
            previous section
          </NextPrevButton>
        </template>
        <template #right>
          <NextPrevButton direction="next" to="proposal" light>
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

useSpecLabHead('Comparing Part 1', 'Exoplanets');

const plotType = ref<PlotType>('line');
const zoom = ref(41);

const allMetadata = useAllMetadata();
const exoplanetMetadata = allMetadata['Exoplanets'];
const modelMetadata = allMetadata['Exoplanet Models'];

const exoplanetFiltered = exoplanetMetadata.filter((spectrum) => {
  return (
    spectrum.filename !== 'JWST_WASP-39-b-Rustamkulov-et-al.-2023_MDinvert' &&
    spectrum.filename !== 'table_HD-189733-b-Fu-et-al.-2024_2columnMDinvert'
  );
});

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
