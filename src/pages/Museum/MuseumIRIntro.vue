<template>
  <MuseumLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <template #top>
          <InstructionHeader
            >Hokusai IR Imaging Part 1: IR Intro</InstructionHeader
          >
          <InstructionRow rowType="Video">
            See Dr. Webb demonstrate how an infrared light and filter can
            capture how pigments absorb and reflect IR light, and how combined
            false-color images can provide additional information about
            pigments.
          </InstructionRow>
          <InstructionRow rowType="Intro">
            More information on different conservation techniques can be found
            at this
            <BLink
              href="https://drive.google.com/file/d/1glxaK8Rq7QUYG0l5UlcYezOxpmYehu-j/view?usp=sharing"
              target="_blank"
              rel="noopener"
              >Reference Sheet</BLink
            >.
          </InstructionRow>
        </template>
        <template #middle>
          <VideoJSPlayer>
            <source
              src="https://lweb.cfa.harvard.edu/smgdvl/datalabs/museum_ir_imaging.mp4"
              type="video/mp4"
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

useSpecLabHead('Whole-image Techniques Part 1: IR Intro', 'Museum');
</script>
