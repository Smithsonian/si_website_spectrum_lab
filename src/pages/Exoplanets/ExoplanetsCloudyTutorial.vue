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
            :custom-metadata="clearMetadataList"
            :spectrum-picker-placeholder="null"
          >
            <div
              ref="widthDepthAnchor"
              class="position-absolute"
              style="bottom: 30px; left: 300px"
            ></div>
            <ExoCloudyTutPopoverWidthDepth :anchor-elem="widthDepthAnchor" />
            <ExoCloudyTutOverlayWidthDepthClear
              v-if="tutorialState === 'widthDepth'"
            />
            <div
              ref="cloudShapeSlopeAnchor"
              class="position-absolute"
              style="bottom: 70px; left: 200px"
            ></div>
            <ExoCloudyTutPopoverShapeSlopeCloudy
              :anchor-elem="cloudShapeSlopeAnchor"
            />
            <ExoCloudyTutOverlayShapeSlopeClear
              v-if="tutorialState === 'cloudShapeSlope'"
            />
          </ToolCard>
        </template>
        <template #bottom-tool>
          <ToolCard
            title="Spectrum 2"
            :custom-metadata="cloudyMetadataList"
            :spectrum-picker-placeholder="null"
          >
            <ExoCloudyTutOverlayWidthDepthCloudy
              v-if="tutorialState === 'widthDepth'"
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
import { useCustomMetadata } from '@/utils/metadataUtils';
import { useExoplanetsCloudyTutorialStateMachine } from '@/utils/tutorialUtils';
import { ref, useTemplateRef } from 'vue';

useSpecLabHead('Cloudy/Hazy skies', 'Exoplanets');

const widthDepthAnchor = useTemplateRef('widthDepthAnchor');
const cloudShapeSlopeAnchor = useTemplateRef('cloudShapeSlopeAnchor');

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
</script>
