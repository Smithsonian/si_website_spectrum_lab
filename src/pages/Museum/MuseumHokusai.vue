<template>
  <MuseumLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <template #top>
          <InstructionHeader>Hokusai Painting</InstructionHeader>
          <InstructionRow rowType="Art">
            This painting by the artist Hokusai is also displayed at the
            Smithsonian's National Museum of Asian Art.
            <p>
              For a richer experience, follow this
              <BLink
                href="https://iiif.si.edu/mirador/?manifest=https://ids.si.edu/ids/manifest/FS-5617_11"
                target="_blank"
                rel="noopener"
                >link</BLink
              >, where you will find a high-resolution image of the painting.
              (The image will open in a new tab. Return to this tab when you
              have finished observing the painting.)
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
          <ImageZoomOverlay :src="hokusaiChallenge" :zoom-src="hokusaiBig" />
        </template>
        <template #bottom>
          <LeftRightGroup>
            <template #left>
              <NextPrevButton direction="prev" to="chokha-pigments" light>
                previous section
              </NextPrevButton>
            </template>
            <template #right>
              <NextPrevButton direction="next" to="hokusai-pigments" light>
                next section
              </NextPrevButton>
            </template>
          </LeftRightGroup>
        </template>
      </ChallengeCard>
    </template>
  </MuseumLayout>
</template>

<script setup lang="ts">
import hokusaiChallenge from '@/assets/spectrum_data/Museum_Conservation/Hokusai_color_910.webp';
import hokusaiBig from '@/assets/spectrum_data/Museum_Conservation/Hokusai_color_big.webp';
import { useSpecLabHead } from '@/utils/locationUtils';

useSpecLabHead('Hokusai Painting', 'Museum');
</script>
