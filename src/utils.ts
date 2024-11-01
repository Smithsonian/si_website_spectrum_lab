import { CHART_WIDTH, MIN_WAVELENGTH } from './constants';
import type { SpectrumDatum } from './injectionKeys';

function parseText(text: string): [number[], number[]] {
  const loadedDataArray = text.replace(/\s/g, '').split('&');
  if (loadedDataArray.length !== 2) {
    return [[], []];
  }
  const wavelengths = loadedDataArray[0].split(',').map(parseFloat);
  const intensities = loadedDataArray[1].split(',').map(parseFloat);
  return [wavelengths, intensities];
}

export function rangeNormalize(
  data: number[],
  minTo = 0.05,
  maxTo = 0.95,
): number[] {
  const min = Math.min(...data);
  const max = Math.max(...data);
  const slope = (maxTo - minTo) / (max - min);
  const intercept = minTo - slope * min;
  return data.map((v) => slope * v + intercept);
}

export function dataFromText(text: string): SpectrumDatum[] {
  const [wavelengths, intensities] = parseText(text);
  const data: SpectrumDatum[] = [];
  for (let i = 0; i < wavelengths.length && i < intensities.length; i++) {
    const wavelength = wavelengths[i];
    const intensity = intensities[i];
    // Filter out any NaNs
    if (isNaN(wavelength) || isNaN(intensity)) {
      continue;
    }
    data.push([wavelengths[i], intensities[i]]);
  }
  // Some of the preset data isn't sorted
  data.sort((a, b) => {
    const [aWav] = a;
    const [bWav] = b;
    return aWav - bWav;
  });
  return data;
}

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
