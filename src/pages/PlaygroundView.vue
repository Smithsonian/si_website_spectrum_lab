<template>
  <BRow>
    <ChallengeCol />
    <BCol>
      <ToolCard :zoom="zoom" :show-lines="showLines" />
      <BRow class="mt-2">
        <BCol cols="4">
          <BFormGroup label="Plot type">
            <BFormSelect v-model="plotType" :options="plotOptions" />
          </BFormGroup>
        </BCol>
        <BCol cols="6">
          <BFormGroup :label="`Zoom: ${zoomPercent}%`">
            <BFormInput
              v-model="zoomPercent"
              type="range"
              min="2"
              max="200"
              class="zoom-slider"
            />
          </BFormGroup>
        </BCol>
      </BRow>
    </BCol>
  </BRow>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue';
import { BFormInput, BFormSelect } from 'bootstrap-vue-next';
import { computed, ref } from 'vue';

useHead({
  title: 'Spectrum Lab | Playground',
});

const zoomPercent = ref(100);
const zoom = computed(() => zoomPercent.value / 100);
type PlotType = 'line' | 'scatter';
const plotType = ref<PlotType>('line');
const plotOptions: { text: string; value: PlotType }[] = [
  { text: 'Line chart', value: 'line' },
  { text: 'Scatter plot', value: 'scatter' },
];
const showLines = computed(() => plotType.value === 'line');
</script>

<style>
.zoom-slider::-webkit-slider-runnable-track {
  background-color: var(--bs-gray-400);
}
.zoom-slider::-moz-range-track {
  background-color: var(--bs-gray-400);
}
</style>
