<template>
  <MuseumLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <h2>Two Blue Spectra</h2>
        <BRow>
          <BCol cols="12" lg="6">
            <img
              src="/includes/SpecLab_Data_Files/Museum_Conservation/Hokusai_painting_colors_labeled_670px_unsharp.jpg"
              class="mb-2 challenge-image"
            />
          </BCol>
          <BCol cols="12" lg="6">
            <p>This is a painting by the artist Hokusai.</p>
            <p>
              Art conservators have taken reflection spectra of 2 blue regions
              of interest, marked by the white and black squares.
            </p>
            <p>
              Compare the spectra of the two blue pigments against each other
              and note their similarities and differences in visible light and
              in the infrared.
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
            title="ROI B1"
            :custom-metadata="hokusaiB1Metadata"
            :spectrum-picker-placeholder="null"
          />
        </template>
        <template #bottom-tool>
          <ToolCard
            title="ROI B2"
            :custom-metadata="hokusaiB2Metadata"
            :spectrum-picker-placeholder="null"
          />
        </template>
      </ToolControlGroup>
    </template>
  </MuseumLayout>
</template>

<script setup lang="ts">
import { useAllMetadata } from '@/utils/metadataUtils';
import { useHead } from '@unhead/vue';

useHead({
  title: 'Spectrum Lab | Two Blues',
});

const allMetadata = useAllMetadata();
const museumMetadata = allMetadata['Museum Conservation'];
const hokusaiB1Metadata = museumMetadata.filter(
  (sm) => sm.filename === 'F1904-134_VNIR-SWIR_colors_Blue_1',
);
const hokusaiB2Metadata = museumMetadata.filter(
  (sm) => sm.filename === 'F1904-134_VNIR-SWIR_colors_Blue_2',
);
</script>
