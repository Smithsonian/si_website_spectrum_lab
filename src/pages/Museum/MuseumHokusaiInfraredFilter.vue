<template>
  <MuseumLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <h2>Image with IR Filter</h2>
        <BRow>
          <BCol cols="12" lg="6">
            <img
              src="/includes/SpecLab_Data_Files/Museum_Conservation/Hokusai_905nm.jpg"
              class="mb-2 challenge-image"
            />
          </BCol>
          <BCol cols="12" lg="6">
            <p>
              Check out this image of the Hokusai painting taken with a filter
              that has a wavelength of 905nm, which corresponds to infrared
              light. Does it look how you would expect based on the similarities
              and differences of the two blue pigments whose spectra you
              explored?
            </p>
            <p>
              Can you predict with confidence which of the two pigments was used
              to paint the region labeled B3?
            </p>
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
import { useCustomMetadata } from '@/utils/metadataUtils';
import { useHead } from '@unhead/vue';

useHead({
  title: 'Spectrum Lab | Two Blues',
});

const hokusaiB1 = useCustomMetadata(
  'Museum Conservation',
  'F1904-134_VNIR-SWIR_colors_Blue_1',
  {
    imagePath: 'Museum_Conservation/Hokusai_B1_zoom.png',
    bigImagePath: '',
  },
);

const hokusaiB2 = useCustomMetadata(
  'Museum Conservation',
  'F1904-134_VNIR-SWIR_colors_Blue_2',
  {
    imagePath: 'Museum_Conservation/Hokusai_B2_zoom.png',
    bigImagePath: '',
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
