import { defineStore } from 'pinia';
import metadataJson from './metadata.json' with { type: 'json' };

const spectrumCategories = [
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

type SpectrumCategory = (typeof spectrumCategories)[number];

interface SpectrumMetadata {
  category: SpectrumCategory;
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

const knownCategories: string[] = [...spectrumCategories];

function isValidMetadata(sm: MaybeValidMetadata): sm is SpectrumMetadata {
  return knownCategories.includes(sm.category);
}

type MetadataByCategory = {
  [index in SpectrumCategory]: SpectrumMetadata[];
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
        }
        console.warn(
          `Unknown category ${sm.category}. Known categories are ${knownCategories}`,
        );
      }
    },
  },
});
