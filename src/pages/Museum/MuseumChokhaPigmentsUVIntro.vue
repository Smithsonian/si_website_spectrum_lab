<template>
  <MuseumLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <template #top>
          <InstructionHeader
            >Chokha Pigments Part 2: UV Imaging</InstructionHeader
          >
          <InstructionRow rowType="Intro">
            Sometimes a spectrum alone does not allow scientists to identify a
            pigment with absolute certainty. Other techniques can be used to
            provide additional information, such as imaging techniques that use
            ultraviolet (UV) light.
          </InstructionRow>
          <InstructionRow rowType="Video">
            See Dr. Webb demonstrate how an ultraviolet light and filter can
            capture how pigments absorb and reflect UV light, and how some
            pigments cause UV-induced fluorescence (UVL), where pigments absorb
            UV light and then emit visible light.
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
