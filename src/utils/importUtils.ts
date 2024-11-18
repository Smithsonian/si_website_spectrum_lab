import type { SpectrumDatum } from '@/injectionKeys';
export type NormalizeSetting = 'all' | 'visible' | null;

function parseText(text: string): [number[], number[]] {
  const loadedDataArray = text.replace(/\s/g, '').split('&');
  if (loadedDataArray.length !== 2) {
    return [[], []];
  }
  const wavelengths = loadedDataArray[0].split(',').map(parseFloat);
  const intensities = loadedDataArray[1].split(',').map(parseFloat);
  return [wavelengths, intensities];
}

function isHeaderRow(row: string): boolean {
  const columns = row.split(',');
  return columns.some((c) => isNaN(parseFloat(c)));
}

function parseCSV(text: string): [number[], number[]] {
  const rows = text.split('\n').filter((t) => t.length > 0);
  if (isHeaderRow(rows[0])) {
    rows.shift();
  }
  const wavelengths: number[] = [];
  const intensities: number[] = [];
  for (const row of rows) {
    const columns = row.replace(/\s/g, '').split(',');
    const [wavelength, intensity] = columns;
    wavelengths.push(parseFloat(wavelength));
    intensities.push(parseFloat(intensity));
  }
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

export function visibleOnly(data: SpectrumDatum[]): SpectrumDatum[] {
  const wvMin = 0.4;
  const wvMax = 0.7;
  return data.filter(
    ([wavelength]) => wavelength >= wvMin && wavelength <= wvMax,
  );
}

function dataFromPairs(
  wavelengths: number[],
  intensities: number[],
): SpectrumDatum[] {
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

export function dataFromText(text: string): SpectrumDatum[] {
  const [wavelengths, intensities] = parseText(text);
  return dataFromPairs(wavelengths, intensities);
}

export function dataFromCSV(csv: string): SpectrumDatum[] {
  const [wavelengths, intensities] = parseCSV(csv);
  return dataFromPairs(wavelengths, intensities);
}
