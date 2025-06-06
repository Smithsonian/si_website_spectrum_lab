<template>
  <SpectraLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <InstructionHeader>Guide to the Spectrum Tool</InstructionHeader>
        <InstructionRow row-type="Introduction">
          Now that you have viewed some different sources with your
          spectroscope, we introduce the online Spectrum Tool, which is designed
          to connect what you see in a spectroscope with graphs of spectra that
          scientists use to represent light sources.
        </InstructionRow>
        <InstructionRow row-type="Tutorial">
          Follow the tutorial (below) for an introduction to the Spectrum Tool.
        </InstructionRow>
      </ChallengeCard>
    </template>
    <template #tool-col>
      <ToolControlGroup :control-names="[]">
        <template #top-tool>
          <div class="position-relative">
            <ToolCard ref="topToolRef" draw-only />
            <SpecTutPopupTool :anchor-elem="topToolRef" />
          </div>
        </template>
        <template v-if="showSecondTool" #bottom-tool>
          <div class="position-relative my-5">
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
        </template>
      </ToolControlGroup>
      <LeftRightGroup v-if="tutorialState === 'nextSection'">
        <template #left>
          <NextPrevButton direction="prev" @click="replay" light>
            replay tutorial
          </NextPrevButton>
        </template>
        <template #right>
          <NextPrevButton direction="next" to="draw-spectra" light>
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
