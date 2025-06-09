<template>
  <MuseumLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <template #top>
          <InstructionHeader>
            Chokha Painting Part 2: Paint Colors and Spectra
          </InstructionHeader>
          <InstructionRow rowType="Art">
            Art conservators have taken reflection spectra of different regions
            of interest, marked by the white and black squares. The wavelengths
            of light that are reflected by the paint in the visible part of the
            spectrum determines what color our eyes see.
          </InstructionRow>
          <InstructionRow rowType="Tool">
            View each "mystery pigment" spectrum and see if you can identify
            what color and region of interest it corresponds to in the painting.
            <template #steps>
              <InstructionStep>
                Use the
                <span style="font-weight: 600">Select mystery pigment</span>
                dropdown menu to view each spectrum.
              </InstructionStep>
              <InstructionStep>
                Under <span style="font-weight: 600">Normalize?</span>, click
                <span style="font-weight: 600">Visible</span>.
              </InstructionStep>
              <InstructionStep>
                Use what you learned about how light colors mix (Modules 1 & 3)
                to identify what color corresponds to each spectrum.
              </InstructionStep>
            </template>
          </InstructionRow>
          <InstructionRow rowType="Notebook">
            Draw a line from each spectrum to the corresponding region of
            interest on the painting.
          </InstructionRow>
          <InstructionRow rowType="Simulation">
            If you'd like a refresher on how light colors mix, double-click the
            "RGB Bulbs" to launch the
            <span style="font-weight: 600">Color Mixing</span> simulation.
          </InstructionRow>
        </template>
        <template #middle>
          <ImageZoomOverlay :src="chokhaChallenge" :zoom-src="chokhaBig" />
        </template>
      </ChallengeCard>
    </template>
    <template #tool-col>
      <ToolControlGroup :control-names="['units', 'plotType', 'normalize']">
        <template #top-tool>
          <ToolCard
            :custom-metadata="customMetadata"
            spectrum-picker-placeholder="Select mystery pigment"
          />
        </template>
      </ToolControlGroup>
      <LeftRightGroup class="mt-5">
        <template #left>
          <NextPrevButton to="chokha" direction="prev" light>
            Part 1
          </NextPrevButton>
        </template>
        <template #right>
          <NextPrevButton to="../two-blues" direction="next" light>
            next
          </NextPrevButton>
        </template>
      </LeftRightGroup>
      <PhetIframe class="mt-5" bordered />
    </template>
  </MuseumLayout>
</template>

<script setup lang="ts">
import { useCustomMetadata } from '@/utils/metadataUtils';
import chokhaChallenge from '@/assets/spectrum_data/Museum_Conservation/chokha_mystery_labels_910.webp';
import chokhaBig from '@/assets/spectrum_data/Museum_Conservation/chokha_mystery_labels_big.webp';
import { useSpecLabHead } from '@/utils/locationUtils';
import mystery from '@/assets/spectrum_data/mystery@2x.png';

useSpecLabHead('Mystery Paints', 'Museum');

const chokhaR1 = useCustomMetadata(
  'Painting Regions',
  'S2018-1-76_VNIR-SWIR_colors_Red_1',
  {
    title: 'Mystery Pigment 1',
    imageUrl: mystery,
    bigImageUrl: '',
  },
);
const chokhaB2 = useCustomMetadata(
  'Painting Regions',
  'S2018-1-76_VNIR-SWIR_colors_Blue_2',
  {
    title: 'Mystery Pigment 2',
    imageUrl: mystery,
    bigImageUrl: '',
  },
);
const chokhaY1 = useCustomMetadata(
  'Painting Regions',
  'S2018-1-76_VNIR-SWIR_colors_Yellow_1',
  {
    title: 'Mystery Pigment 3',
    imageUrl: mystery,
    bigImageUrl: '',
  },
);
const chokhaW1 = useCustomMetadata(
  'Painting Regions',
  'S2018-1-76_VNIR-SWIR_colors_White_1',
  {
    title: 'Mystery Pigment 4',
    imageUrl: mystery,
    bigImageUrl: '',
  },
);
const customMetadataMaybe = [chokhaR1, chokhaB2, chokhaY1, chokhaW1];
const customMetadata = customMetadataMaybe.filter((sm) => !!sm);
</script>
