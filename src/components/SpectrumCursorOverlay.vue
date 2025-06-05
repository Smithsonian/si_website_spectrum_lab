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
          ref="cursorLine"
          class="cursor-line position-absolute"
          :style="`height: ${overlayHeight}px; width: 2px; left: -1px`"
        ></div>
        <img
          src="/includes/AI_common/images/play-button_2.png"
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
        class="position-absolute"
        :style="eventCaptureStyle"
        @pointerenter="handlePointerMove"
        @pointermove="handlePointerMove"
        @pointerleave="handlePointerLeave"
      ></div>
      <ControlsTutPopupMeasuringTool :anchor-elem="cursorLine" />
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
  wavelengthUnitKey,
  spectrumDataSourceKey,
  zoomKey,
  type WavelengthUnit,
  type SpectrumDataSource,
} from '@/injectionKeys';
import {
  micronsFromXLoc,
  useCursorMicrons,
  xLocFromMicrons,
} from '@/utils/chartUtils';
import { useControlsTutorialStateMachine } from '@/utils/tutorialUtils';
import { computed, inject, ref, useTemplateRef, watch } from 'vue';

const cursorLine = useTemplateRef('cursorLine');
const { tutorialState } = useControlsTutorialStateMachine();

const { cursorMicrons, setCursorMicrons } = useCursorMicrons();

watch(tutorialState, (newTutorialState, previousTutorialState) => {
  if (previousTutorialState === 'measuringTool') {
    // Ignore unless we just got here
    return;
  }
  if (newTutorialState === 'measuringTool') {
    // Ensure measuring tool appears
    setCursorMicrons(0.5);
  }
});

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
  setCursorMicrons(microns);
};
const handlePointerLeave = (e: PointerEvent): void => {
  e.preventDefault();
  const keepCursorThreshold = 10;
  // Get rid of cursor when leaving off left or right
  if (
    e.offsetY > keepCursorThreshold &&
    e.offsetY < overlayHeight - keepCursorThreshold
  ) {
    setCursorMicrons(null);
    return;
  }
  // Keep it if leaving off top or bottom
  const microns = micronsFromXLoc(e.offsetX, zoom.value);
  setCursorMicrons(microns);
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

const wavelengthUnit = inject(
  wavelengthUnitKey,
  ref<WavelengthUnit>('Microns'),
);

const numberFormat = new Intl.NumberFormat(undefined, {
  maximumSignificantDigits: 4,
});

// https://physics.nist.gov/cgi-bin/cuu/Value?minvev|search_for=electron+volt
const electronVoltMicronRelation = 1.239841984;
const electronVoltsFromWavelengthMicrons = (
  wavelengthMicrons: number,
): number => electronVoltMicronRelation / wavelengthMicrons;

const labelValue = computed((): string | null => {
  if (cursorMicrons.value === null) {
    return null;
  }
  switch (wavelengthUnit.value) {
    case 'Microns':
      return numberFormat.format(cursorMicrons.value);
    case 'Nanometers':
      return numberFormat.format(Math.floor(cursorMicrons.value * 1000));
    case 'Angstrom':
      return numberFormat.format(Math.floor(cursorMicrons.value * 10000));
    case 'Electron volts':
      return numberFormat.format(
        electronVoltsFromWavelengthMicrons(cursorMicrons.value),
      );
    default:
      return null;
  }
});

const labelUnit = computed((): string => {
  const labelsFromUnit: { [Key in WavelengthUnit]: string } = {
    Microns: 'µm',
    Nanometers: 'nm',
    Angstrom: 'Å',
    'Electron volts': 'eV',
  };
  return labelsFromUnit[wavelengthUnit.value];
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
