<template>
  <MuseumLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <h2>Science of Art Conservation</h2>
        <BRow>
          <BCol cols="12" lg="7">
            <img
              src="/src/assets/SI_paint_samples_uv.png"
              class="mb-2 challenge-image"
            />
          </BCol>
          <BCol cols="12" lg="5">
            <p>
              Light, color, and spectra are important components of art
              conservation work done at museums. By investigating how paint
              pigments reflect light at different wavelengths, art conservators
              can learn what materials are used in a painting and make decisions
              about how to best care for and restore the artwork.
            </p>
            <p>
              Watch this video that shows how imaging scientist Keats Webb uses
              light, color, and spectra to better understand paintings at the
              Smithsonian Institution.
            </p>
          </BCol>
        </BRow>
      </ChallengeCard>
    </template>
  </MuseumLayout>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue';

useHead({
  title: 'Spectrum Lab | Museum Intro',
});
</script>
