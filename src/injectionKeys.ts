import { type InjectionKey, type Ref } from 'vue';

// Note: If this seems elaborate, remember we have multiple tools per page, and
// want to reset state when the tools are rendered. So a global store like
// Pinia would actually make things worse.

export type SpectrumDatum = [
  // Wavelength in microns
  number,
  // Intensity 0.05 to 0.95
  number,
];

export type SpectrumDataSource = 'file' | 'drawing';

// Spectrum data from file
export const spectrumDataKey = Symbol() as InjectionKey<Ref<SpectrumDatum[]>>;

// Can the user draw on the chart, or not?
export const spectrumDataSourceKey = Symbol() as InjectionKey<
  Ref<SpectrumDataSource>
>;
// Chart zoom
export const zoomKey = Symbol() as InjectionKey<Ref<number>>;
// Chart draws lines or only points
export const showLinesKey = Symbol() as InjectionKey<Ref<boolean>>;

// Cursor label unit
export type CursorUnit =
  | 'Microns'
  | 'Nanometers'
  | 'Angstrom'
  | 'Gigahertz'
  | 'Electron volt';
export const cursorUnitKey = Symbol() as InjectionKey<Ref<CursorUnit>>;
