<template>
  <ExoplanetsLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <template #top>
          <InstructionHeader>
            Capturing Spectra Part 2: Telescope Point of View
          </InstructionHeader>
          <InstructionRow row-type="Investigate">
            <p>
              Consider this schematic of two transiting exoplanets at 2
              positions in their orbit:
              <br /><span class="challenge-emphasis">A)</span> a “Hot Jupiter”
              that orbits so close to its star it goes around once every few
              days; and <br /><span class="challenge-emphasis">B)</span> an
              Earth-sized planet that is much farther from the star, and so only
              transits once a year or so.
            </p>
            <p>
              In positions <span class="challenge-emphasis">A</span> and
              <span class="challenge-emphasis">B</span>, the telescope is able
              to detect a
              <span style="font-weight: 700">transmission</span> spectrum of
              starlight passing through the planet’s atmosphere.
            </p>
            <p>
              In positions <span class="challenge-emphasis">A-1</span> and
              <span class="challenge-emphasis">B-1</span>, the telescope detects
              both thermal <span style="font-weight: 700">emission</span> and
              <span style="font-weight: 700">reflected</span> starlight from the
              planets–PLUS the light of the star. Astronomers subtract the
              starlight-only from when the planets go behind the star to get
              just the light of the planets.
            </p>
          </InstructionRow>
          <InstructionRow row-type="Notebook">
            Answer this question in your Notebook.
            <template #steps>
              <InstructionStep>
                Explain why you think most exoplanet spectra captured to date
                are from Hot Jupiters rather than from Earth-like planets.
              </InstructionStep>
            </template>
          </InstructionRow>
        </template>
        <template #middle>
          <div class="bg-gen-black">
            <img
              class="d-block mx-auto"
              style="max-width: 100%"
              src="/src/assets/exoplanet_atmosphere_schematic.png"
              alt="Diagram of 2 transiting exoplanets at different orbital positions that show a schematic of their atmospheres."
            />
          </div>
        </template>
        <template #bottom>
          <LeftRightGroup>
            <template #left>
              <NextPrevButton
                light
                direction="prev"
                to="exoplanet-light-interactions"
              >
                part 1
              </NextPrevButton>
            </template>
            <template #right>
              <NextPrevButton light direction="next" to="../clear-skies">
                next section
              </NextPrevButton>
            </template>
          </LeftRightGroup>
        </template>
      </ChallengeCard>
    </template>
  </ExoplanetsLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';

useSpecLabHead('Telescope Point of View', 'Exoplanets');
</script>
