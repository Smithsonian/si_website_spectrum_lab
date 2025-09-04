<template>
  <ExoplanetsLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <InstructionHeader>
          WASP-17b Case Study Part 1: Data Resolution
        </InstructionHeader>
        <InstructionRow row-type="Tool">
          The top panel shows the transmission spectrum, captured by NASA’s
          Hubble Space Telescope, of a Hot Jupiter named WASP-17b. The bottom
          panel shows the predicted model transmission spectrum for a Clear Hot
          Jupiter.
          <template #before-steps>
            <p>
              Compare the two spectra. Note that both spectra are set to
              “Scatter Plot” mode with the data points unconnected by lines.
            </p>
          </template>
        </InstructionRow>
        <InstructionRow row-type="Notebook">
          Answer these questions in your Notebook.
          <template #steps>
            <InstructionStep>
              How would you compare the
              <span class="challenge-bold">resolution</span> (number of data
              points per wavelength interval) of the Hubble Space Telescope data
              compared to the model? Explain how this might affect your ability
              to interpret and draw conclusions from the data.
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
            default-spectrum="Clear_Hot_Jupiter_Model_Transmission"
          />
        </template>
      </ToolControlGroup>
      <LeftRightGroup class="mt-5">
        <template #left>
          <NextPrevButton direction="prev" to="../cloudy-skies" light>
            previous section
          </NextPrevButton>
        </template>
        <template #right>
          <NextPrevButton direction="next" to="comparisons" light>
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
import { useCustomMetadata } from '@/utils/metadataUtils';
import { ref } from 'vue';

useSpecLabHead('WASP-17b Resolution', 'Exoplanets');

const plotType = ref<PlotType>('scatter');
const zoom = ref(41);

const wasp17bMetadata = useCustomMetadata('Exoplanets', 'WASP_17b', {
  title: 'WASP-17b (Hubble Space Telescope)',
});
const clearMetadata = useCustomMetadata(
  'Exoplanet Models',
  'Clear_Hot_Jupiter_Model_Transmission',
);

const topMetadataList = wasp17bMetadata ? [wasp17bMetadata] : [];
const bottomMetadataList = clearMetadata ? [clearMetadata] : [];
</script>
