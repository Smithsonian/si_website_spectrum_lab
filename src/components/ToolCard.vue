<template>
  <div class="tool-card bg-sl-dark-purple text-white p-3 rounded-4">
    <!-- Chart bottom means file picker top, and vice versa -->
    <template v-if="showFilePicker && chartPosition === 'bottom'">
      <BRow class="mb-3">
        <SpectrumFilepicker v-model="pickedFile" />
        <BCol />
      </BRow>
    </template>
    <!-- Chart sent to the bottom or top -->
    <BRow
      :class="
        chartPosition === 'bottom' ? 'align-items-end' : 'align-items-start'
      "
    >
      <BCol cols="12" xl="4" xxl="3">
        <div class="h3">{{ title }}</div>
        <BRow>
          <BCol cols="6" md="4" xl="12">
            <div class="spectrum-icon-holder rounded-4 mb-1">
              <img class="spectrum-icon" :src="iconPath" />
            </div>
          </BCol>
          <BCol cols="6" lg="4" xl="12">
            <BFormSelect
              v-if="!drawOnly && customMetadata === null"
              v-model="selectedCategory"
              :options="allCategoryOptions"
            />
            <div
              v-if="spectrumDataSource === 'drawing'"
              class="position-relative"
            >
              <BButton
                ref="clearButtonElem"
                variant="light"
                @click="clearDrawnSpectrumY"
                >Clear drawing</BButton
              >
              <SpecTutPopupClear :anchor-elem="clearButtonElem" />
            </div>
            <div v-else class="position-relative">
              <BFormSelect
                ref="spectrumPicker"
                v-model="selectedSpectrum"
                :options="spectrumOptions"
                :class="spectrumOptions.length > 0 ? '' : 'invisible'"
              />
              <SpecTutPopupSpectrumPicker :anchor-elem="spectrumPicker" />
            </div>
          </BCol>
        </BRow>
      </BCol>
      <!-- Chart needs to be reordered before spectrum picker, when on top in smaller breakpoints -->
      <BCol
        :class="
          chartPosition === 'bottom'
            ? 'mt-3'
            : 'mt-2 mb-3 order-first order-xl-last'
        "
      >
        <div
          v-if="previewPath && chartPosition === 'bottom'"
          class="spectrum-preview-holder rounded-4 mb-3"
        >
          <img :src="previewPath" />
        </div>
        <!-- SpectrumChart contents are expected to overlay the chart. -->
        <SpectrumChart>
          <slot></slot>
        </SpectrumChart>
        <div
          v-if="previewPath && chartPosition === 'top'"
          class="spectrum-preview-holder rounded-4 mt-3"
        >
          <img :src="previewPath" />
        </div>
      </BCol>
    </BRow>
    <template v-if="showFilePicker && chartPosition === 'top'">
      <BRow class="mt-3">
        <SpectrumFilepicker v-model="pickedFile" />
        <BCol />
      </BRow>
    </template>
  </div>
</template>

<script setup lang="ts">
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
} from '@/utils/metadataUtils';
import { useCurrentlyDrawing, useDrawnSpectrumY } from '@/utils/drawingUtils';
import {
  dataFromCSV,
  dataFromText,
  rangeNormalize,
  visibleOnly,
} from '@/utils/importUtils';
import { BFormSelect } from 'bootstrap-vue-next';
import {
  computed,
  inject,
  provide,
  ref,
  useTemplateRef,
  watch,
  type ComponentPublicInstance,
  type Ref,
} from 'vue';
import defaultIconUrl from '/includes/AI_common/images/Harry_sun_spectrum_resized.png';

const clearButtonElem =
  useTemplateRef<ComponentPublicInstance>('clearButtonElem');
const spectrumPicker =
  useTemplateRef<ComponentPublicInstance>('spectrumPicker');

type ChartPosition = 'top' | 'bottom';
interface MetadataByFilename {
  [index: string]: SpectrumMetadata;
}

const props = withDefaults(
  defineProps<{
    title: string;
    normalizeOverride?: NormalizeSetting | null;
    chartPosition?: ChartPosition;
    showFilePicker?: boolean;
    customMetadata?: readonly Readonly<SpectrumMetadata>[] | null;
    spectrumPickerPlaceholder?: string | null;
    defaultSpectrum?: string | null;
    drawOnly?: boolean;
  }>(),
  {
    normalizeOverride: null,
    chartPosition: 'bottom',
    customMetadata: null,
    spectrumPickerPlaceholder: 'Select spectrum',
  },
);

type SpectrumCategory = PreloadedCategory | '' | 'draw' | 'pickedFile';
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
const selectedCategory = ref<SpectrumCategory>('');
watch(
  () => props.drawOnly,
  () => {
    if (props.drawOnly) {
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
const { drawnSpectrumY, clearDrawnSpectrumY } = useDrawnSpectrumY();
// We don't actually need it in this component, but we want it at this level
// so the drawing canvas and rainbow can share
useCurrentlyDrawing();

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

const allMetadata = useAllMetadata();
function isPreloadedCategory(
  category: SpectrumCategory,
): category is PreloadedCategory {
  return PRELOADED_CATEGORIES.some((preCat) => preCat === category);
}
const metadataByFilename = computed((): MetadataByFilename => {
  let metadataArray = [] as readonly Readonly<SpectrumMetadata>[];
  if (props.customMetadata !== null) {
    metadataArray = props.customMetadata;
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
const spectrumOptions = computed((): { value: string; text: string }[] => {
  const entries = Object.entries(metadataByFilename.value);
  if (entries.length === 0) {
    return [];
  }
  const placeholderOptionMaybe = [];
  if (props.spectrumPickerPlaceholder !== null) {
    // Sometimes we want to default to the first spectrum instead of a placeholder
    placeholderOptionMaybe.push({
      value: '',
      text: props.spectrumPickerPlaceholder,
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
const selectedSpectrum = ref('');

// Set default spectrum and clear drawing when changing category, or metadata source
watch(
  [spectrumOptions, selectedCategory],
  async ([newOptions]) => {
    if (drawnSpectrumY.value.length) {
      clearDrawnSpectrumY();
    }
    let defaultSpectrum = '';
    if (props.defaultSpectrum != null) {
      defaultSpectrum = props.defaultSpectrum;
    } else if (newOptions.length > 0) {
      defaultSpectrum = newOptions[0].value;
    }
    selectedSpectrum.value = defaultSpectrum;
  },
  { immediate: true },
);

// Get metadata
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
  if (props.normalizeOverride) {
    return props.normalizeOverride;
  }
  if (controlGroupNormalize) {
    return controlGroupNormalize.value;
  }
  return 'all';
});

const normalizeDataMaybe = (unNormalized: SpectrumDatum[]): SpectrumDatum[] => {
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
</script>

<style>
.tool-card {
  border: 1px solid var(--sl-light-blue);
}

.spectrum-icon-holder {
  height: 164px;
  width: 184px;
  overflow: hidden;
  background-color: black;
  border: 2px solid black;
}

.spectrum-preview-holder {
  width: 670px;
  overflow: hidden;
  outline: 2px solid black;
}
</style>
