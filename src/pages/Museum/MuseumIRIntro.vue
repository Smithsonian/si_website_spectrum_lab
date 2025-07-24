<template>
  <MuseumLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <template #top>
          <InstructionHeader
            >Hokusai IR Imaging Part 1: IR Intro</InstructionHeader
          >
          <InstructionRow rowType="Video">
            Watch Dr. Webb demonstrate the use of an infrared light and filter
            to capture how pigments absorb and reflect IR light, and how
            combined false-color images can provide additional information about
            pigments.
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
              src="https://lweb.cfa.harvard.edu/smgdvl/datalabs/museum_ir_imaging-20250712.mp4"
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
              <NextPrevButton direction="prev" to="../hokusai-pigments" light>
                previous section
              </NextPrevButton>
            </template>
            <template #right>
              <NextPrevButton direction="next" to="blue-spectra" light>
                part 2
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
import captions from '@/assets/video_metadata/museum_ir_imaging.vtt';
import poster from '@/assets/video_metadata/museum_ir_imaging_poster.webp';

useSpecLabHead('Whole-image Techniques Part 1: IR Intro', 'Museum');
</script>
