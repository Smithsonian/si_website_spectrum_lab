import metadataJson from '@/metadata.json' with { type: 'json' };
import { inject, provide, type InjectionKey } from 'vue';

// Full list of metadata
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
  'Museum Conservation',
] as const;

export const CATEGORY_DIRECTORIES = {
  Lamps: 'Lamps',
  Stars: 'Stars',
  Nature: 'Nature',
  'Atoms and Molecules': 'Atoms_and_Molecules',
  Planets: 'Solar_System',
  Exoplanets: 'Exoplanets',
  'Exoplanet Models': 'Exoplanet_Models',
  'Thermal Spectra': 'Thermal_Spectra',
  'Fish Tank': 'Fishtank_Lights',
  'Museum Conservation': 'Museum_Curation',
} as const;

export type PreloadedCategory = (typeof PRELOADED_CATEGORIES)[number];

const METADATA_STRING_KEYS = [
  'filename',
  'title',
  'spectrumType',
  'imageName',
  'imageLink',
  'bigImageName',
  'creditName',
  'creditLink',
  'howTaken',
  'notes',
] as const;

type MetadataStringKey = (typeof METADATA_STRING_KEYS)[number];

export type SpectrumMetadata = {
  category: PreloadedCategory;
} & {
  [key in MetadataStringKey]: string;
};

type FoundMetadata = (typeof metadataJson)[number];

type MaybeValidMetadata = SpectrumMetadata | FoundMetadata;

function isValidMetadata(sm: MaybeValidMetadata): sm is SpectrumMetadata {
  if (!PRELOADED_CATEGORIES.some((cat) => cat === sm.category)) {
    return false;
  }
  if (METADATA_STRING_KEYS.some((key) => typeof sm[key] !== 'string')) {
    return false;
  }
  return true;
}

type MutableMetadataByCategory = {
  [index in PreloadedCategory]: SpectrumMetadata[];
};

type MetadataByCategory = {
  [index in PreloadedCategory]: readonly Readonly<SpectrumMetadata>[];
};

// This one is just for debugging, to inspect the metadataJson more easily
const rawMetadataKey = Symbol('rawMetadata') as InjectionKey<unknown>;
// This one is actually used by components
const metadataByCategoryKey = Symbol(
  'metadataByCategory',
) as InjectionKey<MetadataByCategory>;

export const useAllMetadata = (): MetadataByCategory => {
  let rawMetadata = inject(rawMetadataKey, null);
  if (rawMetadata === null) {
    rawMetadata = metadataJson;
    provide(rawMetadataKey, rawMetadata);
  }
  let metadataByCategory = inject(metadataByCategoryKey, null);
  if (metadataByCategory === null) {
    const mutable = {
      Lamps: [],
      Stars: [],
      Nature: [],
      'Atoms and Molecules': [],
      Planets: [],
      Exoplanets: [],
      'Exoplanet Models': [],
      'Thermal Spectra': [],
      'Fish Tank': [],
      'Museum Conservation': [],
    } as MutableMetadataByCategory;
    for (const sm of metadataJson) {
      if (isValidMetadata(sm)) {
        Object.freeze(sm);
        mutable[sm.category].push(sm);
      } else {
        console.warn(
          `Unknown category ${sm.category}. Known categories are ${PRELOADED_CATEGORIES}`,
        );
      }
    }
    metadataByCategory = mutable;
  }
  return metadataByCategory;
};

export const useCustomMetadata = (
  category: PreloadedCategory,
  filename: string,
  dataToMerge: Partial<SpectrumMetadata>,
): SpectrumMetadata | null => {
  const metadataByCategory = useAllMetadata();
  const categoryMetadata = metadataByCategory[category];
  const originalMetadata = categoryMetadata.find(
    (sm) => sm.filename === filename,
  );
  if (!originalMetadata) {
    console.warn(
      `Could not find metadata with category '${category}' and filename '${filename}'. Leaving blank.`,
    );
    return null;
  }
  const customMetadata = {
    ...originalMetadata,
    ...dataToMerge,
  };
  return customMetadata;
};
