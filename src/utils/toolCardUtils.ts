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
import defaultIconUrl from '/includes/AI_common/images/Harry_sun_spectrum_resized.png';
import {
  dataFromCSV,
  dataFromText,
  rangeNormalize,
  visibleOnly,
} from './importUtils';

export type SpectrumCategory = PreloadedCategory | '' | 'draw' | 'pickedFile';

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

export const useSpectrumOptions = (
  customMetadataGetter: () => readonly Readonly<SpectrumMetadata>[] | null,
  spectrumPickerPlaceholderGetter: () => string | null,
  selectedCategory: Ref<SpectrumCategory>,
): {
  metadataByFilename: Readonly<Ref<MetadataByFilename>>;
  spectrumOptions: Readonly<Ref<Option[]>>;
} => {
  const allMetadata = useAllMetadata();
  const metadataByFilename = computed((): MetadataByFilename => {
    let metadataArray = [] as readonly Readonly<SpectrumMetadata>[];
    const customMetadata = customMetadataGetter();
    if (customMetadata !== null) {
      metadataArray = customMetadata;
    } else {
      if (!isPreloadedCategory(selectedCategory.value)) {
        return {};
      }
      metadataArray = allMetadata[selectedCategory.value];
    }
    const result: MetadataByFilename = {};
    for (const m of metadataArray) {
      result[m.filename] = m;
    }
    return result;
  });
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

  return { metadataByFilename, spectrumOptions };
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
  clearDrawnSpectrumY: () => void;
} => {
  useCurrentlyDrawing();
  const { drawnSpectrumY, clearDrawnSpectrumY } = useDrawnSpectrumY();
  watch([spectrumOptions, selectedCategory], () => {
    if (drawnSpectrumY.value.length) {
      clearDrawnSpectrumY();
    }
  });
  return { clearDrawnSpectrumY };
};

export const useSelectedMetadata = (
  metadataByFilename: Ref<MetadataByFilename>,
  selectedSpectrum: Ref<string>,
  pickedFile: Ref<File | null>,
): {
  selectedMetadata: Readonly<Ref<SpectrumMetadata | null>>;
  iconPath: Readonly<Ref<string>>;
  chartTitle: Readonly<Ref<string>>;
  previewPath: Readonly<Ref<string | null>>;
} => {
  const selectedMetadata = computed(
    (): SpectrumMetadata | null =>
      metadataByFilename.value[selectedSpectrum.value] || null,
  );

  // Icon
  const iconPath = computed((): string => {
    if (!selectedMetadata.value) {
      return defaultIconUrl;
    }
    const imageUrl = selectedMetadata.value.imageUrl;
    if (!imageUrl) {
      return defaultIconUrl;
    }
    return imageUrl;
  });

  // Chart title (as distinct from tool card title)
  const chartTitle = computed((): string => {
    if (selectedMetadata.value) {
      return `${selectedMetadata.value.category} — ${selectedMetadata.value.title}`;
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

  return { selectedMetadata, iconPath, chartTitle, previewPath };
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
    if (newFile === null) {
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
