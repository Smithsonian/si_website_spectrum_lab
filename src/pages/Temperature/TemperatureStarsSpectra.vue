<template>
  <TemperatureLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <InstructionHeader>Stars Part 1: Spectra</InstructionHeader>
        <InstructionRow rowType="Tool">
          <template #steps>
            <InstructionStep>
              Use the <span class="challenge-bold">Select star</span> dropdown
              menu to view the spectrum of each star: the
              <span class="challenge-bold">Sun</span>, an
              <span class="challenge-bold">M star</span>, and a
              <span class="challenge-bold">B star</span>.
            </InstructionStep>
          </template>
        </InstructionRow>
        <InstructionRow rowType="Notebook">
          For each spectrum, complete the steps below to fill in the Table in
          your Notebook.
          <template #steps>
            <InstructionStep>
              At what wavelength does the star emit the most light?
              <br />
              <span class="challenge-bold">Hint 1:</span> Where is the y-value
              roughly the highest?
              <br />
              <span class="challenge-bold">Hint 2:</span> Adjust the
              <span class="challenge-tool-label">wavelength stretch</span> as
              needed, so you can see all the available data. Under
              <span class="challenge-tool-label">normalize data</span>, select
              <span class="challenge-bold">all</span> or
              <span class="challenge-bold">none</span>
            </InstructionStep>
            <InstructionStep>
              What is the energy associated with the wavelength that emits the
              most light?
              <br />
              <span class="challenge-bold">Hint:</span> Use the
              <span class="challenge-tool-label">units</span> dropdown to select
              <span class="challenge-bold">electron volts</span>, then use the
              vertical measuring tool to determine the energy.
            </InstructionStep>
            <InstructionStep>
              Based on the brightness of light across the visible part of the
              spectrum, what color would you expect this type of star to appear?
              <br />
              <span class="challenge-bold">Hint:</span> For the M star and B
              stars, under
              <span class="challenge-tool-label">normalize data</span>, select
              <span class="challenge-bold">visible</span>.
            </InstructionStep>
          </template>
        </InstructionRow>
        <InstructionRow rowType="Simulation">
          If you would like a refresher on how light colors mix, double-click
          the "RGB Bulbs" to launch the
          <span class="challenge-bold">PhET Color Mixing</span> simulation at
          the bottom of the page.
          <template #note>
            The simulation is not a perfect proxy for what you would see in real
            life, because it does not include all colors that exist in the
            visible spectrum. You can still approximate the colors you would see
            by adjusting the percentages for R, G, and B to roughly match the
            brightness of the light (shown on the y-axis) for each band of color
            in the spectrum.
          </template>
        </InstructionRow>
      </ChallengeCard>
    </template>
    <template #tool-col>
      <ToolControlGroup
        :control-names="['units', 'plotType', 'normalize', 'zoom']"
      >
        <template #top-tool>
          <ToolCard
            :custom-metadata="starMetadataList"
            spectrum-picker-placeholder="Select star"
          />
        </template>
      </ToolControlGroup>
      <LeftRightGroup class="mt-5">
        <template #right>
          <NextPrevButton to="measuring" direction="next">
            part 2
          </NextPrevButton>
        </template>
      </LeftRightGroup>
      <PhetColorVisionIframe class="mt-5" bordered />
    </template>
  </TemperatureLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';
import { useCustomMetadata } from '@/utils/metadataUtils';

useSpecLabHead('Stars Part 1', 'Temperature');

const sunMetadata = useCustomMetadata('Stars', 'sun_ref_colina96', {});
const mStarMetadata = useCustomMetadata('Stars', 'M_Star', {});
const bStarMetadata = useCustomMetadata('Stars', 'B_Star', {});
const starMetadataListMaybe = [sunMetadata, mStarMetadata, bStarMetadata];
const starMetadataList = starMetadataListMaybe.filter((md) => !!md);
</script>
