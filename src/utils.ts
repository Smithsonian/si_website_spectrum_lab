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

function rangeNormalize(data: number[], minTo = 0.05, maxTo = 0.95): number[] {
  const min = Math.min(...data);
  const max = Math.max(...data);
  const slope = (maxTo - minTo) / (max - min);
  const intercept = minTo - slope * min;
  return data.map((v) => slope * v + intercept);
}

export function dataFromText(text: string): SpectrumDatum[] {
  const [wavelengths, intensities] = parseText(text);
  const normalizedIntensities = rangeNormalize(intensities);
  const data: SpectrumDatum[] = [];
  for (
    let i = 0;
    i < wavelengths.length && i < normalizedIntensities.length;
    i++
  ) {
    data.push([wavelengths[i], normalizedIntensities[i]]);
  }
  return data;
}
