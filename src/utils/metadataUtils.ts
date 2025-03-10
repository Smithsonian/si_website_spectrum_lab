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
  'Museum Conservation': 'Museum_Conservation',
} as const;

export type PreloadedCategory = (typeof PRELOADED_CATEGORIES)[number];

const METADATA_DEFAULTS = {
  filename: '',
  title: '',
  spectrumType: '',
  realOrCalculated: '',
  imagePath: '',
  bigImagePath: '',
  how: '',
  sourceText: '',
  sourceUrl: '',
  source2Text: '',
  source2Url: '',
  credit: '',
  additionalInfo: '',
} as const;

type MetadataStringKey = keyof typeof METADATA_DEFAULTS;

export type SpectrumMetadata = {
  category: PreloadedCategory;
} & {
  [key in MetadataStringKey]: string;
};

type FoundMetadata = (typeof metadataJson)[number];

type MaybeValidMetadata = SpectrumMetadata | FoundMetadata;

const isValidCategory = (
  maybeCategory: string,
): maybeCategory is PreloadedCategory => {
  if (!PRELOADED_CATEGORIES.some((cat) => cat === maybeCategory)) {
    console.warn(
      `Unknown category ${maybeCategory}. Known categories are ${PRELOADED_CATEGORIES}`,
    );
    return false;
  }
  return true;
};

const validateMetadata = (sm: MaybeValidMetadata): SpectrumMetadata | null => {
  if (!isValidCategory(sm.category)) {
    return null;
  }
  const metadataWithDefaults = {
    ...METADATA_DEFAULTS,
    ...sm,
    category: sm.category,
  };
  return metadataWithDefaults;
};

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
      const validOrNullMetadata = validateMetadata(sm);
      if (!validOrNullMetadata) {
        continue;
      }
      const valid = validOrNullMetadata;
      Object.freeze(valid);
      mutable[valid.category].push(valid);
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
