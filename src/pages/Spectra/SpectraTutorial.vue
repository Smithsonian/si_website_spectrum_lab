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
        <ToolCard ref="topToolRef" title="Draw a Spectrum" draw-only />
        <SpecTutPopupTool :anchor-elem="topToolRef" />
      </div>
      <div class="my-5"></div>
      <div v-if="tutorialState === 'secondTool'" class="position-relative">
        <ToolCard
          ref="bottomToolRef"
          title="Second spectrum"
          :custom-metadata="bulbMetadataList"
          :spectrum-picker-placeholder="null"
          default-spectrum="Fluorescent_Bulb"
        />
        <SpecTutPopupSecondTool :anchor-elem="bottomToolRef" />
      </div>
    </template>
  </SpectraLayout>
</template>

<script setup lang="ts">
import { useAllMetadata } from '@/utils/metadataUtils';
import { useSpectraTutorialStateMachine } from '@/utils/tutorialUtils';
import { useTemplateRef, type ComponentPublicInstance } from 'vue';

const topToolRef = useTemplateRef<ComponentPublicInstance>('topToolRef');
const bottomToolRef = useTemplateRef<ComponentPublicInstance>('bottomToolRef');

// Initialize here for children
const { tutorialState, goToNext } = useSpectraTutorialStateMachine();
goToNext();

const allMetadata = useAllMetadata();

const bulbMetadataList = allMetadata['Lamps'];
</script>
