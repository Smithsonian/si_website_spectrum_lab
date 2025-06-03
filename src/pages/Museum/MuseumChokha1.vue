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
              Observe the scene depicted, the colors used, and the style of the
              painting.
            </p>
          </InstructionRow>
          <InstructionRow rowType="Notebook">
            Answer these questions:
            <template #steps>
              <InstructionStep>
                Describe what you see. What do you notice or find yourselve
                wondering about the painting?
              </InstructionStep>
              <InstructionStep>
                What details in the painting do you think could be helpful to
                you in trying to pinpoint the region and time period this
                painting comes from?
              </InstructionStep>
            </template>
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
