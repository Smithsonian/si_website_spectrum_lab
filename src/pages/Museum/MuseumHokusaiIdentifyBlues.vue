<template>
  <MuseumLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <h2>Identify the Pigments</h2>
        <BRow>
          <BCol cols="12" lg="6">
            <img
              src="/src/assets/spectrum_data/Museum_Conservation/Hokusai_painting_colors_labeled_670px_unsharp.jpg"
              class="mb-2 challenge-image"
            />
          </BCol>
          <BCol cols="12" lg="6">
            <p>
              Now, compare the spectra from the two blue regions of interest
              with a sample of blue paint pigments and see if you can identify
              which pigments correspond to each blue region of interest in the
              painting
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
            title="Hokusai Blues"
            :custom-metadata="hokusaiBluesMetadata"
            spectrum-picker-placeholder="Select blue pigment"
          />
        </template>
        <template #bottom-tool>
          <ToolCard
            title="Blue Comparison Pigments"
            :custom-metadata="bluesMetadata"
            spectrum-picker-placeholder="Select comparison pigment"
          />
        </template>
      </ToolControlGroup>
    </template>
  </MuseumLayout>
</template>

<script setup lang="ts">
import {
  useCustomMetadata,
  useAllMetadata,
  imageUrlFromPath,
} from '@/utils/metadataUtils';
import { useHead } from '@unhead/vue';

useHead({
  title: 'Spectrum Lab | Two Blues',
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

const hokusaiBluesMetadata = customMetadata.filter(
  (sm) =>
    sm.filename === 'F1904-134_VNIR-SWIR_colors_Blue_1' ||
    sm.filename === 'F1904-134_VNIR-SWIR_colors_Blue_2',
);

const allMetadata = useAllMetadata();
const museumMetadata = allMetadata['Museum Conservation'];
const bluesMetadata = museumMetadata.filter(
  (sm) =>
    sm.title === 'Prussian Blue' ||
    sm.title === 'Indigo' ||
    sm.title === 'Azurite' ||
    sm.title === 'Egyptian Blue',
);
</script>
