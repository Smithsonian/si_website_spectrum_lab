<template>
  <BRow>
    <ChallengeCol />
    <BCol>
      <ToolCard title="Spectrum 1" :normalize="normalize" />
      <BRow class="mt-1 mb-2 px-3">
        <BCol cols="3">
          <BFormGroup label="Cursor units" label-for="cursor-unit">
            <BFormSelect
              id="cursor-unit"
              v-model="cursorUnit"
              :options="cursorUnitOptions"
            />
          </BFormGroup>
        </BCol>
        <BCol cols="3">
          <BFormGroup label="Plot type" label-for="plot-type">
            <BFormSelect
              id="plot-type"
              v-model="plotType"
              :options="plotOptions"
            />
          </BFormGroup>
        </BCol>
        <BCol cols="2">
          <BFormGroup label="Normalize?" label-for="normalize">
            <BFormRadioGroup
              id="normalize"
              v-model="normalize"
              :options="normalizeOptions"
            />
          </BFormGroup>
        </BCol>
        <BCol cols="4">
          <BFormGroup :label="`Zoom: ${zoomPercent}%`" label-for="zoom">
            <BFormInput
              id="zoom"
              v-model="zoomPercent"
              type="range"
              min="2"
              max="200"
              class="zoom-slider"
            />
          </BFormGroup>
        </BCol>
      </BRow>
      <div>
        <ToolCard
          title="Spectrum 2"
          chart-position="top"
          :normalize="normalize"
        />
      </div>
    </BCol>
  </BRow>
</template>

<script setup lang="ts">
import {
  createRefWithUpdater,
  cursorMicronsKey,
  cursorUnitKey,
  showLinesKey,
  zoomKey,
  type CursorUnit,
} from '@/injectionKeys';
import { useHead } from '@unhead/vue';
import { BFormInput, BFormSelect } from 'bootstrap-vue-next';
import { computed, provide, ref } from 'vue';

useHead({
  title: 'Spectrum Lab | Playground',
});

const zoomPercent = ref(100);
const zoom = computed(() => zoomPercent.value / 100);
provide(zoomKey, zoom);

type PlotType = 'line' | 'scatter';
const plotType = ref<PlotType>('line');
const plotOptions: { text: string; value: PlotType }[] = [
  { text: 'Line chart', value: 'line' },
  { text: 'Scatter plot', value: 'scatter' },
];
const showLines = computed(() => plotType.value === 'line');
provide(showLinesKey, showLines);

const normalize = ref(true);
const normalizeOptions: { text: string; value: boolean }[] = [
  { text: 'Yes', value: true },
  { text: 'No', value: false },
];

const cursorUnit = ref<CursorUnit>('Microns');
const cursorUnitOptions: { text: string; value: CursorUnit }[] = [
  { text: 'Microns', value: 'Microns' },
  { text: 'Nanometers', value: 'Nanometers' },
  { text: 'Angstrom', value: 'Angstrom' },
  { text: 'Gigahertz', value: 'Gigahertz' },
  { text: 'Electron volt', value: 'Electron volt' },
];
provide(cursorUnitKey, cursorUnit);
const cursorMicronsRefWithUpdater = createRefWithUpdater(null);
provide(cursorMicronsKey, cursorMicronsRefWithUpdater);
</script>

<style>
.zoom-slider::-webkit-slider-runnable-track {
  background-color: var(--bs-gray-400);
}
.zoom-slider::-moz-range-track {
  background-color: var(--bs-gray-400);
}
</style>
