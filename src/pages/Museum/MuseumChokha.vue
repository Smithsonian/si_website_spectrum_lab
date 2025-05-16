<template>
  <MuseumLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <template #top>
          <InstructionHeader>Part 1: Chokha Painting </InstructionHeader>
          <InstructionRow rowType="Art">
            This painting by the artist Chokha is displayed at the Smithsonian's
            National Museum of Asian Art.
            <p>
              Art conservators have taken reflection spectra of different
              regions of interest, marked by the white and black squares. The
              wavelengths of light that are reflected by the paint in the
              visible part of the spectrum determines what color our eyes see.
            </p>
          </InstructionRow>
          <InstructionRow rowType="Notebook">
            <span class="needs-updating">
              Edit questions
              <ol>
                <li>
                  Observe the composition, the colors, and the iconography.
                  Describe what you see.
                </li>
                <li>
                  (Reference SI Learning Labs content on close observation of
                  artwork.)
                </li>
              </ol>
            </span>
          </InstructionRow>
        </template>
        <template #middle>
          <ImageZoomOverlay :src="chokhaChallenge" :zoom-src="chokhaBig" />
        </template>
        <template #bottom>
          <LeftRightGroup>
            <template #right>
              <NextPrevButton to="mystery" direction="next">
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
