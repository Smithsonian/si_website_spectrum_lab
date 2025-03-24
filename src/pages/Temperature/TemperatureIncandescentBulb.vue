<template>
  <TemperatureLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <InstructionHeader>
          Measuring the Temperature of an Incandescent Light Bulb
        </InstructionHeader>
        <InstructionRow rowType="Tool">
          The <em>Target Object</em> shows the spectrum of an incandescent light
          bulb (where a metal filament is heated to such a high temperature that
          it glows). Compare the spectrum of the light bulb to the
          <em>Comparison Object</em> spectra models for different temperatures
          (in Kelvins).
        </InstructionRow>
        <InstructionRow rowType="Notebook">
          In the
          <em>Measuring the Temperature of an Incandescent Light Bulb</em>
          section, answer this question:
          <template #questions>
            <InstructionQuestion>
              What temperature thermal spectrum best matches the incandescent
              light bulb?
            </InstructionQuestion>
          </template>
          <template #note>
            The y-values of these model spectra are not plotted on the same
            scale—they have been modified so they can all be plotted in the
            range of the tool. The key is to compare the overall shape of the
            curves, and most importantly, where the peaks are.
          </template>
        </InstructionRow>
      </ChallengeCard>
    </template>
    <template #tool-col>
      <ToolControlGroup show-zoom>
        <template #top-tool>
          <ToolCard
            title="Spectrum 1:"
            :custom-metadata="bulbMetadataList"
            :spectrum-picker-placeholder="null"
          />
        </template>
        <template #bottom-tool>
          <ToolCard
            title="Spectrum 2:"
            :custom-metadata="blackbodyList"
            spectrum-picker-placeholder="select blackbody"
          />
        </template>
      </ToolControlGroup>
      <LeftRightGroup class="mt-5">
        <template #right>
          <NextPrevButton to="earth" direction="next"
            >next section</NextPrevButton
          >
        </template>
      </LeftRightGroup>
    </template>
  </TemperatureLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';
import { useAllMetadata, useCustomMetadata } from '@/utils/metadataUtils';

useSpecLabHead('Incandescent Bulb', 'Temperature');

const bulbMetadata = useCustomMetadata('Lamps', 'Incandescent_Bulb', {});
const bulbMetadataList = bulbMetadata ? [bulbMetadata] : [];

const allMetadata = useAllMetadata();
const blackbodyList = allMetadata['Thermal Spectra'];
</script>
