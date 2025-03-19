<template>
  <TemperatureLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <BRow class="my-3">
          <BCol cols="1"></BCol>
          <BCol>
            <h2 class="h4">Measuring Earth’s Temperature</h2>
          </BCol>
        </BRow>
        <BRow class="mb-3">
          <BCol cols="1">
            <InstructionIcon name="Tool" />
          </BCol>
          <BCol>
            <p>
              <strong>Spectrum Tool.</strong> The <em>Target Object</em> shows
              the spectrum of Earth’s emission as measured from space. Compare
              the Earth’s emission spectrum to the
              <em>Comparison Object</em> spectra models for different
              temperatures (in Kelvin).
            </p>
          </BCol>
        </BRow>
        <BRow>
          <BCol cols="1">
            <InstructionIcon name="Notebook" />
          </BCol>
          <BCol>
            <p class="mb-2">
              <strong>Spectrum Notebook.</strong> In the
              <em>Measuring Earth’s Temperature</em> section, respond to these
              questions:
            </p>
            <ol class="fw-light">
              <li class="mb-2">
                Which model thermal spectrum best matches Earth’s emission
                spectrum?
              </li>
              <li class="mb-2">
                Convert the temperature you identified in question 1 from Kelvin
                to Celsius. What type of light does Earth emit?
              </li>
              <li class="mb-2">
                Given that Earth does not emit its own visible light, how are we
                able to see Earth from space? Hint: Recall from
                <em>1.&nbsp;Color</em> that light can be emitted, reflected,
                absorbed, and transmitted.
              </li>
            </ol>
          </BCol>
        </BRow>
      </ChallengeCard>
    </template>
    <template #tool-col>
      <ToolControlGroup show-zoom>
        <template #top-tool>
          <ToolCard
            title="Spectrum 1:"
            :custom-metadata="earthMetadataList"
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
    </template>
  </TemperatureLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';
import { useAllMetadata, useCustomMetadata } from '@/utils/metadataUtils';

useSpecLabHead('Earth', 'Temperature');

const earthMetadata = useCustomMetadata('Planets', 'Earth_Emission', {});
const earthMetadataList = earthMetadata ? [earthMetadata] : [];

const allMetadata = useAllMetadata();
const blackbodyList = allMetadata['Thermal Spectra'];
</script>
