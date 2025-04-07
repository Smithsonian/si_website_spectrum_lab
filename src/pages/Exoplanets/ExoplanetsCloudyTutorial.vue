<template>
  <ExoplanetsLayout>
    <template #challenge-tab>
      <ChallengeCard remove-padding>
        <div class="pt-3 px-3">
          <InstructionHeader>
            Tutorial: Clear, Cloudy, or Hazy?
          </InstructionHeader>
          <InstructionRow row-type="Tool">
            How do the models predict that different atmospheric conditions
            affect an exoplanet spectrum?
          </InstructionRow>
          <InstructionRow row-type="Notebook">
            Once you’ve completed the tutorial, go to the
            <em>Tutorial: Modeling Exoplanet Atmospheres</em> section and answer
            the following questions:
            <template #steps>
              <InstructionStep>
                Clear vs Cloudy: How would you compare the width and depth of
                the absorption features in the Clear Hot Jupiter Model vs the
                predicted model for a Cloudy Hot Jupiter? How might you explain
                why clouds could cause this difference?
              </InstructionStep>
              <InstructionStep>
                Hazy vs Clear: How would you compare the overall slope of the
                spectrum (from shorter to longer wavelengths) in the Hazy Hot
                Jupiter Model vs the predicted model for a Clear Hot Jupiter?
              </InstructionStep>
            </template>
          </InstructionRow>
        </div>
        <div class="rounded-bottom-4 bg-gen-black">
          <img
            src="/src/assets/Clouds_Image_W500.png"
            class="d-block mx-auto"
          />
        </div>
      </ChallengeCard>
    </template>
    <template #tool-col>
      <ToolControlGroup
        v-model:zoom="zoom"
        show-zoom
        :disabled="tutorialState !== 'nextSection'"
      >
        <template #top-tool>
          <ToolCard
            title="Spectrum 1"
            :custom-metadata="exoplanetMetadataList"
            :spectrum-picker-placeholder="null"
          >
            <div
              ref="widthDepthAnchor"
              class="position-absolute"
              style="bottom: 30px; left: 300px"
            ></div>
            <ExoCloudyTutPopoverWidthDepth :anchor-elem="widthDepthAnchor" />
          </ToolCard>
        </template>
        <template #bottom-tool>
          <ToolCard
            title="Spectrum 2"
            :custom-metadata="atomsAndMoleculesList"
          />
        </template>
      </ToolControlGroup>
      <LeftRightGroup v-if="tutorialState === 'nextSection'" class="mt-5">
        <template #left>
          <NextPrevButton direction="prev" @click="replayResetZoom" light>
            replay tutorial
          </NextPrevButton>
        </template>
        <template #right>
          <NextPrevButton direction="next" to="wasp-17b" light>
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
import { useExoplanetsCloudyTutorialStateMachine } from '@/utils/tutorialUtils';
import { ref, useTemplateRef } from 'vue';

useSpecLabHead('Cloudy/Hazy skies', 'Exoplanets');

const widthDepthAnchor = useTemplateRef('widthDepthAnchor');

// This is where the feature labels are in the right spot.
const FEATURES_ZOOM = 41;
const zoom = ref(FEATURES_ZOOM);

const { tutorialState, goToNext, replay } =
  useExoplanetsCloudyTutorialStateMachine();
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
