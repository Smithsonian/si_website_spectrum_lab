<template>
  <TemperatureLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <BRow class="my-3">
          <BCol cols="1"></BCol>
          <BCol>
            <h2 class="h4">
              Measuring the Temperature of an Incandescent Light Bulb
            </h2>
          </BCol>
        </BRow>
        <BRow class="mb-3">
          <BCol cols="1">
            <InstructionIcon name="Tool" />
          </BCol>
          <BCol>
            <p>
              <strong>Spectrum Tool.</strong> The <em>Target Object</em> shows
              the spectrum of an incandescent light bulb (where a metal filament
              is heated to such a high temperature that it glows). Compare the
              spectrum of the light bulb to the <em>Comparison Object</em>
              spectra models for different temperatures (in Kelvins).
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
              <em>Measuring the Temperature of an Incandescent Light Bulb</em>
              section, answer this question:
            </p>
            <ol class="fw-light">
              <li class="mb-2">
                What temperature thermal spectrum best matches the incandescent
                light bulb?
              </li>
            </ol>
            <p class="fw-light">
              Note: The y-values of these model spectra are not plotted on the
              same scale—they have been modified so they can all be plotted in
              the range of the tool. The key is to compare the overall shape of
              the curves, and most importantly, where the peaks are.
            </p>
          </BCol>
        </BRow>
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
