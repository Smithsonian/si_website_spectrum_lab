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
            uses light, color, and spectra to enhance the appearance of art on
            display at the Smithsonian American Art Museum & Renwick Gallery.
          </InstructionRow>
        </template>
        <template #middle>
          <VideoJSPlayer :other-options="{ poster }">
            <source
              src="https://lweb.cfa.harvard.edu/smgdvl/datalabs/museum_lighting_design-20250724.mp4"
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
import captions from '@/assets/video_metadata/museum_lighting_design.vtt';
import poster from '@/assets/video_metadata/museum_lighting_design_poster.jpg';

useSpecLabHead('Explore Lighting Design', 'Fish Tank');
</script>
