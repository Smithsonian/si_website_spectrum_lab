<template>
  <MuseumLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <template #top>
          <InstructionHeader> Science of Art Conservation </InstructionHeader>
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
            Answer these questions after watching the video:
            <template #steps>
              <InstructionStep>
                Describe 2 techniques that allow conservation scientists to
                determine what pigments were used in a painting.
              </InstructionStep>
              <InstructionStep>
                What can conservation scientists learn about a painting from
                knowing what pigments were used in it?
              </InstructionStep>
            </template>
          </InstructionRow>
        </template>
        <template #middle>
          <VideoJSPlayer :other-options="{ poster: titleCard }">
            <source
              src="https://lweb.cfa.harvard.edu/smgdvl/datalabs/multiple_wavelength_imaging_conservation_science.mp4"
              type="video/mp4"
            />
          </VideoJSPlayer>
        </template>
        <template #bottom>
          <LeftRightGroup>
            <template #right>
              <NextPrevButton direction="next" to="chokha-painting" light>
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
import VideoJSPlayer from '@/components/VideoJSPlayer.vue';
import { useSpecLabHead } from '@/utils/locationUtils';
import titleCard from '@/assets/video_metadata/multiple_wavelength_imaging_conservation_science.png';

useSpecLabHead('Intro', 'Museum');
</script>
