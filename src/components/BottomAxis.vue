<template>
  <div class="position-relative ms-2" style="height: 30px">
    <canvas
      ref="canvas"
      :width="xLabelsEnd"
      height="30"
      class="position-absolute"
      >Bottom axis ticks</canvas
    >
  </div>
</template>

<script setup lang="ts">
import { CHART_WIDTH } from '@/constants';
import {
  wavelengthUnitKey,
  zoomKey,
  type WavelengthUnit,
} from '@/injectionKeys';
import { canvasFontFromSize, pixelZoomFromZoom } from '@/utils/chartUtils';
import { inject, onMounted, ref, useTemplateRef, watch } from 'vue';

// Extra canvas space under the left axis
const xLeftSideRoom = 20;
const xTicksEnd = CHART_WIDTH + xLeftSideRoom;
// Extra room for labels off the edge
const xLabelsEnd = xTicksEnd + 20;

const zoomRef = inject(zoomKey, ref(1));
const canvas = useTemplateRef('canvas');
let ctx: CanvasRenderingContext2D | null = null;

const wavelengthUnit = inject(
  wavelengthUnitKey,
  ref<WavelengthUnit>('Microns'),
);

// https://physics.nist.gov/cgi-bin/cuu/Value?minvev|search_for=electron+volt
const electronVoltMicronRelation = 1.239841984;
const electronVoltsFromWavelengthMicrons = (
  wavelengthMicrons: number,
): number => electronVoltMicronRelation / wavelengthMicrons;

const numberFormat = new Intl.NumberFormat(undefined, {
  maximumSignificantDigits: 2,
});

const labelFromWavelength = (wavelengthMicrons: number): string => {
  switch (wavelengthUnit.value) {
    case 'Microns':
      return numberFormat.format(wavelengthMicrons);
    case 'Nanometers':
      return numberFormat.format(wavelengthMicrons * 1000);
    case 'Ångstroms':
      return numberFormat.format(wavelengthMicrons * 10000);
    case 'Electron volts':
      return numberFormat.format(
        electronVoltsFromWavelengthMicrons(wavelengthMicrons),
      );
  }
};

const renderLabel = (
  wavelengthMicrons: number,
  xTickPosition: number,
): void => {
  if (!ctx) {
    return;
  }
  const label = labelFromWavelength(wavelengthMicrons);
  const xWidth = ctx.measureText(label).width;
  ctx.fillText(label, xTickPosition - xWidth / 2, yTextBottom);
};

const yTextBottom = 19;

const drawAxis = () => {
  if (!ctx) {
    return;
  }
  // Clear
  ctx.clearRect(0, 0, xLabelsEnd, 30);
  // 1/10 micron ticks
  renderSmallTicks();
  // 1 micron ticks
  renderMediumTicks();
  // 10 micron ticks
  renderLargeTicks();
};

function renderSmallTicks() {
  if (!ctx) {
    return;
  }
  const zoom = zoomRef.value;
  const pixelZoom = pixelZoomFromZoom(zoom);
  ctx.lineWidth = 1;
  const smallStart = 2;
  const xTickDistance = 100;
  if (zoom >= 0.08) {
    // Do we have enough room to render labels?
    let enoughRoom = true;
    const xZoomedTickDistance = xTickDistance * pixelZoom;
    const biggestLabel = labelFromWavelength(1.9);
    const xBiggestWidth = ctx.measureText(biggestLabel).width;
    // More than 90% is too close to be legible
    if (xBiggestWidth > xZoomedTickDistance * 0.9) {
      enoughRoom = false;
    }

    for (let i = smallStart; i < 100; i++) {
      const xTickPosition =
        xLeftSideRoom + (i - smallStart) * xTickDistance * pixelZoom;
      // Canvas lines 1 pixel thick are only sharp when 0.5 offset from the grid
      const xTickPosSharp = Math.floor(xTickPosition) + 0.5;
      if (xTickPosSharp > xTicksEnd) {
        break;
      }
      ctx.beginPath();
      ctx.moveTo(xTickPosSharp, 0);
      ctx.lineTo(xTickPosSharp, 4);
      ctx.stroke();

      // 1/10 micron labels. Skip whole numbers
      const wavelength = i / 10;
      if (enoughRoom && wavelength !== Math.floor(wavelength)) {
        renderLabel(wavelength, xTickPosition);
      }
    }
  } else {
    // Draw zero-ish tick
    const xTickPosSharp = xLeftSideRoom + 0.5;
    ctx.beginPath();
    ctx.moveTo(xTickPosSharp, 0);
    ctx.lineTo(xTickPosSharp, 4);
    ctx.stroke();
  }
}

function renderMediumTicks() {
  if (!ctx) {
    return;
  }
  const zoom = zoomRef.value;
  const pixelZoom = pixelZoomFromZoom(zoom);
  const xTickDistance = 1000;

  // Do we have enough room to render labels?
  let enoughRoom = true;
  const xZoomedTickDistance = xTickDistance * pixelZoom;
  const biggestLabel = labelFromWavelength(60);
  const xBiggestWidth = ctx.measureText(biggestLabel).width;
  // More than 95% is too close to be legible
  if (xBiggestWidth > xZoomedTickDistance * 0.9) {
    enoughRoom = false;
  }

  const xPreviousTicksOffset = 800;
  ctx.lineWidth = 2;
  const mediumStart = 1;
  for (let i = 1; i <= 60; i++) {
    // Since the tenths start at 0.2, we need to start at 800 not 1000
    const xTickPosition =
      xLeftSideRoom +
      (xPreviousTicksOffset + (i - mediumStart) * xTickDistance) * pixelZoom;
    // Canvas lines 2 pixels thick are only sharp when on the whole pixel grid
    const xTickPosSharp = Math.floor(xTickPosition);
    if (xTickPosSharp > xTicksEnd) {
      break;
    }
    ctx.beginPath();
    ctx.moveTo(xTickPosSharp, 0);
    ctx.lineTo(xTickPosSharp, 6);
    ctx.stroke();

    // Skip tens of microns
    if (enoughRoom && i % 10) {
      renderLabel(i, xTickPosition);
    }
  }
}

function renderLargeTicks() {
  if (!ctx) {
    return;
  }
  const zoom = zoomRef.value;
  const pixelZoom = pixelZoomFromZoom(zoom);
  ctx.lineWidth = 3;
  const largeStart = 1;
  for (let i = largeStart; i <= 3; i++) {
    const xTickDistance = 10000;
    // Since the tenths start at 0.2, we need to start at 9800 not 10000
    const xPreviousTicksOffset = 9800;
    const xTickPosition =
      xLeftSideRoom +
      (xPreviousTicksOffset + (i - largeStart) * xTickDistance) * pixelZoom;
    // Canvas lines 3 pixels thick are only sharp when 0.5 off the whole pixel grid
    const xTickPosSharp = Math.floor(xTickPosition) + 0.5;
    if (xTickPosSharp > xTicksEnd) {
      break;
    }
    ctx.beginPath();
    ctx.moveTo(xTickPosSharp, 0);
    ctx.lineTo(xTickPosSharp, 8);
    ctx.stroke();

    renderLabel(i * 10, xTickPosition);
  }
}

watch([zoomRef, wavelengthUnit], () => {
  drawAxis();
});

onMounted(() => {
  if (!canvas.value) {
    return;
  }
  ctx = canvas.value.getContext('2d');
  if (!ctx) {
    return;
  }
  ctx.font = canvasFontFromSize('11px');
  ctx.fillStyle = 'white';
  ctx.strokeStyle = 'white';
  drawAxis();
});
</script>
