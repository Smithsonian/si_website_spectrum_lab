<template>
  <TemperatureLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <InstructionHeader>Earth’s Temperature</InstructionHeader>
        <InstructionRow rowType="Tool">
          <template #steps>
            <InstructionStep>
              <span class="challenge-emphasis">source 1</span> shows the
              <span class="challenge-bold">emission</span> spectrum of Earth.
              This is a spectrum of the
              <span class="challenge-bold">thermal radiation</span> emitted by
              Earth because it has a temperature.
              <p class="mt-2">
                <span class="challenge-bold">Note:</span> Use the
                <span class="challenge-tool-label">wavelength stretch</span>
                slider to bring the spectrum into view.
              </p>
            </InstructionStep>
            <InstructionStep>
              Under <span class="challenge-emphasis">source 2</span>, use the
              <span class="challenge-bold">Select thermal model</span> dropdown
              menu to find the temperature with a spectrum that provides the
              best match to the Earth's emission spectrum.
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
              Earth's emission?
            </InstructionStep>
            <InstructionStep>
              Convert the temperature you identified in Question 1 from Kelvins
              to Celsius. (This will give you a better intuitive sense of what
              this temperature represents.)
              <p class="mt-2">
                (Temperature in Celsius = Temperature in Kelvins - 273)
              </p>
            </InstructionStep>
            <InstructionStep>
              What type of light does Earth emit?
            </InstructionStep>
            <InstructionStep>
              Given that Earth does not emit its own visible light, how are we
              able to see Earth from space?
              <p class="mt-2">
                <span class="challenge-bold">Hint:</span> Recall that the key
                behaviors of light include
                <span class="challenge-bold">emission</span>,
                <span class="challenge-bold">reflection</span>,
                <span class="challenge-bold">absorption</span>, and
                <span class="challenge-bold">transmission</span>.
              </p>
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
            :custom-metadata="earthMetadataList"
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
          <NextPrevButton to="incandescent-bulb" direction="prev">
            previous section
          </NextPrevButton>
        </template>
      </LeftRightGroup>
    </template>
  </TemperatureLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';
import { useCustomMetadata } from '@/utils/metadataUtils';

useSpecLabHead('Earth', 'Temperature');

const earthMetadata = useCustomMetadata('Solar System', 'Earth_Emission', {
  imageUrl: '',
});
const earthMetadataList = earthMetadata ? [earthMetadata] : [];

const thermal230k = useCustomMetadata('Thermal Spectra', '230K_blackbody', {});

const thermal450k = useCustomMetadata('Thermal Spectra', '450K_blackbody', {});

const thermal1200k = useCustomMetadata(
  'Thermal Spectra',
  '1200K_blackbody',
  {},
);

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

const filteredBlackbodiesMaybe = [
  thermal230k,
  thermal450k,
  thermal1200k,
  thermal2500k,
  thermal4000k,
  thermal5800k,
];
const filteredBlackbodies = filteredBlackbodiesMaybe.filter((sm) => !!sm);
</script>
