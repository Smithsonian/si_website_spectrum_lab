<template>
  <ExoplanetsLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <template #top>
          <InstructionHeader>Researching Exoplanets</InstructionHeader>
          <InstructionRow row-type="Intro">
            The first discovery of an exoplanet orbiting a sun-like star was in
            1995. Since then, thousands of exoplanets have been discovered.
            Scientists are now using spectra captured by the James Webb Space
            Telescope to identify what elements and molecules are in the
            atmospheres of these exoplanets.
          </InstructionRow>
          <InstructionRow row-type="Video">
            Watch this video that shows how exoplanet scientist Mercedes
            López-Morales studies the light coming from solar systems beyond our
            own to figure out what these planets are like, including looking for
            molecules that might be “biosignatures,” or evidence for life.
          </InstructionRow>
          <InstructionRow row-type="Notebook">
            Answer these questions in your Notebook.
            <template #steps>
              <InstructionStep>
                What are some of
                <em><span class="challenge-bold">your</span></em> questions
                about other worlds in the universe?
              </InstructionStep>
              <InstructionStep>
                What are some questions that spectra from exoplanets might help
                astronomers answer?
              </InstructionStep>
            </template>
          </InstructionRow>
        </template>
        <template #middle>
          <VideoJSPlayer :other-options="{ poster }">
            <source
              src="https://lweb.cfa.harvard.edu/smgdvl/datalabs/spectrumlab_exoplanet_spectroscopy-20250910.mp4"
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
              <NextPrevButton direction="next" light to="capturing-spectra">
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
import captions from '@/assets/video_metadata/spectrumlab_exoplanet_spectroscopy.vtt';
import poster from '@/assets/video_metadata/spectrumlab_exoplanet_spectroscopy_poster.jpg';

useSpecLabHead('Researching Exoplanets', 'Exoplanets');
</script>
