<template>
  <slot name="top-tool"></slot>
  <BRow class="mt-1 mb-2 px-3">
    <BCol cols="3">
      <BFormGroup label="Wavelength units" label-for="wavelength-unit">
        <BFormSelect
          id="wavelength-unit"
          v-model="wavelengthUnit"
          :disabled="disabled"
          :options="wavelengthUnitOptions"
        />
      </BFormGroup>
    </BCol>
    <BCol cols="3">
      <BFormGroup label="Plot type" label-for="plot-type">
        <BFormSelect
          id="plot-type"
          v-model="plotType"
          :disabled="disabled"
          :options="plotOptions"
        />
      </BFormGroup>
    </BCol>
    <BCol v-if="showNormalizePicker" cols="2">
      <BFormGroup label="Normalize?" label-for="normalize">
        <BFormRadioGroup
          id="normalize"
          v-model="normalize"
          :disabled="disabled"
          :options="normalizeOptions"
        />
      </BFormGroup>
    </BCol>
    <BCol v-if="showZoom" cols="4">
      <div class="position-relative">
        <BFormGroup :label="`Zoom: ${zoomPercent}%`" label-for="zoom">
          <BFormInput
            ref="zoomElem"
            id="zoom"
            v-model="zoomPercent"
            :disabled="disabled"
            type="range"
            min="2"
            max="200"
            class="zoom-slider"
          />
        </BFormGroup>
        <TempTutPopupSlider :anchor-elem="zoomElem" />
      </div>
    </BCol>
  </BRow>
  <!-- Div needed to clear the row -->
  <div>
    <slot name="bottom-tool"></slot>
  </div>
</template>

<script setup lang="ts">
import type { PlotType } from '@/constants';
import {
  wavelengthUnitKey,
  normalizeKey,
  showLinesKey,
  zoomKey,
  type WavelengthUnit,
  type NormalizeSetting,
} from '@/injectionKeys';
import { useCursorMicrons } from '@/utils/chartUtils';
import {
  computed,
  provide,
  ref,
  useTemplateRef,
  type ComponentPublicInstance,
} from 'vue';

const {
  showNormalizePicker = false,
  showZoom = false,
  disabled = false,
} = defineProps<{
  showNormalizePicker?: boolean;
  showZoom?: boolean;
  disabled?: boolean;
}>();

const zoomElem = useTemplateRef<ComponentPublicInstance>('zoomElem');

const zoomPercent = defineModel<number>('zoom', { default: 100 });
const zoom = computed(() => zoomPercent.value / 100);
provide(zoomKey, zoom);

const plotType = defineModel<PlotType>('plotType', { default: 'line' });
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
