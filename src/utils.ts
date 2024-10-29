export type SpectrumDatum = [
  // Wavelength in microns
  number,
  // Intensity 0.05 to 0.95
  number,
];

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
