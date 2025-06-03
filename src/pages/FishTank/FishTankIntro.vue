<template>
  <FishTankLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <template #top>
          <InstructionHeader>Explore Lighting Design</InstructionHeader>
          <InstructionRow row-type="Intro">
            For this project, you’ll first learn about how a lighting designer
            at the Smithsonian American Art Museum uses light to make exhibits
            pop!
          </InstructionRow>
          <InstructionRow row-type="Video">
            Watch this video that shows how lighting designer Scott Rosenfeld
            uses light, color, and spectra to enhance art on display look as
            good as it can at the Smithsonian American Art Museum & Renwick
            Gallery.
          </InstructionRow>
        </template>
        <template #middle>
          <VideoJSPlayer>
            <source
              src="https://lweb.cfa.harvard.edu/smgdvl/datalabs/museum_lighting_design.mp4"
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
              <NextPrevButton
                direction="next"
                light
                to="reflection-spectra-colors"
              >
                next section
              </NextPrevButton>
            </template>
          </LeftRightGroup>
        </template>
      </ChallengeCard>
    </template>
  </FishTankLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';
import captions from '@/assets/captions/museum_lighting_design.vtt';

useSpecLabHead('Explore Lighting Design', 'Fishtank');
</script>
