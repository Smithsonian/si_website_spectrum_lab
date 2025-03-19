<template>
  <ChallengeToolLayout>
    <template #challenge-col>
      <ChallengeCard>
        <h2>Welcome to the Playground</h2>
        <p>
          This Spectrum Tool will help you connect the visual color display of a
          light source's spectrum&mdash;like the color image you see in a
          spectroscope&mdash;with a graph of the light's spectrum.
        </p>
      </ChallengeCard>
    </template>
    <template #tool-col>
      <ToolControlGroup :show-normalize-picker="true" :show-zoom="true">
        <template #top-tool>
          <ToolCard title="Spectrum 1" :show-file-picker="true" />
        </template>
        <template #bottom-tool>
          <ToolCard
            title="Spectrum 2"
            chart-position="top"
            :show-file-picker="true"
          />
        </template>
      </ToolControlGroup>
    </template>
  </ChallengeToolLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';

useSpecLabHead('Playground');
</script>

<style>
.zoom-slider::-webkit-slider-runnable-track {
  background-color: var(--bs-gray-400);
}
.zoom-slider::-moz-range-track {
  background-color: var(--bs-gray-400);
}
</style>
