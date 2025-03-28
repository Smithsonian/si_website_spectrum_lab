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
    </template>
  </SpectraLayout>
</template>

<script setup lang="ts">
import { useSpectraTutorialStateMachine } from '@/utils/tutorialUtils';
import { useTemplateRef, type ComponentPublicInstance } from 'vue';

const topToolRef = useTemplateRef<ComponentPublicInstance>('topToolRef');

// Initialize here for children
const { goToNext } = useSpectraTutorialStateMachine();
goToNext();
</script>
