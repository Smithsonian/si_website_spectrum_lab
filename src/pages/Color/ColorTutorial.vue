<template>
  <ColorLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <InstructionHeader>Spectrum Tutorial</InstructionHeader>
        <InstructionRow rowType="Tutorial">
          The tutorial (below) recaps key features of the online Spectrum Tool
          and introduces some new ones.
        </InstructionRow>
        <InstructionRow rowType="Notebook">
          As you step through the tutorial, answer these questions:
          <template #steps>
            <InstructionStep>
              What is the relationship between the wavelength and energy of
              light?
            </InstructionStep>
            <InstructionStep>
              Why might it be useful to display a spectrum graph as a scatter
              plot instead of a line chart?
            </InstructionStep>
            <InstructionStep>
              What parts of the electromagnetic spectrum are not displayed on
              the Spectrum Tool?
            </InstructionStep>
          </template>
        </InstructionRow>
      </ChallengeCard>
    </template>
    <template #tool-col>
      <ToolControlGroup
        :disabled="!controlsEnabled"
        v-model:zoom="zoom"
        v-model:plot-type="plotType"
        v-model:units="units"
      >
        <template #top-tool>
          <ToolCard
            :custom-metadata="marsMetadataList"
            :spectrum-picker-placeholder="null"
          >
            <div
              ref="graphTutAnchor"
              class="position-absolute"
              style="bottom: 25px; left: 200px; width: 0; height: 0"
            ></div>
            <ControlsTutPopupSpectrumGraph :anchor-elem="graphTutAnchor" />
          </ToolCard>
        </template>
      </ToolControlGroup>
      <LeftRightGroup class="mt-5">
        <template #left>
          <NextPrevButton
            v-if="tutorialState === 'nextSection'"
            direction="prev"
            light
            @click="replayResetControls"
          >
            replay tutorial
          </NextPrevButton>
        </template>
        <template #right>
          <NextPrevButton
            v-if="tutorialState === 'nextSection'"
            direction="next"
            light
            to="seeing-color"
          >
            next section
          </NextPrevButton>
        </template>
      </LeftRightGroup>
    </template>
  </ColorLayout>
</template>

<script setup lang="ts">
import type { PlotType } from '@/constants';
import type { WavelengthUnit } from '@/injectionKeys';
import { useSpecLabHead } from '@/utils/locationUtils';
import { useCustomMetadata } from '@/utils/metadataUtils';
import { useControlsTutorialStateMachine } from '@/utils/tutorialUtils';
import { computed, ref, useTemplateRef } from 'vue';

useSpecLabHead('Tutorial', 'Color');

const graphTutAnchor = useTemplateRef('graphTutAnchor');

const marsMetadata = useCustomMetadata('Solar System', 'Mars_Reflection', {});
const marsMetadataList = marsMetadata ? [marsMetadata] : [];

// Initialize the tutorial state and start the first popup
const { tutorialState, goToNext, replay } = useControlsTutorialStateMachine();
goToNext();

const controlsEnabled = computed(() => {
  const enabledStates: (typeof tutorialState.value)[] = [
    'wavelengthUnits',
    'plotType',
    'slider',
    'nextSection',
  ];
  return enabledStates.includes(tutorialState.value);
});

const zoom = ref(100);
const plotType = ref<PlotType>('line');
const units = ref<WavelengthUnit>('Microns');

const replayResetControls = () => {
  zoom.value = 100;
  plotType.value = 'line';
  units.value = 'Microns';
  replay();
};
</script>
