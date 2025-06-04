<template>
  <TemperatureLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <InstructionHeader>Measuring Earth’s Temperature</InstructionHeader>
        <InstructionRow rowType="Tool">
          The <em>Target Object</em> shows the spectrum of Earth’s emission as
          measured from space. Compare the Earth’s emission spectrum to the
          <em>Comparison Object</em> spectra models for different temperatures
          (in Kelvin).
        </InstructionRow>
        <InstructionRow rowType="Notebook">
          In the <em>Measuring Earth’s Temperature</em> section, respond to
          these questions:
          <template #steps>
            <InstructionStep>
              Which model thermal spectrum best matches Earth’s emission
              spectrum?
            </InstructionStep>
            <InstructionStep>
              Convert the temperature you identified in question 1 from Kelvin
              to Celsius. What type of light does Earth emit?
            </InstructionStep>
            <InstructionStep>
              Given that Earth does not emit its own visible light, how are we
              able to see Earth from space? Hint: Recall from
              <em>1.&nbsp;Color</em> that light can be emitted, reflected,
              absorbed, and transmitted.
            </InstructionStep>
          </template>
        </InstructionRow>
      </ChallengeCard>
    </template>
    <template #tool-col>
      <ToolControlGroup>
        <template #top-tool>
          <ToolCard
            :custom-metadata="earthMetadataList"
            :spectrum-picker-placeholder="null"
          />
        </template>
        <template #bottom-tool>
          <ToolCard
            :custom-metadata="blackbodyList"
            spectrum-picker-placeholder="select blackbody"
          />
        </template>
      </ToolControlGroup>
    </template>
  </TemperatureLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';
import { useAllMetadata, useCustomMetadata } from '@/utils/metadataUtils';

useSpecLabHead('Earth', 'Temperature');

const earthMetadata = useCustomMetadata('Solar System', 'Earth_Emission', {});
const earthMetadataList = earthMetadata ? [earthMetadata] : [];

const allMetadata = useAllMetadata();
const blackbodyList = allMetadata['Thermal Spectra'];
</script>
