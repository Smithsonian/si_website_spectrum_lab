<template>
  <MuseumLayout>
    <template #challenge-tab>
      <ChallengeCard remove-padding>
        <div class="py-3 px-3">
          <InstructionHeader> Paint Colors and Spectra </InstructionHeader>
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
            Add a see-think-wonder thing
          </InstructionRow>
        </div>
        <div
          class="rounded-bottom-4"
          style="background-color: var(--gen-black)"
        >
          <ImageZoomOverlay :src="chokhaChallenge" :zoom-src="chokhaBig" />
        </div>
      </ChallengeCard>
      <LeftRightGroup class="mt-5">
        <template #right>
          <NextPrevButton to="paint-colors" direction="next">
            Part 2
          </NextPrevButton>
        </template>
      </LeftRightGroup>
    </template>
  </MuseumLayout>
</template>

<script setup lang="ts">
import chokhaChallenge from '@/assets/spectrum_data/Museum_Conservation/chokha_mystery_labels_910.webp';
import chokhaBig from '@/assets/spectrum_data/Museum_Conservation/chokha_mystery_labels_big.webp';
import { useSpecLabHead } from '@/utils/locationUtils';

useSpecLabHead('Paint Colors', 'Museum');
</script>
