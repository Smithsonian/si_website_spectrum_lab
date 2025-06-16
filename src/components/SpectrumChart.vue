<template>
  <div class="spectrum-canvas">
    <div class="d-flex position-relative">
      <div class="left-axis-label">
        More Light
        <span class="mt-1">
          <FontAwesomeIcon :icon="['fas', 'arrow-up']" transform="rotate-180"
        /></span>
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
        <div ref="xAxisLabel" class="text-center">
          Wavelength ({{ wavelengthUnit }})
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
.left-axis-label {
  margin: 60px 0 0 0;
  writing-mode: vertical-rl;
  text-align: center;
  transform: rotate(180deg);
  height: 150px;
}
.spectrum-canvas {
  width: 670px;
}
</style>
