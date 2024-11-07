import {
  inject,
  provide,
  readonly,
  ref,
  type InjectionKey,
  type Ref,
} from 'vue';
import {
  CHART_HEIGHT,
  CHART_WIDTH,
  MIN_WAVELENGTH,
  Y_0_FROM_BOTTOM,
  Y_RANGE,
} from '../constants';

export const pixelZoomFromZoom = (zoom: number): number => {
  // The left side is always 0.2 microns. The right side, at zoom 1, is 0.95 microns.
  // The chart drawing math assumes the chart to be 750 pixels wide.
  // Therefore, each pixel is assumed to be 1 nanometer (at zoom 1).
  // However, layout needs have moved the chart width away from 750.
  // The "pixel zoom" adjusts the zoom to compensate for the ratio of the actual width vs 750.
  const pixelsPerZ1Nm = CHART_WIDTH / 750;
  const pixelZoom = pixelsPerZ1Nm * zoom;
  return pixelZoom;
};

export const micronsFromXLoc = (xLoc: number, zoom: number): number => {
  const pixelZoom = pixelZoomFromZoom(zoom);

  const microns = xLoc * (1 / pixelZoom) * (1 / 1000) + MIN_WAVELENGTH;
  return microns;
};

export const xLocFromMicrons = (microns: number, zoom: number): number => {
  const pixelZoom = pixelZoomFromZoom(zoom);

  const xLoc = (microns - MIN_WAVELENGTH) * pixelZoom * 1000;
  return xLoc;
};

// The intensity axis is inverted due to canvas coordinates increasing top to bottom.
// That's normal for document order but backwards for graphs.
export const yLocFromIntensity = (intensity: number): number => {
  const yFromBottom = intensity * Y_RANGE + Y_0_FROM_BOTTOM;
  return CHART_HEIGHT - yFromBottom;
};

// Page-scoped "where is the cursor"
// Enables cursor positions linked between multiple charts
interface CursorMicronsWithUpdater {
  cursorMicrons: Readonly<Ref<number | null>>;
  setCursorMicrons: (newCursorMicrons: number | null) => void;
}
const cursorMicronsKey = Symbol() as InjectionKey<CursorMicronsWithUpdater>;
const createCursorMicronsWithUpdater = (): CursorMicronsWithUpdater => {
  const cursorMicrons = ref<number | null>(null);
  const setCursorMicrons = (newCursorMicrons: number | null): void => {
    cursorMicrons.value = newCursorMicrons;
  };
  return {
    cursorMicrons: readonly(cursorMicrons),
    setCursorMicrons,
  };
};
export const useCursorMicrons = (): CursorMicronsWithUpdater => {
  let cursorMicronsWithUpdater = inject(cursorMicronsKey, null);
  if (!cursorMicronsWithUpdater) {
    cursorMicronsWithUpdater = createCursorMicronsWithUpdater();
    provide(cursorMicronsKey, cursorMicronsWithUpdater);
  }
  return cursorMicronsWithUpdater;
};
