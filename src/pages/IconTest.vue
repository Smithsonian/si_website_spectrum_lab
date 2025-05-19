<template>
  <ChallengeToolLayout>
    <template #challenge-col>
      <ChallengeCard>
        <InstructionHeader>Test different icon alignments</InstructionHeader>
        <div class="position-relative">
          <InstructionRow
            v-for="rowType in rowTypes"
            :key="rowType"
            :row-type="rowType"
          >
            There would normally be instructions here.
          </InstructionRow>
          <div
            v-if="showGuidelines"
            class="position-absolute h-100 icon-test-left-border"
            style="top: 0; left: 0"
          ></div>
          <div
            v-if="showGuidelines"
            class="position-absolute h-100 icon-test-left-border"
            style="top: 0; left: -15px"
          ></div>
          <div
            v-if="showGuidelines"
            class="position-absolute h-100 icon-test-left-border"
            style="top: 0; left: -35px"
          ></div>
        </div>
        <BButton @click="toggleShow"
          >{{ showGuidelines ? 'Hide' : 'Show' }} guidelines</BButton
        >
      </ChallengeCard>
    </template>
  </ChallengeToolLayout>
</template>

<script setup lang="ts">
import type { InstructionRowType } from '@/constants';
import { useSpecLabHead } from '@/utils/locationUtils';
import { ref } from 'vue';

useSpecLabHead('Icon test');

const rowTypes: InstructionRowType[] = [
  'Intro',
  'Tutorial',
  'Notebook',
  'Tool',
  'Video',
  'Investigate',
  'Art',
  'Simulation',
  'Slideshow',
];

const showGuidelines = ref(true);

const toggleShow = () => {
  showGuidelines.value = !showGuidelines.value;
};
</script>

<style>
.icon-test-left-border {
  border-left: 1px dashed rgb(255 255 255 / 50%);
}
</style>
