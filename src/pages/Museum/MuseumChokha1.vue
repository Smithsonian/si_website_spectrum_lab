<template>
  <MuseumLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <template #top>
          <InstructionHeader
            >Chokha Painting Part 1: Observe the Artwork</InstructionHeader
          >
          <InstructionRow rowType="Art">
            This painting by the artist Chokha is displayed at the Smithsonian's
            National Museum of Asian Art.
            <p>
              For a richer experience, follow this
              <a
                href="https://iiif.si.edu/mirador/?manifest=https://ids.si.edu/ids/manifest/FS-RLS2018.3.17_001crop"
                >link</a
              >, where you will find a high-resolution image of the painting.
              (The image will open in a new tab. Return to this tab when you are
              finished observing the painting.)
            </p>
            <p>
              Observe the scene depicted, the colors used, and the style of the
              painting.
            </p>
          </InstructionRow>
          <InstructionRow rowType="Notebook">
            Answer the questions in your Notebook about the painting.
          </InstructionRow>
        </template>
        <template #middle>
          <ImageZoomOverlay :src="chokhaChallenge" :zoom-src="chokhaBig" />
        </template>
        <template #bottom>
          <LeftRightGroup>
            <template #right>
              <NextPrevButton to="colors-spectra" direction="next">
                Part 2
              </NextPrevButton>
            </template>
          </LeftRightGroup>
        </template>
      </ChallengeCard>
    </template>
  </MuseumLayout>
</template>

<script setup lang="ts">
import chokhaChallenge from '@/assets/spectrum_data/Museum_Conservation/Chokha_color_910.webp';
import chokhaBig from '@/assets/spectrum_data/Museum_Conservation/Chokha_color_big.webp';
import { useSpecLabHead } from '@/utils/locationUtils';

useSpecLabHead('Chokha Painting', 'Museum');
</script>
