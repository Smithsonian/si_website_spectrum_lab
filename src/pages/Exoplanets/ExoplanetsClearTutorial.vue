<template>
  <ExoplanetsLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <InstructionHeader
          >Modeling Clear Exoplanet Atmospheres</InstructionHeader
        >
        <InstructionRow row-type="Intro">
          Astronomers predict the theoretical exoplanet spectrum they would
          expect to observe under ideal conditions. Each predictive model is
          specific to a particular set of atmospheric conditions.
        </InstructionRow>
        <InstructionRow row-type="Tool">
          <template #steps>
            <InstructionStep>
              View the tutorial below, which describes a model for a Hot Jupiter
              exoplanet with <span class="challenge-bold">clear</span> skies.
            </InstructionStep>
            <InstructionStep>
              Use the vertical measuring tool on the second step of the tutorial
              to measure the wavelengths of the features for different atoms and
              molecules to answer question 1 below.
            </InstructionStep>
            <InstructionStep>
              Use the dropdown menu under
              <span class="challenge-tool-label">Source 2</span> to compare
              individual atomic and molecular spectra with the Hot Jupiter model
              spectrum.
            </InstructionStep>
          </template>
        </InstructionRow>
        <InstructionRow row-type="Notebook">
          As you view the tutorial, answer these questions in your Notebook.
          <template #steps>
            <InstructionStep>
              What are the approximate center wavelengths of the Sodium (Na),
              Potassium (K), and three Water Vapor (H<sub>2</sub>O) features in
              the Comparison Atomic and Molecular spectra, and in the Clear Hot
              Jupiter model?
            </InstructionStep>
            <InstructionStep>
              Why do you think astronomers create computer-generated predictions
              of exoplanet atmospheres?
            </InstructionStep>
          </template>
        </InstructionRow>
      </ChallengeCard>
    </template>
    <template #tool-col>
      <ToolControlGroup
        v-model:zoom="zoom"
        :disabled="tutorialState !== 'nextSection'"
      >
        <template #top-tool>
          <ToolCard
            :custom-metadata="exoplanetMetadataList"
            :spectrum-picker-placeholder="null"
          >
            <div
              ref="modelAnchor"
              class="position-absolute"
              style="bottom: 10px; left: 300px"
            ></div>
            <ExoClearTutPopoverModel :anchor-elem="modelAnchor" />
            <div
              ref="featuresAnchor"
              class="position-absolute"
              style="bottom: 10px; left: 200px"
            ></div>
            <ExoClearTutPopoverFeatures :anchor-elem="featuresAnchor" />
            <ExoClearTutOverlayFeatures v-if="tutorialState === 'features'" />
          </ToolCard>
        </template>
        <template v-if="tutorialState === 'nextSection'" #bottom-tool>
          <ToolCard :custom-metadata="atomsAndMoleculesList" />
        </template>
      </ToolControlGroup>
      <LeftRightGroup v-if="tutorialState === 'nextSection'" class="mt-5">
        <template #left>
          <NextPrevButton direction="prev" to="capturing-spectra" light>
            previous section
          </NextPrevButton>
          <NextPrevButton
            direction="prev"
            @click="replayResetZoom"
            light
            class="ml-2"
          >
            replay tutorial
          </NextPrevButton>
        </template>
        <template #right>
          <NextPrevButton direction="next" to="cloudy-skies" light>
            next section
          </NextPrevButton>
        </template>
      </LeftRightGroup>
    </template>
  </ExoplanetsLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';
import { useCustomMetadata } from '@/utils/metadataUtils';
import { useExoplanetsClearTutorialStateMachine } from '@/utils/tutorialUtils';
import { ref, useTemplateRef } from 'vue';

useSpecLabHead('Clear skies', 'Exoplanets');

const modelAnchor = useTemplateRef('modelAnchor');
const featuresAnchor = useTemplateRef('featuresAnchor');

// This is where the feature labels are in the right spot.
const FEATURES_ZOOM = 41;
const zoom = ref(FEATURES_ZOOM);

const { tutorialState, goToNext, replay } =
  useExoplanetsClearTutorialStateMachine();
goToNext();

const replayResetZoom = () => {
  replay();
  zoom.value = FEATURES_ZOOM;
};

const clearHotJupiterMetadata = useCustomMetadata(
  'Exoplanet Models',
  'Clear_Hot_Jupiter_Model_Transmission',
  {},
);

const exoplanetMetadataList = clearHotJupiterMetadata
  ? [clearHotJupiterMetadata]
  : [];

const sodiumAbsorption = useCustomMetadata(
  'Atoms and Molecules',
  'Sodium_Absorption',
  {},
);
const potassiumAbsorption = useCustomMetadata(
  'Atoms and Molecules',
  'Potassium_Absorption',
  {},
);
const waterVaporAbsorption = useCustomMetadata(
  'Atoms and Molecules',
  'Water_Vapor_Absorption',
  {},
);

const atomsAndMoleculesListMaybe = [
  sodiumAbsorption,
  potassiumAbsorption,
  waterVaporAbsorption,
];

const atomsAndMoleculesList = atomsAndMoleculesListMaybe.filter((sm) => !!sm);
</script>
