<template>
  <ExoplanetsLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <template #top>
          <InstructionHeader>
            Discovering and researching exoplanets
          </InstructionHeader>
          <InstructionRow row-type="Video">
            <span class="needs-updating">&nbsp;Lorem ipsum</span>
          </InstructionRow>
        </template>
        <template #middle>
          <VideoJSPlayer :other-options="{ poster: titleCard }">
            <source
              src="https://lweb.cfa.harvard.edu/smgdvl/datalabs/spectrumlab_exoplanet_spectroscopy.mp4"
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
        <template #bottom
          ><LeftRightGroup>
            <template #right>
              <NextPrevButton direction="next" light to="clear-skies">
                next section
              </NextPrevButton>
            </template>
          </LeftRightGroup></template
        >
      </ChallengeCard>
    </template>
  </ExoplanetsLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';
import captions from '@/assets/video_metadata/exoplanet_spectroscopy.vtt';
import titleCard from '@/assets/video_metadata/exoplanet_spectroscopy_title_card.png';

useSpecLabHead('Intro', 'Exoplanets');
</script>
