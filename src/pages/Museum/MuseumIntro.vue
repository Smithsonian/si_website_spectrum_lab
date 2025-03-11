<template>
  <MuseumLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <h2>Science of Art Conservation</h2>
        <BRow>
          <BCol cols="12" lg="7">
            <video width="100%" controls>
              <source
                src="https://waps.cfa.harvard.edu/microobservatory/spectrum/includes/Videos/keats2pass.webm"
                type="video/webm"
              />
              <source
                src="https://waps.cfa.harvard.edu/microobservatory/spectrum/includes/Videos/Conservation_Science-Keats_Materials_Identification_20250131.mp4"
                type="video/mp4"
              />
              Download the
              <a
                href="https://waps.cfa.harvard.edu/microobservatory/spectrum/includes/Videos/Conservation_Science-Keats_Materials_Identification_20250131.mp4"
                >video</a
              >.
            </video>
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
