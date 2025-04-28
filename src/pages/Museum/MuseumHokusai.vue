<template>
  <MuseumLayout>
    <template #challenge-tab>
      <ChallengeCard remove-padding>
        <div class="pt-3 px-3">
          <InstructionHeader>Part 1: Hokusai Painting</InstructionHeader>
          <InstructionRow rowType="Art">
            This painting by the artist Hokusai is also displayed at the
            Smithsonian's National Museum of Asian Art.
          </InstructionRow>
          <InstructionRow rowType="Notebook">
            <span class="needs-updating"> Observe & reflect on artwork </span>
          </InstructionRow>
        </div>
        <div
          class="rounded-bottom-4"
          style="background-color: var(--gen-black)"
        >
          <ImageZoomOverlay :src="hokusaiChallenge" :zoom-src="hokusaiBig" />
        </div>
      </ChallengeCard>
      <LeftRightGroup class="mt-5">
        <template #right>
          <NextPrevButton direction="next" to="pigments" dark>
            Part 2
          </NextPrevButton>
        </template>
      </LeftRightGroup>
    </template>
  </MuseumLayout>
</template>

<script setup lang="ts">
import hokusaiChallenge from '@/assets/spectrum_data/Museum_Conservation/Hokusai_color_910.webp';
import hokusaiBig from '@/assets/spectrum_data/Museum_Conservation/Hokusai_color_big.webp';
import { useSpecLabHead } from '@/utils/locationUtils';

useSpecLabHead('Hokusai Painting', 'Museum');
</script>
