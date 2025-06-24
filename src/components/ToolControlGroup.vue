<template>
  <TopToolContext :has-bottom-tool="!!$slots['bottom-tool']">
    <slot name="top-tool"></slot>
  </TopToolContext>
  <BRow class="mt-1 mb-2 gy-2">
    <BCol v-if="controlNames.includes('plotType')" cols="6" xl="2">
      <div class="position-relative">
        <BFormGroup
          label-for="plot-type"
          label-class="tool-control-group-label"
        >
          <template #label>
            <img
              src="/src/assets/SVG/plot_type.svg"
              class="tool-control-group-label-icon"
            />
            <span class="ms-2">Plot type</span>
          </template>
          <BFormSelect
            ref="plotTypeDropdown"
            id="plot-type"
            size="sm"
            v-model="plotType"
            :disabled="disabled"
            :options="plotOptions"
            class="text-lowercase"
          />
        </BFormGroup>
        <ControlsTutPopupPlotType :anchor-elem="plotTypeDropdown" />
      </div>
    </BCol>
    <BCol v-if="controlNames.includes('zoom')" cols="6" xl="4">
      <div class="position-relative">
        <BFormGroup label-for="zoom" label-class="tool-control-group-label">
          <template #label>
            <img
              src="/src/assets/SVG/width.svg"
              class="tool-control-group-label-icon"
            />
            <span class="ms-2">Plot width: {{ zoomPercent }}%</span>
          </template>
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
        <ControlsTutPopupSlider :anchor-elem="zoomElem" />
      </div>
    </BCol>
    <BCol cols="6" xl="3">
      <div v-if="controlNames.includes('units')" class="position-relative">
        <BFormGroup
          label="Wavelength units"
          label-for="wavelength-unit"
          label-class="tool-control-group-label"
        >
          <template #label>
            <img
              src="/src/assets/SVG/waveform.svg"
              class="tool-control-group-label-icon"
            />
            <FontAwesomeIcon :icon="['fas', 'bolt']" />
            <span class="ms-2">Units</span>
          </template>
          <BFormSelect
            ref="unitDropdown"
            id="wavelength-unit"
            size="sm"
            v-model="wavelengthUnit"
            :disabled="disabled"
            :options="wavelengthUnitOptions"
            class="text-lowercase"
          />
        </BFormGroup>
        <WavelengthTutPopoverUnits :anchor-elem="unitDropdown" />
        <ControlsTutPopupWavelengthUnits :anchor-elem="unitDropdown" />
      </div>
    </BCol>
    <BCol v-if="controlNames.includes('normalize')" cols="6" xl="3">
      <BFormGroup label-for="normalize" class="tool-control-group-label">
        <template #label>
          <img
            src="/src/assets/SVG/normalize.svg"
            class="tool-control-group-label-icon"
          />
          <span class="ms-2">Normalize data</span>
        </template>
        <BFormRadioGroup
          id="normalize"
          class="text-lowercase"
          size="sm"
          v-model="normalize"
          :disabled="disabled"
          :options="normalizeOptions"
        />
      </BFormGroup>
    </BCol>
  </BRow>
  <!-- Div needed to clear the row -->
  <div>
    <BottomToolContext>
      <slot name="bottom-tool"></slot>
    </BottomToolContext>
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

type ToolControlName = 'units' | 'plotType' | 'normalize' | 'zoom';

withDefaults(
  defineProps<{
    controlNames?: ToolControlName[];
    disabled?: boolean;
  }>(),
  { controlNames: () => ['units', 'plotType', 'zoom'], disabled: false },
);

const zoomElem = useTemplateRef<ComponentPublicInstance>('zoomElem');
const unitDropdown = useTemplateRef<ComponentPublicInstance>('unitDropdown');
const plotTypeDropdown =
  useTemplateRef<ComponentPublicInstance>('plotTypeDropdown');

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

const wavelengthUnit = defineModel<WavelengthUnit>('units', {
  default: 'Microns',
});
const wavelengthUnitOptions: { text: string; value: WavelengthUnit }[] = [
  { text: 'Microns', value: 'Microns' },
  { text: 'Nanometers', value: 'Nanometers' },
  { text: 'Ångstroms', value: 'Ångstroms' },
  { text: 'Electron volts', value: 'Electron volts' },
];
provide(wavelengthUnitKey, wavelengthUnit);
// Instantiate this at this level so both charts can share it
useCursorMicrons();
</script>

<style>
.tool-control-group-label {
  text-transform: uppercase;
  font-size: 12px;
  color: var(--slr-light-grey);
}

.tool-control-group-label-icon {
  height: 12px;
}

/* Larger select but in the same vertical space as the others */
.tool-control-group-label .form-check {
  padding-left: 1.8em;
}
.tool-control-group-label .form-check-input {
  height: 18px;
  width: 18px;
  margin-top: 2px;
  margin-left: -1.8em;
}

input.zoom-slider:disabled {
  /* Bootstrap makes this none, which makes sense, except that messes up
  cursor: not-allowed from taking effect. */
  pointer-events: auto;
}

input.zoom-slider::-webkit-slider-runnable-track {
  background-color: var(--bs-gray-400);
}
input.zoom-slider[disabled]::-webkit-slider-runnable-track {
  cursor: not-allowed;
}
input.zoom-slider::-moz-range-track {
  background-color: var(--bs-gray-400);
}
input.zoom-slider[disabled]::-moz-range-track {
  cursor: not-allowed;
}
input.zoom-slider[disabled]::-moz-range-progress {
  cursor: not-allowed;
}
input.zoom-slider[disabled]::-moz-range-thumb {
  cursor: not-allowed;
}
</style>
