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
            Watch this video that shows how imaging scientist Keats Webb uses
            light, color, and spectra to better understand paintings at the
            Smithsonian Institution.
          </InstructionRow>
          <InstructionRow rowType="Notebook">
            <template #steps>
              <InstructionStep class="needs-updating">
                Write a couple of questions to check that students watched video
              </InstructionStep>
            </template>
          </InstructionRow>
        </template>
        <template #middle>
          <VideoJSPlayer>
            <source
              src="https://lweb.cfa.harvard.edu/smgdvl/datalabs/conservation_science.mp4"
              type="video/mp4"
            />
            <track
              label="Captions"
              kind="captions"
              srclang="en"
              :src="captions"
            />
          </VideoJSPlayer>
        </template>
        <template #bottom>
          <LeftRightGroup>
            <template #right>
              <NextPrevButton direction="next" to="paint-colors" dark>
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
import captions from '@/assets/conservation_science.vtt';

useSpecLabHead('Intro', 'Museum');
</script>
