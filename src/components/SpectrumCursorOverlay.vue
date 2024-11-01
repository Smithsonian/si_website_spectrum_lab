<template>
  <!-- Create stacking context -->
  <div class="position-relative">
    <!-- Render children (what we're putting the cursor above) -->
    <slot></slot>
    <!-- No cursor or event target when drawing -->
    <template v-if="spectrumDataSource !== 'drawing'">
      <!-- Position at the pointer. This also makes a new stacking context we
     use to arrange the cursor parts around the pointer. -->
      <div
        v-if="xCursorLocation"
        class="cursor position-absolute"
        :style="`top: 0px; left: ${xRenderLocation}px`"
      >
        <div
          class="cursor-line position-absolute"
          :style="`height: ${overlayHeight}px; width: 2px; left: -1px`"
        ></div>
        <img
          :src="'includes/AI_common/images/play-button_2.png'"
          class="cursor-triangle d-block position-absolute"
        />
        <div
          class="position-absolute cursor-label rounded-1 px-1"
          :style="`top: ${RAINBOW_HEIGHT + 3}px; left: 5px;`"
        >
          {{ labelValue }}&nbsp;{{ labelUnit }}
        </div>
      </div>
      <!-- Target for pointer events. Above the cursor, so we always get the hits here. -->
      <div
        class="position-absolute pointer-event-capture"
        :style="eventCaptureStyle"
        @pointerenter="handlePointerMove"
        @pointermove="handlePointerMove"
        @pointerleave="handlePointerLeave"
      ></div>
    </template>
  </div>
</template>

<script setup lang="ts">
import {
  CHART_HEIGHT,
  CHART_WIDTH,
  LEFT_AXIS_WIDTH,
  RAINBOW_HEIGHT,
} from '@/constants';
import {
  createRefWithUpdater,
  cursorMicronsKey,
  cursorUnitKey,
  spectrumDataSourceKey,
  zoomKey,
  type CursorUnit,
  type SpectrumDataSource,
} from '@/injectionKeys';
import { micronsFromXLoc, xLocFromMicrons } from '@/utils';
import { computed, inject, ref } from 'vue';

const { ref: cursorMicrons, update: updateCursorMicrons } = inject(
  cursorMicronsKey,
  createRefWithUpdater(null),
);

const overlayHeight = CHART_HEIGHT + RAINBOW_HEIGHT;

const eventCaptureStyle =
  'top: 0px; ' +
  `left: ${LEFT_AXIS_WIDTH}px; ` +
  `height: ${overlayHeight}px; ` +
  `width: ${CHART_WIDTH}px`;

const spectrumDataSource = inject(
  spectrumDataSourceKey,
  ref<SpectrumDataSource>('file'),
);
const zoom = inject(zoomKey, ref(1));
const handlePointerMove = (e: PointerEvent): void => {
  e.preventDefault();
  const microns = micronsFromXLoc(e.offsetX, zoom.value);
  updateCursorMicrons(microns);
};
const handlePointerLeave = (e: PointerEvent): void => {
  e.preventDefault();
  const keepCursorThreshold = 10;
  // Get rid of cursor when leaving off left or right
  if (
    e.offsetY > keepCursorThreshold &&
    e.offsetY < overlayHeight - keepCursorThreshold
  ) {
    updateCursorMicrons(null);
    return;
  }
  // Keep it if leaving off top or bottom
  const microns = micronsFromXLoc(e.offsetX, zoom.value);
  updateCursorMicrons(microns);
};

const xCursorLocation = computed((): number | null => {
  if (cursorMicrons.value === null) {
    return null;
  }
  const xLoc = xLocFromMicrons(cursorMicrons.value, zoom.value);
  // Ignore micron values that would be off either edge
  if (xLoc < 0 || xLoc > CHART_WIDTH) {
    return null;
  }
  return xLoc;
});

const xRenderLocation = computed((): number | null => {
  if (xCursorLocation.value === null) {
    return null;
  }
  return xCursorLocation.value + LEFT_AXIS_WIDTH;
});

const cursorUnit = inject(cursorUnitKey, ref<CursorUnit>('Microns'));

const numberFormat = new Intl.NumberFormat(undefined, {
  maximumSignificantDigits: 4,
});

const vacuumSpeedOfLight = 299792458;
const frequencyFromWavelengthMicrons = (wavelengthMicrons: number): number => {
  const wavelengthMeters = wavelengthMicrons / 1000000;
  return vacuumSpeedOfLight / wavelengthMeters;
};
// https://physics.nist.gov/cgi-bin/cuu/Value?minvev|search_for=electron+volt
const electronVoltMicronRelation = 1.239841984;
const electronVoltsFromWavelengthMicrons = (
  wavelengthMicrons: number,
): number => electronVoltMicronRelation / wavelengthMicrons;

const labelValue = computed((): string | null => {
  if (cursorMicrons.value === null) {
    return null;
  }
  switch (cursorUnit.value) {
    case 'Microns':
      return numberFormat.format(cursorMicrons.value);
    case 'Nanometers':
      return numberFormat.format(Math.floor(cursorMicrons.value * 1000));
    case 'Angstrom':
      return numberFormat.format(Math.floor(cursorMicrons.value * 10000));
    case 'Gigahertz':
      return numberFormat.format(
        frequencyFromWavelengthMicrons(cursorMicrons.value) / 1e9,
      );
    case 'Electron volt':
      return numberFormat.format(
        electronVoltsFromWavelengthMicrons(cursorMicrons.value),
      );
    default:
      return null;
  }
});

const labelUnit = computed((): string => {
  const labelsFromUnit: { [Key in CursorUnit]: string } = {
    Microns: 'µm',
    Nanometers: 'nm',
    Angstrom: 'Å',
    Gigahertz: 'GHz',
    'Electron volt': 'eV',
  };
  return labelsFromUnit[cursorUnit.value];
});
</script>

<style>
.cursor-triangle {
  height: 20px;
  width: 20px;
  top: 0px;
  left: -10px;
}
.cursor-line {
  border-left: 1px solid black;
}
.cursor-label {
  color: black;
  background-color: rgb(211 211 211 / 0.85);
  font-size: 14px;
}
</style>
