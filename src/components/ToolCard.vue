<template>
  <div class="tool-card text-white p-3 rounded-4">
    <BRow class="mb-3">
      <BCol cols="8" md="6" lg="8" xl="6">
        <BFormGroup label="Use your own spectrum data (CSV)">
          <BFormFile
            v-model="file"
            accept="text/csv"
            class="spectrum-filepicker"
          />
        </BFormGroup>
      </BCol>
      <BCol />
    </BRow>
    <BRow>
      <BCol cols="12" xl="4" class="mb-3">
        <div class="h3">Spectrum 1</div>
        <BRow>
          <BCol cols="6" md="4" xl="12">
            <div class="spectrum-icon-holder rounded-4">
              <img class="spectrum-icon" :src="iconPath" />
            </div>
          </BCol>
          <BCol cols="6" lg="4" xl="12">
            <BFormSelect
              v-model="selectedCategory"
              :options="allCategoryOptions"
            />
            <template v-if="spectrumOptions.length > 0">
              <BFormSelect
                v-model="selectedSpectrum"
                :options="spectrumOptions"
              />
            </template>
            <div>Category: {{ selectedCategory }}</div>
            <div>Spectrum: {{ selectedSpectrum }}</div>
          </BCol>
        </BRow>
      </BCol>
      <BCol>
        <SpectrumCanvas />
      </BCol>
    </BRow>
  </div>
</template>

<script setup lang="ts">
import {
  PRELOADED_CATEGORIES,
  useMetadataStore,
  type PreloadedCategory,
  type SpectrumMetadata,
} from '@/metadataStore';
import { BFormSelect } from 'bootstrap-vue-next';
import { computed, ref, watch } from 'vue';

const file = ref<null | File>(null);

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
});

// Get metadata
const selectedMetadata = computed(
  (): SpectrumMetadata | null =>
    categoryMetadataByFilename.value[selectedSpectrum.value] || null,
);

// Icon
const iconPath = computed((): string => {
  const DEFAULT_ICON =
    '/includes/AI_common/images/Harry_sun_spectrum_resized.png';
  if (!selectedMetadata.value) {
    return DEFAULT_ICON;
  }
  const imageName = selectedMetadata.value.imageName;
  if (!imageName) {
    return DEFAULT_ICON;
  }
  return `/includes/SpecLab_Data_Files/${imageName}`;
});
</script>

<style>
.tool-card {
  background-color: #1e4c7d;
}
input.spectrum-filepicker {
  background-color: rgb(255 255 255 / 10%);
  color: var(--bs-light);
  border-color: var(--bs-gray);
}
input.spectrum-filepicker::file-selector-button {
  color: var(--bs-light);
  background-color: #7f9ccb;
}
input.spectrum-filepicker:focus:not(:disabled):not(
    [readonly]
  )::file-selector-button,
input.spectrum-filepicker:hover:not(:disabled):not(
    [readonly]
  )::file-selector-button {
  color: var(--bs-light);
  background-color: #9bbff8;
}
input.spectrum-filepicker:focus,
input.spectrum-filepicker:hover {
  background-color: rgb(255 255 255 / 10%);
  color: var(--bs-light);
}
.spectrum-icon-holder {
  height: 160px;
  width: 180px;
  overflow: hidden;
  background-color: #ffffff;
}
</style>
