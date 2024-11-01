import { ref, type InjectionKey, type Ref, type UnwrapRef } from 'vue';

// Note: If this seems elaborate, remember we have multiple tools per page, and
// want to reset state when the tools are rendered. So a global store like
// Pinia would actually make things worse.

export interface RefWithUpdater<T> {
  // This is more complicated than expected due to ref unwrapping,
  // but doesn't seem to lead to any issues
  ref: Ref<T, T> | Ref<UnwrapRef<T>, T | UnwrapRef<T>>;
  update(newValue: T): void;
}
export function createRefWithUpdater<T>(defaultValue: T): RefWithUpdater<T> {
  const xPointerLocationRef = ref(defaultValue);
  return {
    ref: xPointerLocationRef,
    update(newValue: T) {
      xPointerLocationRef.value = newValue;
    },
  };
}

export type SpectrumDatum = [
  // Wavelength in microns
  number,
  // Intensity 0.05 to 0.95
  number,
];

export type SpectrumDataSource = 'file' | 'drawing';

// Spectrum data from file
export const spectrumDataKey = Symbol() as InjectionKey<Ref<SpectrumDatum[]>>;
// Drawn spectrum data, indexed in a sparse array from 0 to 99, intensity 0 to 1
export const drawnSpectrumDataKey = Symbol() as InjectionKey<Ref<number[]>>;
// Can the user draw on the chart, or not?
export const spectrumDataSourceKey = Symbol() as InjectionKey<
  Ref<SpectrumDataSource>
>;
// Chart zoom
export const zoomKey = Symbol() as InjectionKey<Ref<number>>;
// Chart draws lines or only points
export const showLinesKey = Symbol() as InjectionKey<Ref<boolean>>;
// Cursor wavelength in microns
export const cursorMicronsKey = Symbol() as InjectionKey<
  RefWithUpdater<number | null>
>;

// Cursor label unit
export type CursorUnit =
  | 'Microns'
  | 'Nanometers'
  | 'Angstrom'
  | 'Gigahertz'
  | 'Electron volt';
export const cursorUnitKey = Symbol() as InjectionKey<Ref<CursorUnit>>;
