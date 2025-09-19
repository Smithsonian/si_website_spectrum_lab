<template>
  <ExoplanetsLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <InstructionHeader
          >Proposal to NASA Part 1: About JWST
        </InstructionHeader>
        <InstructionRow row-type="Intro">
          Imagine you are an Exoplanet Researcher! You will create a
          hypothetical proposal to NASA to observe a planet of your choice using
          the
          <BLink
            href="https://science.nasa.gov/mission/webb/"
            target="_blank"
            rel="noopener"
            >James Webb Space Telescope (JWST)</BLink
          >.
          <p class="mt-2">
            JWST, which launched in late 2021, can collect higher resolution
            spectra at infrared wavelengths from 0.6 to 28 microns, making it
            well-suited for exoplanet research. (These wavelengths are where
            many interesting molecules have absorption features, and where
            planets give off thermal emission.)
          </p>
        </InstructionRow>
        <InstructionRow row-type="Tool">
          Compare older exoplanet spectra from HST and Spitzer with newer
          observations from JWST.
          <template #steps>
            <InstructionStep>
              Under <span class="challenge-tool-label">Source 1</span>, select
              the HST/Spitzer spectrum for one of the exoplanets.
            </InstructionStep>
            <InstructionStep>
              Under the
              <span class="challenge-tool-label">Source 2</span> Exoplanets
              category, select the JWST spectrum for the same planet. Compare
              the two spectra and answer questions 2 and 3 in your Notebook.
            </InstructionStep>
            <InstructionStep>
              Under <span class="challenge-tool-label">Source 2</span>, view
              different comparison spectra for Atoms and Molecules or Exoplanet
              Models. Use the comparison spectra to answer question 4 in your
              Notebook.
            </InstructionStep>
          </template>
        </InstructionRow>
        <InstructionRow row-type="Notebook">
          Answer these questions in your Notebook.
          <template #steps>
            <InstructionStep> Which exoplanet did you select? </InstructionStep>
            <InstructionStep>
              Identify 1-2 similarities between the HST/Spitzer and JWST spectra
              for your planet.
            </InstructionStep>
            <InstructionStep>
              Identify 1-2 differences between the HST/Spitzer and JWST spectra
              for your planet.
            </InstructionStep>
            <InstructionStep>
              What conclusion about the exoplanet’s atmosphere can you draw from
              the JWST data that might be new or stronger than what you could
              draw from the HST/Spitzer data alone?
            </InstructionStep>
          </template>
        </InstructionRow>
      </ChallengeCard>
    </template>
    <template #tool-col>
      <ToolControlGroup v-model:plot-type="plotType" v-model:zoom="zoom">
        <template #top-tool>
          <ToolCard :custom-metadata="exoplanetMetadata" />
        </template>
        <template #bottom-tool>
          <ToolCard :custom-metadata="bottomMetadataList" />
        </template>
      </ToolControlGroup>
      <LeftRightGroup class="mt-5">
        <template #left>
          <NextPrevButton direction="prev" to="../comparing" light>
            previous section
          </NextPrevButton>
        </template>
        <template #right>
          <NextPrevButton direction="next" to="your-proposal" light>
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
import { useCustomMetadata, useAllMetadata } from '@/utils/metadataUtils';
import { ref } from 'vue';

useSpecLabHead('Proposal to NASA', 'Exoplanets');

const plotType = ref<PlotType>('line');
const zoom = ref(41);

const allMetadata = useAllMetadata();
const modelMetadata = allMetadata['Exoplanet Models'];
const atomsMetadata = allMetadata['Atoms and Molecules'];

const exoplanetMetadata1 = useCustomMetadata('Exoplanets', 'WASP_39b', {});
const exoplanetMetadata2 = useCustomMetadata('Exoplanets', 'HD189733b', {});
const exoplanetMetadata3 = useCustomMetadata(
  'Exoplanets',
  'JWST_WASP-39-b-Rustamkulov-et-al.-2023_MDinvert',
  {},
);
const exoplanetMetadata4 = useCustomMetadata(
  'Exoplanets',
  'table_HD-189733-b-Fu-et-al.-2024_2columnMDinvert',
  {},
);

const customMetadataMaybe = [
  exoplanetMetadata1,
  exoplanetMetadata2,
  exoplanetMetadata3,
  exoplanetMetadata4,
];

const exoplanetMetadata = customMetadataMaybe.filter((sm) => !!sm);

const bottomMetadataList = [
  ...exoplanetMetadata,
  ...atomsMetadata,
  ...modelMetadata,
];
</script>
