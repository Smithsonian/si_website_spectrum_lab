<template>
  <ChallengeToolLayout>
    <template #challenge-col>
      <ChallengeCard>
        <InstructionHeader>Test different icon alignments</InstructionHeader>
        <InstructionRow
          v-for="rowType in rowTypes"
          :key="rowType"
          :row-type="rowType"
        >
          There would normally be instructions here.
        </InstructionRow>
      </ChallengeCard>
    </template>
  </ChallengeToolLayout>
</template>

<script setup lang="ts">
import type { InstructionRowType } from '@/constants';
import { useSpecLabHead } from '@/utils/locationUtils';

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
];
</script>
