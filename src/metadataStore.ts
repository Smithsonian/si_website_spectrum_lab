import { defineStore } from 'pinia';
import metadataJson from './metadata.json' with { type: 'json' };

export const PRELOADED_CATEGORIES = [
  'Lamps',
  'Stars',
  'Nature',
  'Atoms and Molecules',
  'Planets',
  'Exoplanets',
  'Exoplanet Models',
  'Thermal Spectra',
  'Fish Tank',
  'Museum Curation',
  'Museum Pigments',
] as const;

export const CATEGORY_DIRECTORIES = {
  Lamps: 'Lamps',
  Stars: 'Stars',
  Nature: 'Nature',
  'Atoms and Molecules': 'Atoms_and_Molecules',
  Planets: 'Planets',
  Exoplanets: 'Exoplanets',
  'Exoplanet Models': 'Exoplanet_Models',
  'Thermal Spectra': 'Thermal_Spectra',
  'Fish Tank': 'Fishtank_Lights',
  'Museum Curation': 'Museum_Curation',
  'Museum Pigments': 'Museum_Pigments',
} as const;

export type PreloadedCategory = (typeof PRELOADED_CATEGORIES)[number];

export interface SpectrumMetadata {
  category: PreloadedCategory;
  filename: string;
  title: string;
  spectrumType: string;
  imageName: string;
  imageLink: string;
  creditName: string;
  creditLink: string;
  howTaken: string;
  notes: string;
}

type FoundMetadata = (typeof metadataJson)[number];

type MaybeValidMetadata = SpectrumMetadata | FoundMetadata;

const knownCategories: string[] = [...PRELOADED_CATEGORIES];

function isValidMetadata(sm: MaybeValidMetadata): sm is SpectrumMetadata {
  return PRELOADED_CATEGORIES.some((cat) => cat === sm.category);
}

type MetadataByCategory = {
  [index in PreloadedCategory]: SpectrumMetadata[];
};

export const useMetadataStore = defineStore('metadata', {
  state: () => ({
    allMetadata: [] as FoundMetadata[],
    byCategory: {
      Lamps: [],
      Stars: [],
      Nature: [],
      'Atoms and Molecules': [],
      Planets: [],
      Exoplanets: [],
      'Exoplanet Models': [],
      'Thermal Spectra': [],
      'Fish Tank': [],
      'Museum Curation': [],
      'Museum Pigments': [],
    } as MetadataByCategory,
  }),
  actions: {
    initialize() {
      this.allMetadata = metadataJson;
      for (const sm of metadataJson) {
        if (isValidMetadata(sm)) {
          this.byCategory[sm.category].push(sm);
        } else {
          console.warn(
            `Unknown category ${sm.category}. Known categories are ${knownCategories}`,
          );
        }
      }
    },
  },
});
