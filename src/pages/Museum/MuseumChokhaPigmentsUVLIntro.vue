<template>
  <MuseumLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <template #top>
          <InstructionHeader
            >Chokha Pigments Part 2: UVL Intro</InstructionHeader
          >
          <InstructionRow rowType="Intro">
            Light, color, and spectra are important components of art
            conservation work done at museums. By investigating how paint
            pigments reflect light at different wavelengths, art conservators
            can learn what materials are used in a painting and make decisions
            about how to best care for and restore the artwork.
          </InstructionRow>
          <InstructionRow rowType="Video">
            Watch this video that shows how imaging scientist Keats Webb and
            conservation scientist Matthew Clarke use light, color, and spectra
            to better understand paintings at the Smithsonian Institution.
          </InstructionRow>
          <InstructionRow rowType="Notebook">
            Answer this question after watching the video:
            <template #steps>
              <InstructionStep>
                What can conservation scientists learn about a painting from
                knowing what pigments were used in it?
              </InstructionStep>
            </template>
          </InstructionRow>
        </template>
        <template #middle>
          <VideoJSPlayer>
            <source
              src="https://lweb.cfa.harvard.edu/smgdvl/datalabs/museum_uvl.mp4"
              type="video/mp4"
            />
          </VideoJSPlayer>
        </template>
        <template #bottom>
          <LeftRightGroup>
            <template #left>
              <NextPrevButton direction="prev" to="spectra" light>
                part 1
              </NextPrevButton>
            </template>
            <template #right>
              <NextPrevButton direction="next" to="uvl" light>
                part 3
              </NextPrevButton>
            </template>
          </LeftRightGroup>
        </template>
      </ChallengeCard>
    </template>
  </MuseumLayout>
</template>

<script setup lang="ts">
import VideoJSPlayer from '@/components/VideoJSPlayer.vue';
import { useSpecLabHead } from '@/utils/locationUtils';

useSpecLabHead('Chokha Pigments Part 2: UVL Intro', 'Museum');
</script>
