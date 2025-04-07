<template>
  <div class="spectrum-canvas">
    <div class="d-flex">
      <div class="left-axis-label">
        More Light
        <span class="mt-1">
          <FontAwesomeIcon :icon="['fas', 'arrow-up']" transform="rotate-180"
        /></span>
      </div>
      <SpectrumCursorOverlay>
        <SpectrumRainbow />
        <div class="d-flex">
          <LeftAxis />
          <!-- Wrap these to enable overlay -->
          <div class="position-relative">
            <SpectrumDrawing v-if="spectrumDataSource === 'drawing'" />
            <SpectrumData v-else />
            <!-- Overlay items go in this slot. -->
            <slot></slot>
          </div>
        </div>
        <BottomAxis />
        <div class="text-center">Wavelength ({{ wavelengthUnit }})</div>
      </SpectrumCursorOverlay>
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
import { inject, ref } from 'vue';

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
