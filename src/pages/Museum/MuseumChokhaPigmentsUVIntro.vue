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
            Watch Dr. Webb demonstrate the use of an ultraviolet light and
            filter to capture how pigments absorb and reflect UV light, and how
            some pigments cause UV-induced visible luminescence (UVL), where
            pigments absorb UV light and then emit visible light.
          </InstructionRow>
          <InstructionRow rowType="Intro">
            More information on different conservation techniques can be found
            at this
            <BLink
              href="https://waps.cfa.harvard.edu/microobservatory/spectrum/large_files/Museum%20Conservation%20Technique%20Description.pdf"
              target="_blank"
              rel="noopener"
              >Reference Sheet</BLink
            >.
          </InstructionRow>
        </template>
        <template #middle>
          <VideoJSPlayer :other-options="{ poster }">
            <source
              src="https://lweb.cfa.harvard.edu/smgdvl/datalabs/museum_uvl-20250712.mp4"
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
import captions from '@/assets/video_metadata/museum_uvl.vtt';
import poster from '@/assets/video_metadata/museum_uvl_poster.webp';

useSpecLabHead('Chokha Pigments Part 2: UVL Intro', 'Museum');
</script>
