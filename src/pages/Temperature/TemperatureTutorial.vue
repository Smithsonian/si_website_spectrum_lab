<template>
  <TemperatureLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <h2>Tutorial here</h2>
      </ChallengeCard>
    </template>
    <template #tool-col>
      <ToolCard title="Spectrum title" />
    </template>
  </TemperatureLayout>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue';

useHead({
  title: 'Spectrum Lab | Session 3 Tutorial',
});
</script>
