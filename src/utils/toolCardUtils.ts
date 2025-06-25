import {
  normalizeKey,
  spectrumDataKey,
  spectrumDataSourceKey,
  type NormalizeSetting,
  type SpectrumDataSource,
  type SpectrumDatum,
} from '@/injectionKeys';
import {
  PRELOADED_CATEGORIES,
  useAllMetadata,
  type PreloadedCategory,
  type SpectrumMetadata,
} from './metadataUtils';
import { computed, inject, provide, ref, watch, type Ref } from 'vue';
import { useCurrentlyDrawing, useDrawnSpectrumY } from './drawingUtils';
import {
  dataFromCSV,
  dataFromText,
  rangeNormalize,
  visibleOnly,
} from './importUtils';
import { useSpectraTutorialStateMachine } from './tutorialUtils';

type PreloadedOrHiddenCategory = PreloadedCategory | 'Hidden';

export type SpectrumCategory =
  | PreloadedOrHiddenCategory
  | ''
  | 'draw'
  | 'pickedFile';

export type CustomMetadata = readonly Readonly<SpectrumMetadata>[];

export type CustomCategoryNames = {
  [cat in PreloadedOrHiddenCategory]?: string;
};

export const useCategoryOptions = (
  customMetadataGetter: () => CustomMetadata | null,
  customCategoryNamesGetter: () => CustomCategoryNames | null,
): { categoryOptions: Readonly<Ref<readonly Option[] | null>> } => {
  const categoryOptions = computed(() => {
    const customMetadata = customMetadataGetter();
    const customNames = customCategoryNamesGetter();
    if (customMetadata) {
      // Determine how many categories we have. Separate metadata with hidden category.
      const includedCategories = new Set<PreloadedOrHiddenCategory>();
      for (const cm of customMetadata) {
        if (cm.hideCategory) {
          includedCategories.add('Hidden');
        } else {
          includedCategories.add(cm.category);
        }
      }
      if (includedCategories.size <= 1) {
        return null;
      }
      const includedOptions: Option[] = [
        { value: '', text: 'Select category' },
      ];
      for (const cat of includedCategories) {
        let displayName: string = cat;
        if (customNames && customNames[cat]) {
          displayName = customNames[cat];
        }
        includedOptions.push({ value: cat, text: displayName });
      }
      return includedOptions;
    }
    // Easy mode, for the playground. Just show everything.
    const preloadedOptions = PRELOADED_CATEGORIES.map((cat) => ({
      value: cat,
      text: cat,
    }));
    const allCategoryOptions: { value: SpectrumCategory; text: string }[] = [
      { value: '', text: 'Select category' },
      ...preloadedOptions,
      { value: 'draw', text: 'Draw' },
      { value: 'pickedFile', text: 'Uploaded file' },
    ];
    return allCategoryOptions;
  });
  return { categoryOptions };
};

export const useDataSource = (
  drawOnlyGetter: () => boolean,
): {
  spectrumDataSource: Readonly<Ref<SpectrumDataSource>>;
  selectedCategory: Ref<SpectrumCategory>;
  pickedFile: Ref<File | null>;
} => {
  const selectedCategory = ref<SpectrumCategory>('');
  watch(
    drawOnlyGetter,
    (drawOnly) => {
      if (drawOnly) {
        selectedCategory.value = 'draw';
      }
    },
    { immediate: true },
  );
  const spectrumDataSource = computed((): SpectrumDataSource => {
    if (selectedCategory.value === 'draw') {
      return 'drawing';
    }
    return 'file';
  });
  provide(spectrumDataSourceKey, spectrumDataSource);

  const pickedFile = ref<File | null>(null);
  watch(selectedCategory, (newCategory) => {
    if (newCategory !== 'pickedFile') {
      pickedFile.value = null;
    }
  });
  watch(pickedFile, (newFile) => {
    if (newFile !== null) {
      selectedCategory.value = 'pickedFile';
    }
  });
  return { spectrumDataSource, selectedCategory, pickedFile };
};

interface MetadataByFilename {
  [index: string]: SpectrumMetadata;
}

function isPreloadedCategory(
  category: SpectrumCategory,
): category is PreloadedCategory {
  return PRELOADED_CATEGORIES.some((preCat) => preCat === category);
}

interface Option {
  value: string;
  text: string;
}

interface SparseMetadataByCategory {
  [cat: string]: SpectrumMetadata[] | undefined;
}

export const useMetadataByFilename = (
  customMetadataGetter: () => readonly Readonly<SpectrumMetadata>[] | null,
  categoryOptions: Ref<readonly Option[] | null>,
  selectedCategory: Ref<SpectrumCategory>,
): {
  metadataByFilename: Readonly<Ref<MetadataByFilename>>;
} => {
  const allMetadataByCategory = useAllMetadata();
  const customMetadataByCategory = computed(
    (): SparseMetadataByCategory | null => {
      const customMetadata = customMetadataGetter();
      if (!customMetadata) {
        return null;
      }
      if (!categoryOptions.value) {
        return null;
      }
      const metadataByCategory: SparseMetadataByCategory = {};
      for (const cm of customMetadata) {
        const cat = cm.hideCategory ? 'Hidden' : cm.category;
        if (!metadataByCategory[cat]) {
          metadataByCategory[cat] = [cm];
        } else {
          metadataByCategory[cat].push(cm);
        }
      }
      return metadataByCategory;
    },
  );
  const metadataByFilename = computed((): MetadataByFilename => {
    let metadataArray = [] as readonly Readonly<SpectrumMetadata>[];
    const customMetadata = customMetadataGetter();
    if (customMetadataByCategory.value) {
      const metadataArrayMaybe =
        customMetadataByCategory.value[selectedCategory.value];
      if (!metadataArrayMaybe) {
        return {};
      }
      metadataArray = metadataArrayMaybe;
    } else if (customMetadata !== null) {
      metadataArray = customMetadata;
    } else {
      if (!isPreloadedCategory(selectedCategory.value)) {
        return {};
      }
      metadataArray = allMetadataByCategory[selectedCategory.value];
    }
    const result: MetadataByFilename = {};
    for (const m of metadataArray) {
      result[m.filename] = m;
    }
    return result;
  });
  return { metadataByFilename };
};

export const useSpectrumOptions = (
  spectrumPickerPlaceholderGetter: () => string | null,
  metadataByFilename: Readonly<Ref<MetadataByFilename>>,
): {
  spectrumOptions: Readonly<Ref<Option[]>>;
} => {
  const spectrumOptions = computed((): Option[] => {
    const entries = Object.entries(metadataByFilename.value);
    if (entries.length === 0) {
      return [];
    }
    const placeholderOptionMaybe = [];
    const spectrumPickerPlaceholder = spectrumPickerPlaceholderGetter();
    if (spectrumPickerPlaceholder !== null) {
      // Sometimes we want to default to the first spectrum instead of a placeholder
      placeholderOptionMaybe.push({
        value: '',
        text: spectrumPickerPlaceholder,
      });
    }
    return [
      ...placeholderOptionMaybe,
      ...entries.map(([filename, metadata]) => ({
        value: filename,
        text: metadata.title,
      })),
    ];
  });

  return { spectrumOptions };
};

export const useSelectedSpectrum = (
  spectrumOptions: Ref<Option[]>,
  selectedCategory: Ref<SpectrumCategory>,
  defaultSpectrumGetter: () => string | null,
): {
  selectedSpectrum: Ref<string>;
} => {
  const selectedSpectrum = ref('');
  watch(
    [spectrumOptions, selectedCategory],
    async ([newOptions]) => {
      let newSpectrum = '';
      const defaultSpectrum = defaultSpectrumGetter();
      if (defaultSpectrum != null) {
        newSpectrum = defaultSpectrum;
      } else if (newOptions.length > 0) {
        newSpectrum = newOptions[0].value;
      }
      selectedSpectrum.value = newSpectrum;
    },
    { immediate: true },
  );

  return { selectedSpectrum };
};

export const useDrawnSpectrumProvider = (
  spectrumOptions: Ref<Option[]>,
  selectedCategory: Ref<SpectrumCategory>,
): {
  showClearButton: Readonly<Ref<boolean>>;
  clearDrawnSpectrumY: () => void;
} => {
  useCurrentlyDrawing();
  const { drawnSpectrumY, clearDrawnSpectrumY } = useDrawnSpectrumY();
  watch([spectrumOptions, selectedCategory], () => {
    if (drawnSpectrumY.value.length) {
      clearDrawnSpectrumY();
    }
  });
  const { tutorialState } = useSpectraTutorialStateMachine();
  const showClearButton = computed(() => {
    if (tutorialState.value === 'clear') {
      return true;
    }
    return !!drawnSpectrumY.value.length;
  });
  return { showClearButton, clearDrawnSpectrumY };
};

export const useSelectedMetadata = (
  selectedCategory: Ref<SpectrumCategory>,
  metadataByFilename: Ref<MetadataByFilename>,
  selectedSpectrum: Ref<string>,
  pickedFile: Ref<File | null>,
  customCategoryNamesGetter: () => CustomCategoryNames | null,
): {
  selectedMetadata: Readonly<Ref<SpectrumMetadata | null>>;
  sourceImage: Readonly<Ref<string | null>>;
  iconName: Readonly<Ref<string>>;
  chartTitle: Readonly<Ref<string>>;
  previewPath: Readonly<Ref<string | null>>;
} => {
  const selectedMetadata = computed(
    (): SpectrumMetadata | null =>
      metadataByFilename.value[selectedSpectrum.value] || null,
  );

  // Source image
  const sourceImage = computed((): string | null => {
    if (!selectedMetadata.value) {
      return null;
    }
    const imageUrl = selectedMetadata.value.imageUrl;
    if (!imageUrl) {
      return null;
    }
    return imageUrl;
  });

  // FontAwesome icon name to display if no source image
  const iconName = computed((): string => {
    if (selectedCategory.value === 'draw') {
      return 'pencil';
    }
    if (pickedFile.value) {
      return 'file';
    }
    return 'image';
  });

  // Chart title (as distinct from tool card title)
  const chartTitle = computed((): string => {
    const customNameMap = customCategoryNamesGetter();
    if (selectedMetadata.value) {
      if (selectedMetadata.value.hideCategory) {
        return selectedMetadata.value.title;
      }
      const category = selectedMetadata.value.category;
      let displayName: string = category;
      if (customNameMap && customNameMap[category]) {
        displayName = customNameMap[category];
      }
      return `${displayName} — ${selectedMetadata.value.title}`;
    }
    if (pickedFile.value) {
      return `Uploaded file — ${pickedFile.value.name}`;
    }
    return '';
  });

  // Preview
  const previewPath = computed((): string | null => {
    if (!selectedMetadata.value) {
      return null;
    }
    const bigImageUrl = selectedMetadata.value.bigImageUrl;
    if (!bigImageUrl) {
      return null;
    }
    return bigImageUrl;
  });

  return { selectedMetadata, sourceImage, iconName, chartTitle, previewPath };
};

export const useSpectrumDataProvider = (
  selectedMetadata: Ref<SpectrumMetadata | null>,
  selectedCategory: Ref<SpectrumCategory>,
  pickedFile: Ref<File | null>,
  normalizeOverrideGetter: () => NormalizeSetting | null,
): void => {
  const fetchSpectrumData = async (
    metadata: SpectrumMetadata | null,
  ): Promise<SpectrumDatum[]> => {
    if (!metadata) {
      return [];
    }
    if (import.meta.env.SSR) {
      // These are file URLs in SSG and can't be fetched
      // And the canvases aren't mounted so we couldn't use them anyway
      return [];
    }
    try {
      const response = await fetch(metadata.fileUrl);
      if (!response.ok) {
        return [];
      }
      const text = await response.text();
      return dataFromText(text);
    } catch (e) {
      console.error(e);
      return [];
    }
  };

  // Spectrum data
  const spectrumDataFromNetwork: Ref<SpectrumDatum[]> = ref([]);
  watch(
    selectedMetadata,
    async (newMetadata) => {
      spectrumDataFromNetwork.value = await fetchSpectrumData(newMetadata);
    },
    { immediate: true },
  );
  const spectrumDataFromPickedFile: Ref<SpectrumDatum[]> = ref([]);
  watch(pickedFile, async (newFile) => {
    if (!newFile) {
      spectrumDataFromPickedFile.value = [];
      return;
    }
    const text = await newFile.text();
    switch (newFile.type) {
      case 'text/plain':
        spectrumDataFromPickedFile.value = dataFromText(text);
        return;
      case 'text/csv':
        spectrumDataFromPickedFile.value = dataFromCSV(text);
        return;
      default:
        return;
    }
  });

  const controlGroupNormalize = inject(normalizeKey, null);
  const normalize = computed((): NormalizeSetting => {
    const normalizeOverride = normalizeOverrideGetter();
    if (normalizeOverride) {
      return normalizeOverride;
    }
    if (controlGroupNormalize) {
      return controlGroupNormalize.value;
    }
    return 'all';
  });

  const normalizeDataMaybe = (
    unNormalized: SpectrumDatum[],
  ): SpectrumDatum[] => {
    if (normalize.value === 'none') {
      return unNormalized;
    }
    let inputData = unNormalized;
    if (normalize.value === 'visible') {
      inputData = visibleOnly(inputData);
    }
    const unNormalizedIntensities = inputData.map(([_, intensity]) => {
      return intensity;
    });
    const normalizedIntensities = rangeNormalize(unNormalizedIntensities);
    const normalizedSpectrumData: SpectrumDatum[] = [];
    for (let i = 0; i < normalizedIntensities.length; i++) {
      const [wavelength, _] = inputData[i];
      const normalizedIntensity = normalizedIntensities[i];
      normalizedSpectrumData.push([wavelength, normalizedIntensity]);
    }
    return normalizedSpectrumData;
  };

  const spectrumData = computed(() => {
    if (selectedCategory.value === 'pickedFile') {
      return normalizeDataMaybe(spectrumDataFromPickedFile.value);
    }
    return normalizeDataMaybe(spectrumDataFromNetwork.value);
  });

  provide(spectrumDataKey, spectrumData);
};
