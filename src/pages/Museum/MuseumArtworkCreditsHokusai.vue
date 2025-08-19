<template>
  <MuseumLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <template #top>
          <InstructionHeader>Artwork Credits: Hokusai </InstructionHeader>
          <InstructionRow rowType="Art">
            <p>
              <span style="font-weight: 700">Credits:</span> Katsushika Hokusai
              / National Museum of Asian Art, Smithsonian Institution, Freer
              Collection, Gift of Charles Lang Freer, F1904.134
            </p>
          </InstructionRow>
        </template>
        <template #middle>
          <ImageZoomOverlay :src="hokusaiChallenge" :zoom-src="hokusaiBig" />
        </template>
        <template #bottom>
          <a
            href="#"
            @click.prevent="showInfo = !showInfo"
            style="cursor: pointer; text-decoration: underline"
            class="color-slr-med-grey"
          >
            {{
              showInfo ? 'Hide information' : 'Learn more about this painting'
            }}
          </a>
          <div v-if="!showInfo" class="mb-4"></div>
          <div v-if="showInfo" style="margin-top: 1rem">
            <p>
              <span style="font-weight: 700">Title:</span> The Lute and White
              Snake of Benten (Sarasvati)
            </p>
            <p>
              <span style="font-weight: 700">Title:</span> An albino snake with
              red eyes slithers across a lute wrapped in a colorful bag. The
              snake and lute are symbols of the deity Benten, the patron goddess
              of music and literature. Hokusai chose a fitting subject to
              celebrate the year 1847, the year of the snake. His signature also
              alludes to the relationship between snakes and the zodiac for the
              year Kōka 4 (1847).
            </p>
          </div>
          <LeftRightGroup>
            <template #left>
              <NextPrevButton to="chokha" direction="prev" light>
                Chokha
              </NextPrevButton>
            </template>
          </LeftRightGroup>
        </template>
      </ChallengeCard>
    </template>
  </MuseumLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import hokusaiChallenge from '@/assets/spectrum_data/Museum_Conservation/Hokusai_color_910.webp';
import hokusaiBig from '@/assets/spectrum_data/Museum_Conservation/Hokusai_color_big.webp';
import { useSpecLabHead } from '@/utils/locationUtils';

useSpecLabHead('Hokusai Painting Credits', 'Museum');

const showInfo = ref(false);
</script>
