<template>
  <TemperatureLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <template #top>
          <InstructionHeader> Thermal Emission </InstructionHeader>
          <InstructionRow rowType="Slideshow">
            This information about Thermal Emission can be reviewed as a class
            discussion, in small groups, or on your own, as instructed by your
            teacher.
          </InstructionRow>
          <InstructionRow row-type="Simulation">
            <p class="mt-1">
              <span class="challenge-bold">OPTIONAL:</span> Explore the
              <span class="challenge-bold">PhET simulation</span> on thermal
              (also known as "blackbody") spectra at the bottom of the page.
            </p>
            <template #steps>
              <InstructionStep>
                Adjust the temperature on the thermometer to see how the
                spectrum changes as the temperature increases and decreases.
              </InstructionStep>
              <InstructionStep>
                Notice what colors in the visible spectrum are emitted for
                different temperatures. (The color the object would appear to
                you is approximated in the star-shaped icon next to the B, G, R
                symbols, above the spectrum graph.)
              </InstructionStep>
              <InstructionStep>
                Adjust the zoom levels of the x-axis (wavelength) and y-axis
                (brightness) as necessary.
              </InstructionStep>
            </template>
          </InstructionRow>
        </template>
        <template #middle>
          <div class="rounded-bottom-4 bg-gen-black">
            <img
              src="/src/assets/thermal_emission.png"
              width="100%"
              class="d-block mx-auto"
            />
          </div>
        </template>
        <template #bottom>
          <LeftRightGroup class="mt-5">
            <template #left>
              <NextPrevButton direction="prev" to="predictions" light>
                previous section
              </NextPrevButton>
            </template>
            <template #right>
              <NextPrevButton direction="next" to="stars" light>
                next section
              </NextPrevButton>
            </template>
          </LeftRightGroup>
          <PhetThermalEmissionIframe class="mt-5" bordered />
        </template>
      </ChallengeCard>
    </template>
  </TemperatureLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';

useSpecLabHead('Thermal Emission', 'Temperature');
</script>
