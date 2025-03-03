<template>
  <MuseumLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <h2>Paint Colors and Spectra</h2>
        <BRow>
          <BCol cols="12" lg="6">
            <img src="/includes/SpecLab_Data_Files/Museum_Curation/Chokha_painting_colors_labeled_670px_unsharp.jpg" class="mb-2 challenge-image" />
          </BCol>
          <BCol cols="12" lg="6">
            <p>
              This painting by the artist Chokha is displayed at the Smithsonian's National Museum of Asian Art.
            </p>
            <p>
              Art conservators have taken reflection spectra of different regions of interest, marked by the white and black squares. The wavelengths of light that are reflected by the paint in the visible part of the spectrum determines what color our eyes see.
            </p>
            <p>
              Focus on the visible part of the spectrum for these four "mystery" spectra and see if you can identify which regions of the painting they were taken from.
            </p>
            <p>
              <font-awesome-icon icon="pencil"></font-awesome-icon> Enter your answers in your <strong>Spectrum Notebook</strong>.
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
            :custom-metadata="museumMetadata"
            spectrum-picker-placeholder="Select mystery pigment"
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
  title: 'Spectrum Lab | Museum Paint Colors',
});

const allMetadata = useAllMetadata();
const museumMetadata = allMetadata['Museum Conservation'];
</script>
