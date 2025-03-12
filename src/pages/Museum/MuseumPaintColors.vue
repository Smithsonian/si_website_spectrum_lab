<template>
  <MuseumLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <h2>Paint Colors and Spectra</h2>
        <BRow>
          <BCol cols="12" lg="6">
            <ImageZoomOverlay :src="chokhaChallenge" :zoom-src="chokhaBig" />
          </BCol>
          <BCol cols="12" lg="6">
            <p>
              This painting by the artist Chokha is displayed at the
              Smithsonian's National Museum of Asian Art.
            </p>
            <p>
              Art conservators have taken reflection spectra of different
              regions of interest, marked by the white and black squares. The
              wavelengths of light that are reflected by the paint in the
              visible part of the spectrum determines what color our eyes see.
            </p>
            <p>
              Focus on the visible part of the spectrum for these four "mystery"
              spectra and see if you can identify which regions of the painting
              they were taken from.
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
      <ToolControlGroup :show-normalize-picker="true">
        <template #top-tool>
          <ToolCard
            title="Paint Spectra"
            :custom-metadata="customMetadata"
            spectrum-picker-placeholder="Select mystery pigment"
          />
        </template>
      </ToolControlGroup>
    </template>
  </MuseumLayout>
</template>

<script setup lang="ts">
import { useCustomMetadata } from '@/utils/metadataUtils';
import { useHead } from '@unhead/vue';
import chokhaChallenge from '@/assets/spectrum_images/Museum_Conservation/chokha_910.webp';
import chokhaBig from '@/assets/spectrum_images/Museum_Conservation/chokha_big.webp';

useHead({
  title: 'Spectrum Lab | Museum Paint Colors',
});

const chokhaR1 = useCustomMetadata(
  'Museum Conservation',
  'S2018-1-76_VNIR-SWIR_colors_Red_1',
  {
    title: 'Chokha Painting, Mystery Pigment 1',
    imagePath: '',
    bigImagePath: '',
  },
);
const chokhaB2 = useCustomMetadata(
  'Museum Conservation',
  'S2018-1-76_VNIR-SWIR_colors_Blue_2',
  {
    title: 'Chokha Painting, Mystery Pigment 2',
    imagePath: '',
    bigImagePath: '',
  },
);
const chokhaY1 = useCustomMetadata(
  'Museum Conservation',
  'S2018-1-76_VNIR-SWIR_colors_Yellow_1',
  {
    title: 'Chokha Painting, Mystery Pigment 3',
    imagePath: '',
    bigImagePath: '',
  },
);
const chokhaW1 = useCustomMetadata(
  'Museum Conservation',
  'S2018-1-76_VNIR-SWIR_colors_White_1',
  {
    title: 'Chokha Painting, Mystery Pigment 4',
    imagePath: '',
    bigImagePath: '',
  },
);
const customMetadataMaybe = [chokhaR1, chokhaB2, chokhaY1, chokhaW1];
const customMetadata = customMetadataMaybe.filter((sm) => !!sm);
</script>
