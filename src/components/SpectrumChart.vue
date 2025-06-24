<template>
  <div class="spectrum-canvas">
    <div class="d-flex position-relative">
      <div
        class="spectrum-chart-left-axis-label text-uppercase color-slr-light-grey"
      >
        <img
          src="/src/assets/SVG/brightness.svg"
          class="spectrum-chart-brightness-icon"
        />
        Brightness
      </div>
      <SpectrumCursorOverlay>
        <SpectrumRainbow />
        <div class="d-flex">
          <LeftAxis ref="yAxis" />
          <!-- Wrap these to enable overlay -->
          <div
            class="position-relative border-start border-end border-bottom border-sl-light-blue"
          >
            <SpectrumDrawing v-if="spectrumDataSource === 'drawing'" />
            <SpectrumData v-else />
            <!-- Overlay items go in this slot. -->
            <slot></slot>
          </div>
        </div>
        <BottomAxis />
        <div
          ref="xAxisLabel"
          class="ms-4 color-slr-light-grey"
          style="font-size: 12px"
        >
          <span class="me-2">
            <FontAwesomeIcon
              v-if="wavelengthUnit === 'Electron volts'"
              :icon="['fas', 'bolt']"
            />
            <img
              v-else
              src="/src/assets/SVG/waveform.svg"
              style="height: 12px"
            />
          </span>
          <span class="text-uppercase">
            {{ wavelengthUnit === 'Electron volts' ? 'Energy' : 'Wavelength' }}
          </span>
          ({{ wavelengthUnit }})
        </div>
      </SpectrumCursorOverlay>
      <ControlsTutPopupXAxis :anchor-elem="xAxisLabel" />
      <ControlsTutPopupYAxis :anchor-elem="yAxis" />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  type SpectrumDataSource,
  spectrumDataSourceKey,
  type WavelengthUnit,
  wavelengthUnitKey,
} from '@/injectionKeys';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { inject, ref, useTemplateRef } from 'vue';

const xAxisLabel = useTemplateRef('xAxisLabel');
const yAxis = useTemplateRef('yAxis');

const spectrumDataSource = inject(
  spectrumDataSourceKey,
  ref<SpectrumDataSource>('file'),
);

const wavelengthUnit = inject(
  wavelengthUnitKey,
  ref<WavelengthUnit>('Microns'),
);
</script>

<style>
.spectrum-chart-left-axis-label {
  display: flex;
  justify-content: center;
  margin: 60px 7px 0 0;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  height: 150px;
  font-size: 12px;
}

.spectrum-chart-brightness-icon {
  height: 17px;
  transform: rotate(180deg);
  margin: 0 0 0.5rem 0;
}
</style>
