<template>
  <ExoplanetsLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <InstructionHeader>
          WASP-17b Case Study: How does real exoplanet spectral data compare to
          predicted models?
        </InstructionHeader>
        <InstructionRow row-type="Tool">
          The top panel shows the transmission spectrum, captured by NASA’s
          Hubble Space Telescope, of a Hot Jupiter named WASP-17b. The bottom
          panel shows the predicted model transmission spectrum for a Clear Hot
          Jupiter.
          <template #extra-paras>
            <p>
              How do these spectra compare? Use the comparison dropdown menu to
              view different exoplanet models and different atoms and molecules.
              Can you draw any conclusions about what’s in the atmosphere of
              WASP-17b?
            </p>
          </template>
        </InstructionRow>
        <InstructionRow row-type="Notebook">
          Go to the <em>Challenge 1. WASP-17b Case Study</em> section and answer
          the following questions:
          <template #steps>
            <InstructionStep>
              Note that both spectra are set to “Scatter Plot” mode with the
              data points unconnected by lines. How would you compare the
              <strong>resolution</strong> (number of data points per wavelength
              interval) of the real data compared to the model? Explain how this
              might affect your ability to interpret and draw conclusions from
              the data.
            </InstructionStep>
            <InstructionStep>
              Turn the “Line Chart” option on and use the dropdown menu in the
              bottom chart to identify any atomic or molecular absorption
              features (the “Atmospheric Chemistry” of WASP-17b); and the
              Exoplanet Model (the “Weather” prediction) that provides the best
              fit to the WASP-17b data. The chart in your Notebook shows a
              potential analysis of the WASP-17b spectrum. Explain why you would
              agree or disagree with this analysis, using specific examples from
              the Comparison Atoms and Molecules and the Comparison Exoplanet
              Models.
            </InstructionStep>
            <InstructionStep>
              The chart in your notebook shows a potential analysis of the
              WASP-17b spectrum. Explain why you would agree or disagree with
              this analysis, using specific examples from the Atoms and
              Molecules and Exoplanet Model spectra.
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
          <ToolCard
            :custom-metadata="topMetadataList"
            :spectrum-picker-placeholder="null"
          />
        </template>
        <template #bottom-tool>
          <ToolCard
            :custom-metadata="bottomMetadataList"
            default-spectrum="Clear_Hot_Jupiter_Model_Transmission"
          />
        </template>
      </ToolControlGroup>
      <LeftRightGroup class="mt-5">
        <template #right>
          <NextPrevButton direction="next" to="comparing" light>
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

const wasp17bMetadata = useCustomMetadata('Exoplanets', 'WASP_17b', {});
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
  ...modelMetadata,
  sodium,
  potassium,
  waterVapor,
];
const bottomMetadataList = bottomMetadataListMaybe.filter((sm) => !!sm);
</script>
