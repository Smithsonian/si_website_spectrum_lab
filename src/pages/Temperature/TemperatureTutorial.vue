<template>
  <TemperatureLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <InstructionHeader>Tutorial</InstructionHeader>
        <InstructionRow rowType="Tutorial">
          Follow the tutorial (below) to learn how to use the spectrum tool and
          review key concepts.
        </InstructionRow>
        <InstructionRow rowType="Notebook">
          In the <em>Temperature, Tutorial</em> section, answer these questions:
          <template #steps>
            <InstructionStep>
              What is the relationship between the wavelength and energy of
              light?
            </InstructionStep>
            <InstructionStep>
              Why might it be useful to display a spectrum graph as a scatter
              plot instead of a line chart?
            </InstructionStep>
            <InstructionStep>
              What parts of the electromagnetic spectrum are not displayed on
              the Spectrum Tool?
            </InstructionStep>
          </template>
        </InstructionRow>
      </ChallengeCard>
    </template>
    <template #tool-col>
      <ToolControlGroup show-zoom>
        <template #top-tool>
          <ToolCard
            :custom-metadata="marsMetadataList"
            :spectrum-picker-placeholder="null"
          >
            <div
              ref="graphTutAnchor"
              class="position-absolute"
              style="bottom: 25px; left: 200px; width: 0; height: 0"
            ></div>
            <TempTutPopupSpectrumGraph :anchor-elem="graphTutAnchor" />
          </ToolCard>
        </template>
      </ToolControlGroup>
      <LeftRightGroup class="mt-5">
        <template #left>
          <NextPrevButton
            v-if="tutorialState === 'nextSection'"
            direction="prev"
            @click="replay"
          >
            replay tutorial
          </NextPrevButton>
        </template>
        <template #right>
          <NextPrevButton
            v-if="tutorialState === 'nextSection'"
            direction="next"
            to="predictions"
          >
            next section
          </NextPrevButton>
        </template>
      </LeftRightGroup>
    </template>
  </TemperatureLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';
import { useCustomMetadata } from '@/utils/metadataUtils';
import { useTempTutorialStateMachine } from '@/utils/tutorialUtils';
import { useTemplateRef } from 'vue';

useSpecLabHead('Tutorial', 'Temperature');

const graphTutAnchor = useTemplateRef('graphTutAnchor');

const marsMetadata = useCustomMetadata('Planets', 'Mars_Reflection', {});
const marsMetadataList = marsMetadata ? [marsMetadata] : [];

// Initialize the tutorial state and start the first popup
const { tutorialState, goToNext, replay } = useTempTutorialStateMachine();
goToNext();
</script>
