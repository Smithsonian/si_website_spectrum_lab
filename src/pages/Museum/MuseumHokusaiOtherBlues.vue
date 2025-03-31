<template>
  <MuseumLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <h2>Other Blue Regions</h2>
        <BRow>
          <BCol cols="12" lg="6">
            <img :src="imageUrl" class="mb-2 challenge-image" />
          </BCol>
          <BCol cols="12" lg="6">
            <p>
              Now imagine you wanted to know the composition of other blue
              regions of interest in the painting, but you don't have time to
              take spectra everywhere.
            </p>
            <p>
              Conservators have the option of photographing the entire image
              using different filters, for example, red, green, or blue, or even
              infrared filters.
            </p>
            <p>
              Based on the differences in the spectra of the two blue pigments
              you observed, which filter would be most helpful for
              distinguishing which of the two blue pigments were used in other
              parts of the painting?
            </p>
            <p>
              Placeholder info: notebook will have multiple choice - 440 (blue)
              and 905 (IR)
            </p>
            <div class="mb-3">
              <BFormRadioGroup
                v-model="chosenFilter"
                :options="FILTER_OPTION_LIST"
                name="chosen-filter"
                class="chosen-filter-picker"
                buttons
                button-variant="primary"
              />
            </div>
            <p>
              <font-awesome-icon icon="pencil"></font-awesome-icon> Enter your
              answers in your <strong>Spectrum Notebook</strong>.
            </p>
          </BCol>
        </BRow>
      </ChallengeCard>
    </template>
    <template #tool-col>
      <ToolControlGroup :show-normalize-picker="true" :show-zoom="true">
        <template #top-tool>
          <ToolCard
            title="Blue Pigment 1"
            :custom-metadata="hokusaiB1Metadata"
            :spectrum-picker-placeholder="null"
          />
        </template>
        <template #bottom-tool>
          <ToolCard
            title="Blue Pigment 2"
            :custom-metadata="hokusaiB2Metadata"
            :spectrum-picker-placeholder="null"
          />
        </template>
      </ToolControlGroup>
    </template>
  </MuseumLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';
import { imageUrlFromPath, useCustomMetadata } from '@/utils/metadataUtils';
import filterNoneUrl from '@/assets/spectrum_data/Museum_Conservation/Hokusai_painting_colors_labeled_670px_unsharp.jpg';
import filter440Url from '@/assets/spectrum_data/Museum_Conservation/Hokusai_440nm.jpg';
import filter905Url from '@/assets/spectrum_data/Museum_Conservation/Hokusai_905nm.jpg';
import { computed, ref } from 'vue';

useSpecLabHead('Other blues', 'Museum');

const FILTER_OPTION_LIST = [
  { text: 'No filter', value: 'none' },
  { text: '440 nm', value: '440' },
  { text: '905 nm', value: '905' },
] as const;

type FilterValues = (typeof FILTER_OPTION_LIST)[number]['value'];
const chosenFilter = ref<FilterValues>('none');
const imageUrl = computed(() => {
  switch (chosenFilter.value) {
    case 'none':
      return filterNoneUrl;
    case '440':
      return filter440Url;
    case '905':
      return filter905Url;
    default:
      return '';
  }
});

const hokusaiB1 = useCustomMetadata(
  'Museum Conservation',
  'F1904-134_VNIR-SWIR_colors_Blue_1',
  {
    imageUrl: imageUrlFromPath('Museum_Conservation/Hokusai_B1_zoom.png'),
    bigImageUrl: '',
  },
);

const hokusaiB2 = useCustomMetadata(
  'Museum Conservation',
  'F1904-134_VNIR-SWIR_colors_Blue_2',
  {
    imageUrl: imageUrlFromPath('Museum_Conservation/Hokusai_B2_zoom.png'),
    bigImageUrl: '',
  },
);

const customMetadataMaybe = [hokusaiB1, hokusaiB2];
const customMetadata = customMetadataMaybe.filter((sm) => !!sm);

const hokusaiB1Metadata = customMetadata.filter(
  (sm) => sm.filename === 'F1904-134_VNIR-SWIR_colors_Blue_1',
);
const hokusaiB2Metadata = customMetadata.filter(
  (sm) => sm.filename === 'F1904-134_VNIR-SWIR_colors_Blue_2',
);
</script>

<style>
.chosen-filter-picker .btn-primary {
  --bs-btn-active-bg: hwb(188 70% 7%);
  --bs-btn-border-color: var(--sl-dark-purple);
  --bs-btn-active-border-color: var(--sl-dark-purple);
}
</style>
