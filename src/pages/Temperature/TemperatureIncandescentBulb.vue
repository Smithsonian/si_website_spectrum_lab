<template>
  <TemperatureLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <InstructionHeader> Incandescent Bulb Temperature </InstructionHeader>
        <InstructionRow rowType="Intro">
          An incandescent light bulb is a type of bulb that generates light by
          running electricity through a very thin metal filament, causing it to
          heat up and emit thermal radiation.
        </InstructionRow>
        <InstructionRow rowType="Tool">
          <template #steps>
            <InstructionStep>
              <span class="challenge-emphasis">source 1</span> shows the
              spectrum of an incandescent light bulb.
            </InstructionStep>
            <InstructionStep>
              Under <span class="challenge-emphasis">source 2</span>, use the
              <span class="challenge-bold">Select thermal model</span> dropdown
              menu to find the temperature with a spectrum that provides the
              best match to the bulb's spectrum.
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
          Answer the questions in your Notebook.
          <template #steps>
            <InstructionStep>
              What temperature thermal spectrum best matches the spectrum for
              the incandescent light bulb?
            </InstructionStep>
            <InstructionStep>
              How does the temperature of the light bulb compare with the
              temperature on the surfaces of the stars you investigated in the
              previous section?
            </InstructionStep>
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
            :custom-metadata="bulbMetadataList"
            :spectrum-picker-placeholder="null"
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
          <NextPrevButton to="stars" direction="prev" light>
            previous section
          </NextPrevButton>
        </template>
        <template #right>
          <NextPrevButton to="earth" direction="next" light
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

useSpecLabHead('Incandescent Bulb', 'Temperature');

const bulbMetadata = useCustomMetadata('Lamps', 'Incandescent_Bulb', {});
const bulbMetadataList = bulbMetadata ? [bulbMetadata] : [];

const thermal230k = useCustomMetadata('Thermal Spectra', '230K_blackbody', {});

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
  thermal230k,
  thermal2500k,
  thermal4000k,
  thermal5800k,
  thermal9000k,
  thermal15000k,
  thermal30000k,
];
const filteredBlackbodies = filteredBlackbodiesMaybe.filter((sm) => !!sm);
</script>
