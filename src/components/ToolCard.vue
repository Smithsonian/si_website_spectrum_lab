<template>
  <div class="tool-card bg-sl-navy text-white p-3 rounded-4">
    <!-- Chart bottom means file picker top, and vice versa -->
    <template v-if="showFilePicker && !inBottomToolSlot">
      <BRow class="mb-3">
        <SpectrumFilepicker v-model="pickedFile" />
        <BCol />
      </BRow>
    </template>
    <!-- Chart sent to the bottom or top -->
    <BRow :class="inBottomToolSlot ? 'align-items-start' : 'align-items-end'">
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
              v-if="!drawOnly && !!categoryOptions"
              v-model="selectedCategory"
              :options="categoryOptions"
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
      <!-- Chart needs to be reordered before spectrum picker, with spacing, when on top in smaller breakpoints -->
      <BCol
        :class="
          inBottomToolSlot
            ? 'mb-3 order-first mb-xl-0 order-xl-last'
            : 'mt-3 mt-xl-0'
        "
      >
        <div
          v-if="previewPath && !inBottomToolSlot"
          class="spectrum-preview-holder rounded-4 mb-3"
        >
          <img :src="previewPath" />
        </div>
        <!-- Use an invisible placeholder to prevent layout jumping -->
        <div class="tool-card-chart-title">
          {{ chartTitle || '&nbsp;' }}
        </div>
        <!-- SpectrumChart contents are expected to overlay the chart. -->
        <SpectrumChart>
          <slot></slot>
        </SpectrumChart>
        <div
          v-if="previewPath && inBottomToolSlot"
          class="spectrum-preview-holder rounded-4 mt-3"
        >
          <img :src="previewPath" />
        </div>
      </BCol>
    </BRow>
    <template v-if="showFilePicker && inBottomToolSlot">
      <BRow class="mt-3">
        <SpectrumFilepicker v-model="pickedFile" />
        <BCol />
      </BRow>
    </template>
  </div>
</template>

<script setup lang="ts">
import { inBottomToolSlotKey, type NormalizeSetting } from '@/injectionKeys';
import { BFormSelect } from 'bootstrap-vue-next';
import {
  computed,
  inject,
  useTemplateRef,
  type ComponentPublicInstance,
} from 'vue';
import {
  useCategoryOptions,
  useDataSource,
  useDrawnSpectrumProvider,
  useMetadataByFilename,
  useSelectedMetadata,
  useSelectedSpectrum,
  useSpectrumDataProvider,
  useSpectrumOptions,
  type CustomCategoryNames,
  type CustomMetadata,
} from '@/utils/toolCardUtils';

const clearButtonElem =
  useTemplateRef<ComponentPublicInstance>('clearButtonElem');
const spectrumPicker =
  useTemplateRef<ComponentPublicInstance>('spectrumPicker');

const props = withDefaults(
  defineProps<{
    titleOverride?: string | null;
    normalizeOverride?: NormalizeSetting | null;
    showFilePicker?: boolean;
    customMetadata?: CustomMetadata | null;
    customCategoryNames?: CustomCategoryNames | null;
    spectrumPickerPlaceholder?: string | null;
    defaultSpectrum?: string | null;
    drawOnly?: boolean;
  }>(),
  {
    titleOverride: null,
    normalizeOverride: null,
    customMetadata: null,
    customCategoryNames: null,
    spectrumPickerPlaceholder: 'Select spectrum',
    defaultSpectrum: null,
  },
);

const inBottomToolSlot = inject(inBottomToolSlotKey, false);

const title = computed(() => {
  if (props.titleOverride) {
    return props.titleOverride;
  }
  if (inBottomToolSlot) {
    return 'Spectrum 2';
  }
  return 'Spectrum 1';
});

// Refactored a lot of this setup function into composables, due to complexity
const { categoryOptions } = useCategoryOptions(
  () => props.customMetadata,
  () => props.customCategoryNames,
);

const { spectrumDataSource, selectedCategory, pickedFile } = useDataSource(
  () => props.drawOnly,
);

const { metadataByFilename } = useMetadataByFilename(
  () => props.customMetadata,
  categoryOptions,
  selectedCategory,
);

const { spectrumOptions } = useSpectrumOptions(
  () => props.spectrumPickerPlaceholder,
  metadataByFilename,
);

const { selectedSpectrum } = useSelectedSpectrum(
  spectrumOptions,
  selectedCategory,
  () => props.defaultSpectrum,
);

const { clearDrawnSpectrumY } = useDrawnSpectrumProvider(
  spectrumOptions,
  selectedCategory,
);

const { selectedMetadata, iconPath, chartTitle, previewPath } =
  useSelectedMetadata(
    metadataByFilename,
    selectedSpectrum,
    pickedFile,
    () => props.customCategoryNames,
  );

// This does the fetching and stuff. Important to do here so it can be passed through to the SpectrumData and Rainbow
useSpectrumDataProvider(
  selectedMetadata,
  selectedCategory,
  pickedFile,
  () => props.normalizeOverride,
);
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

.tool-card-chart-title {
  margin-left: 65px;
  font-weight: 600;
}
</style>
