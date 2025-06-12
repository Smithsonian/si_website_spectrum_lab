<template>
  <MuseumLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <template #top>
          <InstructionHeader>Hokusai Painting</InstructionHeader>
          <InstructionRow rowType="Art">
            This painting by the artist Hokusai is also displayed at the
            Smithsonian's National Museum of Asian Art.
          </InstructionRow>
          <InstructionRow rowType="Notebook">
            <span class="needs-updating"> Observe & reflect on artwork </span>
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
