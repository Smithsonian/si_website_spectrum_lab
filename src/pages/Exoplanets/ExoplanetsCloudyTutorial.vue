<template>
  <ExoplanetsLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <InstructionHeader>
          Modeling Cloudy &amp; Hazy Atmospheres
        </InstructionHeader>
        <InstructionRow row-type="Tool">
          <template #steps>
            <InstructionStep>
              View the tutorial below, which describes 2 different models for a
              Hot Jupiter exoplanet. The first model has a
              <span class="challenge-bold">cloudy</span> atmosphere. The second
              has a <span class="challenge-bold">hazy</span> atmosphere. They
              both differ from the model for a
              <span class="challenge-bold">clear</span> atmosphere in two
              distinct ways.
            </InstructionStep>
            <InstructionStep>
              After the tutorial is complete, you can compare the spectra for
              these three models by using the dropdown menus under
              <span class="challenge-tool-label">Source 1</span> and
              <span class="challenge-tool-label">Source 2</span>.
            </InstructionStep>
          </template>
        </InstructionRow>
        <InstructionRow row-type="Notebook">
          As you view the tutorial, answer these questions in your Notebook.
          <template #steps>
            <InstructionStep>
              <u><span class="challenge-bold">Clear vs Cloudy</span>:</u> How
              would you compare the
              <span class="challenge-bold">width</span> and
              <span class="challenge-bold">depth</span> of the absorption
              features in the Clear Hot Jupiter Model vs the predicted model for
              a Cloudy Hot Jupiter? How might you explain why clouds could cause
              this difference?
            </InstructionStep>
            <InstructionStep>
              <u><span class="challenge-bold">Clear vs Hazy</span>:</u> How
              would you compare the
              <span class="challenge-bold">overall slope of the spectrum</span>
              (from shorter to longer wavelengths) in the Clear Hot Jupiter
              Model vs the predicted model for Hazy Hot Jupiter?
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
            :custom-metadata="topMetadataList"
            default-spectrum="Clear_Hot_Jupiter_Model_Transmission"
            :spectrum-picker-placeholder="null"
          >
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
              ref="widthDepthAnchor"
              class="position-absolute"
              style="bottom: 30px; left: 300px"
            ></div>
            <ExoCloudyTutPopoverWidthDepth :anchor-elem="widthDepthAnchor" />
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
          <NextPrevButton direction="prev" to="clear-skies" light>
            previous section
          </NextPrevButton>
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
