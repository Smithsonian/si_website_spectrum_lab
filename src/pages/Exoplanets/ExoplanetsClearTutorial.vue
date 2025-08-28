<template>
  <ExoplanetsLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <InstructionHeader>Modeling Clear Atmospheres</InstructionHeader>
        <InstructionRow row-type="Intro">
          Astronomers predict the theoretical exoplanet spectrum they would
          expect to observe under ideal conditions. Each predictive model is
          specific to a particular set of astmospheric conditions.
        </InstructionRow>
        <InstructionRow row-type="Tool">
          Let’s explore some of these models, starting with the model for clear
          skies.
        </InstructionRow>
        <InstructionRow row-type="Notebook">
          Once you’ve completed the tutorial, go to the
          <em>Tutorial: Modeling Exoplanet Atmospheres</em> section and answer
          the following questions:
          <template #steps>
            <InstructionStep>
              Why do you think astronomers create computer-generated predictions
              of exoplanet atmospheres?
            </InstructionStep>
            <InstructionStep>
              What are the approximate center wavelengths of the Sodium (Na),
              Potassium (K), and three Water Vapor (H<sub>2</sub>O) features in
              the Comparison Atomic and Molecular spectra, and in the Clear Hot
              Jupiter model?
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
          <NextPrevButton direction="prev" @click="replayResetZoom" light>
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
