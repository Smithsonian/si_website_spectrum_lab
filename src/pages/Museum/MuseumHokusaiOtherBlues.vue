<template>
  <MuseumLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <template #top>
          <InstructionHeader>Other Blue Regions</InstructionHeader>
          <InstructionRow rowType="Investigate">
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
          </InstructionRow>
          <InstructionRow rowType="Notebook">
            <span class="needs-updating">
              Write notebook questions - multiple choice - 440 (blue) and 905
              (IR)
            </span>
          </InstructionRow>
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
        </template>
        <template #middle>
          <img :src="imageUrl" class="d-block mb-2 challenge-image" />
        </template>
      </ChallengeCard>
    </template>
    <template #tool-col>
      <ToolControlGroup :show-normalize-picker="true" :show-zoom="true">
        <template #top-tool>
          <ToolCard
            :custom-metadata="hokusaiB1Metadata"
            :spectrum-picker-placeholder="null"
          />
        </template>
        <template #bottom-tool>
          <ToolCard
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
import filterNoneUrl from '@/assets/spectrum_data/Museum_Conservation/Hokusai_color_B1B2B3_big.webp';
import filter440Url from '@/assets/spectrum_data/Museum_Conservation/Hokusai_440_B1B2B3_big.webp';
import filter905Url from '@/assets/spectrum_data/Museum_Conservation/Hokusai_905_B1B2B3_big.webp';
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
  'Painting Regions',
  'F1904-134_VNIR-SWIR_colors_Blue_1',
  {
    imageUrl: imageUrlFromPath('Museum_Conservation/Hokusai_B1_zoom.png'),
    bigImageUrl: '',
  },
);

const hokusaiB2 = useCustomMetadata(
  'Painting Regions',
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
  --bs-btn-border-color: var(--sl-navy);
  --bs-btn-active-border-color: var(--sl-navy);
  margin-left: 15px;
}
</style>
