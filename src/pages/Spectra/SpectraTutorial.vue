<template>
  <SpectraLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <InstructionHeader>Tutorial</InstructionHeader>
        <InstructionRow row-type="Tutorial">
          Follow the tutorial (below) to learn how to use the spectrum tool.
        </InstructionRow>
      </ChallengeCard>
    </template>
    <template #tool-col>
      <div class="position-relative">
        <ToolCard ref="topToolRef" draw-only />
        <SpecTutPopupTool :anchor-elem="topToolRef" />
      </div>
      <div class="my-5"></div>
      <div v-if="showSecondTool" class="position-relative mb-5">
        <BottomToolContext>
          <ToolCard
            ref="bottomToolRef"
            :custom-metadata="bulbMetadataList"
            :spectrum-picker-placeholder="null"
            default-spectrum="Fluorescent_Bulb"
          />
        </BottomToolContext>
        <SpecTutPopupSecondTool :anchor-elem="bottomToolRef" />
      </div>
      <LeftRightGroup v-if="tutorialState === 'nextSection'">
        <template #left>
          <NextPrevButton direction="prev" @click="replay" light>
            replay tutorial
          </NextPrevButton>
        </template>
        <template #right>
          <NextPrevButton direction="next" to="start-drawing" light>
            next section
          </NextPrevButton>
        </template>
      </LeftRightGroup>
    </template>
  </SpectraLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';
import { useAllMetadata } from '@/utils/metadataUtils';
import {
  useSpectraTutorialStateMachine,
  type SpectraTutorialState,
} from '@/utils/tutorialUtils';
import { computed, useTemplateRef, type ComponentPublicInstance } from 'vue';

useSpecLabHead('Tutorial', 'Spectra');

const topToolRef = useTemplateRef<ComponentPublicInstance>('topToolRef');
const bottomToolRef = useTemplateRef<ComponentPublicInstance>('bottomToolRef');

// Initialize here for children
const { tutorialState, goToNext, replay } = useSpectraTutorialStateMachine();
goToNext();

const allMetadata = useAllMetadata();

const bulbMetadataList = allMetadata['Lamps'];

const showSecondTool = computed(() => {
  const showToolStates: SpectraTutorialState[] = [
    'secondTool',
    'dropdown',
    'nextSection',
  ];
  return showToolStates.includes(tutorialState.value);
});
</script>
