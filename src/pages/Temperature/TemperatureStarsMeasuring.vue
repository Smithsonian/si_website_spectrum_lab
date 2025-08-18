<template>
  <TemperatureLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <InstructionHeader>
          Stars Part 2: Measuring Temperatures
        </InstructionHeader>
        <InstructionRow rowType="Tool">
          Estimate a surface temperature for each star by comparing its spectrum
          with model thermal spectra for "blackbody" objects of different
          temperatures in Kelvin.
          <template #steps>
            <InstructionStep>
              Under <span class="challenge-emphasis">source 1</span>, use the
              <span class="challenge-bold">Select star</span> dropdown menu to
              view the spectrum of each star.
            </InstructionStep>
            <InstructionStep>
              Under <span class="challenge-emphasis">source 2</span>, use the
              <span class="challenge-bold">Select thermal model</span> dropdown
              menu to find the temperature with a spectrum that provides the
              best match to the star's spectrum.
            </InstructionStep>
            <InstructionStep>
              Adjust the
              <span class="challenge-tool-label">wavelength stretch</span> as
              needed, so you can see all the available data.
            </InstructionStep>
          </template>
          <template #note>
            The y-values of these model spectra are not plotted on the same
            scale—they have been modified so they can all be plotted in the
            range of the tool. The key is to compare the overall shape of the
            curves, and most importantly, where the peaks are.
          </template>
        </InstructionRow>
        <InstructionRow rowType="Notebook">
          For each star, enter its surface temperature into Column 4 in the
          Table in your Notebook.
        </InstructionRow>
      </ChallengeCard>
    </template>
    <template #tool-col>
      <ToolControlGroup>
        <template #top-tool>
          <ToolCard
            :custom-metadata="starMetadataList"
            spectrum-picker-placeholder="Select star"
          />
        </template>
        <template #bottom-tool>
          <ToolCard
            :custom-metadata="filteredBlackbodies"
            spectrum-picker-placeholder="Select thermal model"
          />
        </template>
      </ToolControlGroup>
      <LeftRightGroup class="mt-5">
        <template #left>
          <NextPrevButton to="spectra" direction="prev">part 1</NextPrevButton>
        </template>
        <template #right>
          <NextPrevButton to="../incandescentbulb" direction="next"
            >next section</NextPrevButton
          >
        </template>
      </LeftRightGroup>
    </template>
  </TemperatureLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';
import { useCustomMetadata } from '@/utils/metadataUtils';

useSpecLabHead('Stars Part 2', 'Temperature');

const sunMetadata = useCustomMetadata('Stars', 'sun_ref_colina96', {});
const mStarMetadata = useCustomMetadata('Stars', 'M_Star', {});
const bStarMetadata = useCustomMetadata('Stars', 'B_Star', {});
const starMetadataListMaybe = [sunMetadata, mStarMetadata, bStarMetadata];
const starMetadataList = starMetadataListMaybe.filter((md) => !!md);

const thermal450k = useCustomMetadata('Thermal Spectra', '450K_blackbody', {});
const thermal2500k = useCustomMetadata(
  'Thermal Spectra',
  '2500K_blackbody',
  {},
);
const thermal4000k = useCustomMetadata(
  'Thermal Spectra',
  '4000K_blackbody',
  {},
);
const thermal5800k = useCustomMetadata(
  'Thermal Spectra',
  '5800K_blackbody',
  {},
);
const thermal9000k = useCustomMetadata(
  'Thermal Spectra',
  '9000K_blackbody',
  {},
);
const thermal15000k = useCustomMetadata(
  'Thermal Spectra',
  '15000K_blackbody',
  {},
);
const thermal30000k = useCustomMetadata(
  'Thermal Spectra',
  '30000K_blackbody',
  {},
);

const filteredBlackbodiesMaybe = [
  thermal450k,
  thermal2500k,
  thermal4000k,
  thermal5800k,
  thermal9000k,
  thermal15000k,
  thermal30000k,
];
const filteredBlackbodies = filteredBlackbodiesMaybe.filter((sm) => !!sm);
</script>
