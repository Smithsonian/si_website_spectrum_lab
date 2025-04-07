<template>
  <ExoplanetsLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <InstructionHeader>
          Tutorial: clear exoplanet atmospheres
        </InstructionHeader>
        <InstructionRow row-type="Tool">
          Astronomers predict the theoretical spectrum they would expect to
          observe under ideal conditions. Each predictive model is specific to a
          particular set of astmospheric conditions. Let’s explore some of these
          models, starting with the model for clear skies.
        </InstructionRow>
      </ChallengeCard>
    </template>
    <template #tool-col>
      <ToolControlGroup
        show-zoom
        :zoom-default="41"
        :disabled="tutorialState !== 'nextPage'"
      >
        <template #top-tool>
          <ToolCard
            title="Spectrum 1"
            :custom-metadata="exoplanetMetadataList"
            :spectrum-picker-placeholder="null"
          >
            <div
              ref="modelAnchor"
              class="position-absolute"
              style="bottom: 10px; left: 300px"
            ></div>
            <ExoClearTutPopoverModel :anchor-elem="modelAnchor" />
          </ToolCard>
        </template>
        <template v-if="tutorialState === 'nextPage'" #bottom-tool>
          <ToolCard title="Spectrum 2" />
        </template>
      </ToolControlGroup>
      <LeftRightGroup v-if="tutorialState === 'nextPage'">
        <template #left>
          <NextPrevButton direction="prev" @click="replay" light>
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
import { useTemplateRef } from 'vue';

useSpecLabHead('Clear skies', 'Exoplanets');

const modelAnchor = useTemplateRef('modelAnchor');

const { tutorialState, goToNext, replay } =
  useExoplanetsClearTutorialStateMachine();
goToNext();

const clearHotJupiterMetadata = useCustomMetadata(
  'Exoplanet Models',
  'Clear_Hot_Jupiter_Model_Transmission',
  {},
);

const exoplanetMetadataList = clearHotJupiterMetadata
  ? [clearHotJupiterMetadata]
  : [];
</script>
