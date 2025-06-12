<template>
  <MuseumLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <template #top>
          <InstructionHeader>Chokha Pigments Part 3: UVL</InstructionHeader>
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
      <ToolControlGroup :control-names="['units', 'plotType', 'normalize']">
        <template #top-tool>
          <ToolCard
            :custom-metadata="customMetadata"
            spectrum-picker-placeholder="Select Chokha ROI"
          />
        </template>
        <template #bottom-tool>
          <ToolCard
            :custom-metadata="pigments"
            spectrum-picker-placeholder="Select pigment"
          />
        </template>
      </ToolControlGroup>
      <LeftRightGroup class="mt-5">
        <template #left>
          <NextPrevButton to="uvl-intro" direction="prev" light>
            part 2
          </NextPrevButton>
        </template>
        <template #right>
          <NextPrevButton to="data-table" direction="next" light>
            part 4
          </NextPrevButton>
        </template>
      </LeftRightGroup>
    </template>
  </MuseumLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';
import { useAllMetadata, useCustomMetadata } from '@/utils/metadataUtils';
import { computed, ref } from 'vue';
import chokhaChallenge from '@/assets/spectrum_data/Museum_Conservation/chokha_mystery_labels_910.webp';
import chokhaUVL from '@/assets/spectrum_data/Museum_Conservation/chokha_uvl_2000.webp';
import mystery from '@/assets/spectrum_data/mystery@2x.png';

useSpecLabHead('Chokha Pigments Part 3: UVL', 'Museum');

const FILTER_OPTION_LIST = [
  { text: 'No filter', value: 'none' },
  { text: 'UVL', value: 'UVL' },
] as const;

type FilterValues = (typeof FILTER_OPTION_LIST)[number]['value'];
const chosenFilter = ref<FilterValues>('none');
const imageUrl = computed(() => {
  switch (chosenFilter.value) {
    case 'none':
      return chokhaChallenge;
    case 'UVL':
      return chokhaUVL;
    default:
      return '';
  }
});

const chokhaR1 = useCustomMetadata(
  'Painting Regions',
  'S2018-1-76_VNIR-SWIR_colors_Red_1',
  {
    title: 'Mystery Pigment 1',
    imageUrl: mystery,
    bigImageUrl: '',
  },
);
const chokhaB2 = useCustomMetadata(
  'Painting Regions',
  'S2018-1-76_VNIR-SWIR_colors_Blue_2',
  {
    title: 'Mystery Pigment 2',
    imageUrl: mystery,
    bigImageUrl: '',
  },
);
const chokhaY1 = useCustomMetadata(
  'Painting Regions',
  'S2018-1-76_VNIR-SWIR_colors_Yellow_1',
  {
    title: 'Mystery Pigment 3',
    imageUrl: mystery,
    bigImageUrl: '',
  },
);
const chokhaW1 = useCustomMetadata(
  'Painting Regions',
  'S2018-1-76_VNIR-SWIR_colors_White_1',
  {
    title: 'Mystery Pigment 4',
    imageUrl: mystery,
    bigImageUrl: '',
  },
);
const customMetadataMaybe = [chokhaR1, chokhaB2, chokhaY1, chokhaW1];
const customMetadata = customMetadataMaybe.filter((sm) => !!sm);
const allMetadata = useAllMetadata();
const pigments = allMetadata['Paint Pigments'];
</script>

<style>
.chosen-filter-picker .btn-primary {
  --bs-btn-active-bg: hwb(188 70% 7%);
  --bs-btn-border-color: var(--sl-navy);
  --bs-btn-active-border-color: var(--sl-navy);
  margin-left: 15px;
}
</style>
