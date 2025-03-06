<template>
  <TemperatureLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <h2>Challenge 1 here</h2>
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
  title: 'Spectrum Lab | Temperature: Predictions',
});
</script>
