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
      <ToolControlGroup>
        <template #top-tool>
          <ToolCard title="Draw a Spectrum" draw-only />
        </template>
        <template #bottom-tool>
          <ToolCard title="Draw a Spectrum" draw-only />
        </template>
      </ToolControlGroup>
      <div v-if="tutorialState === 'nextPage'" class="position-relative mb-5">
        <ToolCard
          ref="bottomToolRef"
          title="Second spectrum"
          :custom-metadata="bulbMetadataList"
          :spectrum-picker-placeholder="null"
          default-spectrum="Fluorescent_Bulb"
        />
      </div>
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
import { useAllMetadata } from '@/utils/metadataUtils';
import { useExoplanetsClearTutorialStateMachine } from '@/utils/tutorialUtils';

useSpecLabHead('Clear skies', 'Exoplanets');

const { tutorialState, goToNext, replay } =
  useExoplanetsClearTutorialStateMachine();
goToNext();

const allMetadata = useAllMetadata();

const bulbMetadataList = allMetadata['Lamps'];
</script>
