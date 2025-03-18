<template>
  <MuseumLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <h2>Science of Art Conservation</h2>
        <BRow>
          <BCol cols="12" lg="7">
            <VideoJSPlayer>
              <source
                src="https://lweb.cfa.harvard.edu/smgdvl/datalabs/Conservation_Science-Keats_Materials_Identification_20250131.webm"
                type="video/webm"
              />
              <source
                src="https://lweb.cfa.harvard.edu/smgdvl/datalabs/Conservation_Science-Keats_Materials_Identification_20250131.mp4"
                type="video/mp4"
              />
            </VideoJSPlayer>
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
import VideoJSPlayer from '@/components/VideoJSPlayer.vue';
import { useHead } from '@unhead/vue';

useHead({
  title: 'Spectrum Lab | Museum Intro',
});
</script>
