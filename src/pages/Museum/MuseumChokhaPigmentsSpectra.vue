<template>
  <MuseumLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <template #top>
          <InstructionHeader>
            Chokha Pigments Part 1: Spectra
          </InstructionHeader>
          <InstructionRow rowType="Tool">
            Compare the spectra of the regions of interest (ROI) with reference
            pigments of different colors to see if you can identify the ROI
            pigments.
            <template #after-steps>
              <p class="mt-2">
                NOTE: Many of the ROI and pigment spectra for different colors
                display absorption features at a common set of wavelengths:
                1.39–1.67, 1.94, 2.11, 2.28, and 2.34 microns. These are
                contributed by cellulose in the paper that the pigments were
                applied to. The Chokha painting itself is also done on paper. A
                reference spectrum for cellulose is included, so you can account
                for its features in the spectra.
              </p>
            </template>
            <template #steps>
              <InstructionStep>
                Under <span class="challenge-bold">SOURCE 1</span>, use the
                <span class="challenge-bold">Select Chokha ROI</span>
                dropdown menu to view a spectrum for each region of interest.
              </InstructionStep>
              <InstructionStep>
                Under <span class="challenge-bold">SOURCE 2</span>, use the
                <span class="challenge-bold">Select material</span> dropdown
                menu to view a spectrum for different pigments of each color or
                the cellulose background.
              </InstructionStep>
              <InstructionStep>
                Adjust the
                <span class="challenge-tool-label">WAVELENGTH STRETCH</span> as
                needed to view the complete spectrum.
              </InstructionStep>
            </template>
          </InstructionRow>
          <InstructionRow rowType="Notebook">
            <template #steps>
              <InstructionStep>
                For each ROI, write the pigment names you identified in your
                notebook table.
              </InstructionStep>
              <InstructionStep>
                Some pigments may be easier to identify from their spectra than
                others. Use the last column to note how much confidence you have
                in your identification of the pigments for each ROI.
              </InstructionStep>
            </template>
          </InstructionRow>
        </template>
        <template #middle>
          <ImageZoomOverlay :src="chokhaChallenge" :zoom-src="chokhaBig" />
        </template>
      </ChallengeCard>
    </template>
    <template #tool-col>
      <ToolControlGroup
        :control-names="['units', 'plotType', 'normalize', 'zoom']"
      >
        <template #top-tool>
          <ToolCard
            :custom-metadata="customMetadata"
            spectrum-picker-placeholder="Select Chokha ROI"
          />
        </template>
        <template #bottom-tool>
          <ToolCard
            :custom-metadata="pigments"
            spectrum-picker-placeholder="Select material"
          />
        </template>
      </ToolControlGroup>
      <LeftRightGroup class="mt-5">
        <template #left>
          <NextPrevButton to="../chokha-painting" direction="prev" light>
            previous section
          </NextPrevButton>
        </template>
        <template #right>
          <NextPrevButton to="uvl-intro" direction="next" light>
            part 2
          </NextPrevButton>
        </template>
      </LeftRightGroup>
    </template>
  </MuseumLayout>
</template>

<script setup lang="ts">
import { useAllMetadata, useCustomMetadata } from '@/utils/metadataUtils';
import chokhaChallenge from '@/assets/spectrum_data/Museum_Conservation/chokha_visible_r1b1y1w1_910.webp';
import chokhaBig from '@/assets/spectrum_data/Museum_Conservation/chokha_visible_r1b1y1w1_big.webp';
import { useSpecLabHead } from '@/utils/locationUtils';
import mystery from '@/assets/spectrum_data/mystery@2x.png';

useSpecLabHead('Chokha Pigments Part 1: Spectra', 'Museum');

const chokhaB1 = useCustomMetadata(
  'Painting Regions',
  'S2018-1-76_VNIR-SWIR_colors_Blue_1',
  {
    title: 'ROI B1',
    imageUrl: mystery,
    bigImageUrl: '',
  },
);
const chokhaY1 = useCustomMetadata(
  'Painting Regions',
  'S2018-1-76_VNIR-SWIR_colors_Yellow_1',
  {
    title: 'ROI Y1',
    imageUrl: mystery,
    bigImageUrl: '',
  },
);
const chokhaW1 = useCustomMetadata(
  'Painting Regions',
  'S2018-1-76_VNIR-SWIR_colors_White_1',
  {
    title: 'ROI W1',
    imageUrl: mystery,
    bigImageUrl: '',
  },
);
const chokhaR1 = useCustomMetadata(
  'Painting Regions',
  'S2018-1-76_VNIR-SWIR_colors_Red_1',
  {
    title: 'ROI R1',
    imageUrl: mystery,
    bigImageUrl: '',
  },
);
const customMetadataMaybe = [chokhaW1, chokhaB1, chokhaY1, chokhaR1];
const customMetadata = customMetadataMaybe.filter((sm) => !!sm);
const allMetadata = useAllMetadata();
const pigments = allMetadata['Paint Pigments & Supplies'];
</script>
