<template>
  <div class="border border-sl-light-blue bg-black text-white p-3 rounded-4">
    <!-- Chart bottom means file picker top, and vice versa -->
    <template v-if="showFilePicker && !inBottomToolSlot">
      <BRow class="mb-3">
        <SpectrumFilepicker v-model="pickedFile" />
        <BCol />
      </BRow>
    </template>
    <BRow>
      <BCol cols="12" xl="3">
        <div class="tool-card-title mb-2">{{ title }}</div>
        <div class="spectrum-icon-holder mb-2 border border-sl-light-blue">
          <img v-if="sourceImage" class="spectrum-icon" :src="sourceImage" />
          <div
            v-else
            class="h-100 d-flex justify-content-center align-items-center"
          >
            <FontAwesomeIcon
              :icon="['fas', iconName]"
              size="2xl"
              transform="grow-20"
            />
          </div>
        </div>
        <div style="width: 190px">
          <BFormSelect
            v-if="!drawOnly && !!categoryOptions"
            v-model="selectedCategory"
            size="sm"
            :options="categoryOptions"
            class="mb-1"
          />
          <div
            v-if="spectrumDataSource === 'drawing' && showClearButton"
            class="position-relative"
          >
            <BButton
              ref="clearButtonElem"
              size="sm"
              @click="clearDrawnSpectrumY"
              >Clear drawing</BButton
            >
            <SpecTutPopupClear :anchor-elem="clearButtonElem" />
          </div>
          <div v-else class="position-relative">
            <BFormSelect
              ref="spectrumPicker"
              v-model="selectedSpectrum"
              size="sm"
              :options="spectrumOptions"
              :class="spectrumOptions.length > 0 ? '' : 'invisible'"
            />
            <SpecTutPopupSpectrumPicker :anchor-elem="spectrumPicker" />
          </div>
        </div>
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
        <div class="tool-card-chart-title mb-2">
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
import {
  inBottomToolSlotKey,
  isFirstOfTwoToolsKey,
  type NormalizeSetting,
} from '@/injectionKeys';
import { BFormSelect } from 'bootstrap-vue-next';
import {
  computed,
  inject,
  ref,
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
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

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

const isFirstOfTwoTools = inject(isFirstOfTwoToolsKey, ref(false));
const inBottomToolSlot = inject(inBottomToolSlotKey, false);

const title = computed(() => {
  if (props.titleOverride) {
    return props.titleOverride;
  }
  if (inBottomToolSlot) {
    return 'Source 2:';
  }
  if (isFirstOfTwoTools.value) {
    return 'Source 1:';
  }
  return 'Source:';
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

const { showClearButton, clearDrawnSpectrumY } = useDrawnSpectrumProvider(
  spectrumOptions,
  selectedCategory,
);

const { selectedMetadata, sourceImage, iconName, chartTitle, previewPath } =
  useSelectedMetadata(
    selectedCategory,
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
.spectrum-icon {
  display: block;
  max-height: 100%;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.spectrum-icon-holder {
  height: 190px;
  width: 190px;
  overflow: hidden;
  background-color: black;
  border: 2px solid black;
}

.spectrum-preview-holder {
  width: 670px;
  overflow: hidden;
  outline: 2px solid black;
}

.tool-card-title {
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  color: var(--slr-light-grey);
}

.tool-card-chart-title {
  margin-left: 50px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  color: var(--slr-light-grey);
}
</style>
