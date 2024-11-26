<template>
  <Module3Layout>
    <template #challenge-tab>
      <ChallengeCard>
        <h2>Tutorial here</h2>
      </ChallengeCard>
    </template>
    <template #tool-col>
      <ToolCard title="Spectrum title" />
    </template>
  </Module3Layout>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue';

useHead({
  title: 'Spectrum Lab | Session 3 Tutorial',
});
</script>
