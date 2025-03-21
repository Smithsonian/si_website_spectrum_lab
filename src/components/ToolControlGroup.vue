<template>
  <slot name="top-tool"></slot>
  <BRow class="mt-1 mb-2 px-3">
    <BCol cols="3">
      <BFormGroup label="Wavelength units" label-for="wavelength-unit">
        <BFormSelect
          id="wavelength-unit"
          v-model="wavelengthUnit"
          :options="wavelengthUnitOptions"
        />
      </BFormGroup>
    </BCol>
    <BCol cols="3">
      <BFormGroup label="Plot type" label-for="plot-type">
        <BFormSelect id="plot-type" v-model="plotType" :options="plotOptions" />
      </BFormGroup>
    </BCol>
    <BCol v-if="showNormalizePicker" cols="2">
      <BFormGroup label="Normalize?" label-for="normalize">
        <BFormRadioGroup
          id="normalize"
          v-model="normalize"
          :options="normalizeOptions"
        />
      </BFormGroup>
    </BCol>
    <BCol v-if="showZoom" cols="4">
      <div class="position-relative">
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
        <TempTutPopupSlider />
      </div>
    </BCol>
  </BRow>
  <!-- Div needed to clear the row -->
  <div>
    <slot name="bottom-tool"></slot>
  </div>
</template>

<script setup lang="ts">
import {
  wavelengthUnitKey,
  normalizeKey,
  showLinesKey,
  zoomKey,
  type WavelengthUnit,
  type NormalizeSetting,
} from '@/injectionKeys';
import { useCursorMicrons } from '@/utils/chartUtils';
import { computed, provide, ref } from 'vue';

const { showNormalizePicker = false, showZoom = false } = defineProps<{
  showNormalizePicker?: boolean;
  showZoom?: boolean;
}>();
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

const normalize = ref<NormalizeSetting>('all');
const normalizeOptions: { text: string; value: NormalizeSetting }[] = [
  { text: 'All', value: 'all' },
  { text: 'Visible', value: 'visible' },
  { text: 'None', value: 'none' },
];
provide(normalizeKey, normalize);

const wavelengthUnit = ref<WavelengthUnit>('Microns');
const wavelengthUnitOptions: { text: string; value: WavelengthUnit }[] = [
  { text: 'Microns', value: 'Microns' },
  { text: 'Nanometers', value: 'Nanometers' },
  { text: 'Angstrom', value: 'Angstrom' },
  { text: 'Electron volts', value: 'Electron volts' },
];
provide(wavelengthUnitKey, wavelengthUnit);
// Instantiate this at this level so both charts can share it
useCursorMicrons();
</script>
