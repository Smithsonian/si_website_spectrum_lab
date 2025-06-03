<template>
  <ExoplanetsLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <template #top>
          <InstructionHeader>
            Tutorial: Cloudy/hazy atmospheres
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
        </template>
        <template #middle>
          <div class="rounded-bottom-4 bg-gen-black">
            <img
              src="/src/assets/Clouds_Image_W500.png"
              class="d-block mx-auto"
            />
          </div>
        </template>
      </ChallengeCard>
    </template>
    <template #tool-col>
      <ToolControlGroup
        v-model:zoom="zoom"
        :disabled="tutorialState !== 'nextSection'"
      >
        <template #top-tool>
          <ToolCard
            :custom-metadata="topMetadataList"
            default-spectrum="Clear_Hot_Jupiter_Model_Transmission"
            :spectrum-picker-placeholder="null"
          >
            <div
              ref="widthDepthAnchor"
              class="position-absolute"
              style="bottom: 30px; left: 300px"
            ></div>
            <ExoCloudyTutPopoverWidthDepth :anchor-elem="widthDepthAnchor" />
            <ExoCloudyTutOverlayWidthDepthClear
              v-if="
                tutorialState === 'widthDepth' ||
                tutorialState === 'dampenedAbsorption'
              "
            />
            <ExoCloudyTutOverlayShapeSlopeClear
              v-if="
                tutorialState === 'cloudShapeSlope' ||
                tutorialState === 'hazeShapeSlope'
              "
            />
          </ToolCard>
        </template>
        <template #bottom-tool>
          <ToolCard
            :custom-metadata="bottomMetadataList"
            :spectrum-picker-placeholder="null"
            :default-spectrum="
              tutorialState === 'nextSection'
                ? 'Hazy_Hot_Jupiter_Model_Transmission'
                : null
            "
          >
            <div
              ref="cloudShapeSlopeAnchor"
              class="position-absolute"
              style="bottom: 90px; left: 300px"
            ></div>
            <ExoCloudyTutPopoverShapeSlopeCloudy
              :anchor-elem="cloudShapeSlopeAnchor"
            />
            <ExoCloudyTutOverlayWidthDepthCloudy
              v-if="tutorialState === 'widthDepth'"
            />
            <ExoCloudyTutOverlayShapeSlopeCloudy
              v-if="tutorialState === 'cloudShapeSlope'"
            />
            <div
              ref="hazeShapeSlopeAnchor"
              class="position-absolute"
              style="bottom: 90px; left: 350px"
            ></div>
            <ExoCloudyTutPopoverShapeSlopeHazy
              :anchor-elem="hazeShapeSlopeAnchor"
            />
            <ExoCloudyTutOverlayShapeSlopeHazy
              v-if="tutorialState === 'hazeShapeSlope'"
            />
            <div
              ref="hazeWidthDepthAnchor"
              class="position-absolute"
              style="bottom: 70px; left: 400px"
            ></div>
            <ExoCloudyTutPopoverWidthDepthHazy
              :anchor-elem="hazeWidthDepthAnchor"
            />
            <ExoCloudyTutOverlayWidthDepthHazy
              v-if="tutorialState === 'dampenedAbsorption'"
            />
          </ToolCard>
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
import {
  useCustomMetadata,
  type SpectrumMetadata,
} from '@/utils/metadataUtils';
import { useExoplanetsCloudyTutorialStateMachine } from '@/utils/tutorialUtils';
import { computed, ref, useTemplateRef } from 'vue';

useSpecLabHead('Cloudy/Hazy skies', 'Exoplanets');

const widthDepthAnchor = useTemplateRef('widthDepthAnchor');
const cloudShapeSlopeAnchor = useTemplateRef('cloudShapeSlopeAnchor');
const hazeShapeSlopeAnchor = useTemplateRef('hazeShapeSlopeAnchor');
const hazeWidthDepthAnchor = useTemplateRef('hazeWidthDepthAnchor');

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

const clearMetadata = useCustomMetadata(
  'Exoplanet Models',
  'Clear_Hot_Jupiter_Model_Transmission',
  {},
);

const clearMetadataList = clearMetadata ? [clearMetadata] : [];

const cloudyMetadata = useCustomMetadata(
  'Exoplanet Models',
  'Cloudy_Hot_Jupiter_Model_Transmission',
  {},
);

const cloudyMetadataList = cloudyMetadata ? [cloudyMetadata] : [];

const hazyMetadata = useCustomMetadata(
  'Exoplanet Models',
  'Hazy_Hot_Jupiter_Model_Transmission',
  {},
);

const hazyMetadataList = hazyMetadata ? [hazyMetadata] : [];

const allAtmospheresList = [
  ...clearMetadataList,
  ...cloudyMetadataList,
  ...hazyMetadataList,
];

const topMetadataList = computed((): SpectrumMetadata[] => {
  if (tutorialState.value === 'nextSection') {
    return allAtmospheresList;
  }
  return clearMetadataList;
});

const bottomMetadataList = computed((): SpectrumMetadata[] => {
  if (
    tutorialState.value === 'widthDepth' ||
    tutorialState.value === 'cloudShapeSlope'
  ) {
    return cloudyMetadataList;
  }
  if (tutorialState.value === 'nextSection') {
    return allAtmospheresList;
  }
  return hazyMetadataList;
});
</script>
