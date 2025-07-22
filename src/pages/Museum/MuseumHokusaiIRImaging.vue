<template>
  <MuseumLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <template #top>
          <InstructionHeader
            >Hokusai IR Imaging Part 3: Identify Blue</InstructionHeader
          >
          <InstructionRow rowType="Investigate">
            Compare how the painting appears in natural light (No filter), with
            a blue filter (440 nm), and with an IR filter (905 nm).
            <template #steps>
              <InstructionStep>
                Use the
                <span style="font-weight: 600"
                  >No filter / 440 nm / 905 nm</span
                >
                buttons to toggle between the visible light image, and
                false-color images taken with a 440 nm (blue) filter and 905 nm
                (infrared) filter.
              </InstructionStep>
              <InstructionStep>
                Based on the filtered images, identify the likely pigment in B3.
              </InstructionStep>
            </template>
          </InstructionRow>
          <InstructionRow rowType="Notebook">
            Answer the questions in your notebook.
            <template #steps>
              <InstructionStep>
                What pigment do you think is used at ROI B3? (If necessary, use
                the data in the Spectrum Tool below to remind yourself what
                pigments make up ROI B1 and ROI B2.)
              </InstructionStep>
              <InstructionStep>
                What clues did you use from the filtered images to identify the
                pigment at ROI B3?
              </InstructionStep>
            </template>
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
      <ToolControlGroup
        :control-names="['units', 'plotType', 'normalize', 'zoom']"
      >
        <template #top-tool>
          <ToolCard
            :custom-metadata="hokusaiBluesMetadata"
            spectrum-picker-placeholder="Select Blue ROI"
          />
        </template>
        <template #bottom-tool>
          <ToolCard
            :custom-metadata="bluesMetadata"
            spectrum-picker-placeholder="Select material"
          />
        </template>
      </ToolControlGroup>
      <LeftRightGroup class="mt-5">
        <template #left>
          <NextPrevButton direction="prev" to="blue-spectra" light>
            part 2
          </NextPrevButton>
        </template>
        <template #right>
          <NextPrevButton direction="next" to="../design-museum-display" light>
            next section
          </NextPrevButton>
        </template>
      </LeftRightGroup>
    </template>
  </MuseumLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';
import {
  imageUrlFromPath,
  useCustomMetadata,
  useAllMetadata,
} from '@/utils/metadataUtils';
import filterNoneUrl from '@/assets/spectrum_data/Museum_Conservation/Hokusai_color_B1B2B3_big.webp';
import filter440Url from '@/assets/spectrum_data/Museum_Conservation/Hokusai_440_B1B2B3_big.webp';
import filter905Url from '@/assets/spectrum_data/Museum_Conservation/Hokusai_905_B1B2B3_big.webp';
import { computed, ref } from 'vue';

useSpecLabHead('Whole-image Techniques Part 2: IR imaging', 'Museum');

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

const customMetadataBlues = [hokusaiB1, hokusaiB2];
const customMetadata = customMetadataBlues.filter((sm) => !!sm);

const hokusaiBluesMetadata = customMetadata.filter(
  (sm) =>
    sm.filename === 'F1904-134_VNIR-SWIR_colors_Blue_1' ||
    sm.filename === 'F1904-134_VNIR-SWIR_colors_Blue_2',
);

const allMetadata = useAllMetadata();
const pigmentMetadata = allMetadata['Paint Pigments & Supplies'];

const bluesMetadata = pigmentMetadata.filter(
  (sm) =>
    sm.filename === 'Pigments_for_TWT_2024-09-17_Azurite' ||
    sm.filename === 'Pigments_for_TWT_2024-09-17_Egyptian_Blue' ||
    sm.filename === 'Pigments_for_TWT_2024-09-17_Indigo' ||
    sm.filename === 'Pigments_for_TWT_2024-09-17_Prussian_Blue' ||
    sm.filename === 'Spectra_Paper_FORS_NMAA_CHSOS',
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
