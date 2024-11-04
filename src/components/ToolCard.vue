<template>
  <div class="tool-card text-white p-3 rounded-4">
    <!-- Chart bottom means file picker top, and vice versa -->
    <template v-if="chartPosition === 'bottom'">
      <BRow class="mb-3">
        <SpectrumFilepicker />
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
              v-model="selectedCategory"
              :options="allCategoryOptions"
            />
            <BFormSelect
              v-if="
                spectrumDataSource !== 'drawing' && spectrumOptions.length > 0
              "
              v-model="selectedSpectrum"
              :options="spectrumOptions"
            />
            <BButton
              v-if="spectrumDataSource === 'drawing'"
              variant="light"
              @click="clearDrawnSpectrumY"
              >Reset drawing</BButton
            >
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
        <SpectrumChart />
      </BCol>
    </BRow>
    <template v-if="chartPosition === 'top'">
      <BRow class="mt-3">
        <SpectrumFilepicker />
        <BCol />
      </BRow>
    </template>
  </div>
</template>

<script setup lang="ts">
import {
  spectrumDataKey,
  spectrumDataSourceKey,
  type SpectrumDataSource,
  type SpectrumDatum,
} from '@/injectionKeys';
import {
  CATEGORY_DIRECTORIES,
  PRELOADED_CATEGORIES,
  useMetadataStore,
  type PreloadedCategory,
  type SpectrumMetadata,
} from '@/metadataStore';
import { useCurrentlyDrawing, useDrawnSpectrumY } from '@/utils/drawingUtils';
import { dataFromText, rangeNormalize } from '@/utils/importUtils';
import { BFormSelect } from 'bootstrap-vue-next';
import { computed, provide, ref, watch, type Ref } from 'vue';

type ChartPosition = 'top' | 'bottom';

const props = withDefaults(
  defineProps<{
    title: string;
    normalize?: boolean;
    chartPosition?: ChartPosition;
  }>(),
  { normalize: true, chartPosition: 'bottom' },
);

type SpectrumCategory = PreloadedCategory | '' | 'draw' | 'file';
const preloadedOptions = PRELOADED_CATEGORIES.map((cat) => ({
  value: cat,
  text: cat,
}));
const allCategoryOptions: { value: SpectrumCategory; text: string }[] = [
  { value: '', text: 'Select category' },
  ...preloadedOptions,
  { value: 'draw', text: 'Draw' },
  { value: 'file', text: 'Uploaded file' },
];
const selectedCategory = ref<SpectrumCategory>('');
const spectrumDataSource = computed((): SpectrumDataSource => {
  if (selectedCategory.value === 'draw') {
    return 'drawing';
  }
  return 'file';
});
provide(spectrumDataSourceKey, spectrumDataSource);
const { drawnSpectrumY, clearDrawnSpectrumY } = useDrawnSpectrumY();
// We don't actuallly need it in this component, but we want it at this level
// so the drawing canvas and rainbow can share
useCurrentlyDrawing();

const metadataStore = useMetadataStore();
function isPreloadedCategory(
  category: SpectrumCategory,
): category is PreloadedCategory {
  return PRELOADED_CATEGORIES.some((preCat) => preCat === category);
}
interface MetadataByFilename {
  [index: string]: SpectrumMetadata;
}
const categoryMetadataByFilename = computed((): MetadataByFilename => {
  if (!isPreloadedCategory(selectedCategory.value)) {
    return {};
  }
  const metadataArray = metadataStore.byCategory[selectedCategory.value];
  const result: MetadataByFilename = {};
  for (const m of metadataArray) {
    result[m.filename] = m;
  }
  return result;
});
const spectrumOptions = computed((): { value: string; text: string }[] => [
  { value: '', text: 'Select spectrum' },
  ...Object.entries(categoryMetadataByFilename.value).map(
    ([filename, metadata]) => ({ value: filename, text: metadata.title }),
  ),
]);
const selectedSpectrum = ref('');

// Clear spectrum on category change
watch(selectedCategory, async () => {
  if (selectedSpectrum.value) {
    selectedSpectrum.value = '';
  }
  if (drawnSpectrumY.value.length) {
    clearDrawnSpectrumY();
  }
});

// Get metadata
const selectedMetadata = computed(
  (): SpectrumMetadata | null =>
    categoryMetadataByFilename.value[selectedSpectrum.value] || null,
);

// Icon
const iconPath = computed((): string => {
  const DEFAULT_ICON =
    'includes/AI_common/images/Harry_sun_spectrum_resized.png';
  if (!selectedMetadata.value) {
    return DEFAULT_ICON;
  }
  const imageName = selectedMetadata.value.imageName;
  if (!imageName) {
    return DEFAULT_ICON;
  }
  return `includes/SpecLab_Data_Files/${imageName}`;
});

const fetchSpectrumData = async (
  metadata: SpectrumMetadata | null,
): Promise<SpectrumDatum[]> => {
  if (!metadata) {
    return [];
  }
  const directory = CATEGORY_DIRECTORIES[metadata.category];
  const url = `includes/SpecLab_Data_Files/${directory}/${metadata.filename}.txt`;
  try {
    const response = await fetch(url);
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
watch(selectedMetadata, async (newMetadata) => {
  spectrumDataFromNetwork.value = await fetchSpectrumData(newMetadata);
});
const spectrumData = computed(() => {
  if (!props.normalize) {
    return spectrumDataFromNetwork.value;
  }
  const unNormalizedIntensities = spectrumDataFromNetwork.value.map(
    ([_, intensity]) => {
      return intensity;
    },
  );
  const normalizedIntensities = rangeNormalize(unNormalizedIntensities);
  const normalizedSpectrumData: SpectrumDatum[] = [];
  for (let i = 0; i < normalizedIntensities.length; i++) {
    const [wavelength, _] = spectrumDataFromNetwork.value[i];
    const normalizedIntensity = normalizedIntensities[i];
    normalizedSpectrumData.push([wavelength, normalizedIntensity]);
  }
  return normalizedSpectrumData;
});

provide(spectrumDataKey, spectrumData);
</script>

<style>
.tool-card {
  background-color: #1e4c7d;
}
.spectrum-icon-holder {
  height: 160px;
  width: 180px;
  overflow: hidden;
  background-color: black;
  border: 2px solid black;
}
</style>
