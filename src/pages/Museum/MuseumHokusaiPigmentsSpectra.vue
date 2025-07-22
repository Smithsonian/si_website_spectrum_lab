<template>
  <MuseumLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <template #top>
          <InstructionHeader
            >Hokusai Pigments Part 1: Spectra</InstructionHeader
          >
          <InstructionRow rowType="Tool">
            Compare the spectra of the regions of interest (ROI) with comparison
            pigments to see if you can identify the ROI pigments.
            <p class="mt-2">
              NOTE: Some common IR absorption features appear in multiple
              comparison pigment spectra. These are contributed by cellulose
              from the background material that was painted on. A reference
              spectrum for cellulose is included, so you can account for its
              features in the spectra.
            </p>
            <template #steps>
              <InstructionStep>
                Under <span style="font-weight: 600">SOURCE 1</span>, use the
                <span style="font-weight: 600">Select Hokusai ROI</span>
                dropdown menu to view a spectrum for each region of interest.
              </InstructionStep>
              <InstructionStep>
                Under <span style="font-weight: 600">SOURCE 2</span>, use the
                <span style="font-weight: 600">Select material</span> dropdown
                menu to view a spectrum for different pigments of each color or
                the cellulose background.
              </InstructionStep>
              <InstructionStep>
                Adjust the
                <span style="font-weight: 400">WAVELENGTH STRETCH</span> as
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
          <ImageZoomOverlay :src="hokusaiChallenge" :zoom-src="hokusaiBig" />
        </template>
      </ChallengeCard>
    </template>
    <template #tool-col>
      <ToolControlGroup
        :control-names="['units', 'plotType', 'normalize', 'zoom']"
      >
        <template #top-tool>
          <ToolCard
            :custom-metadata="hokusaiROIsMetadata"
            spectrum-picker-placeholder="Select Hokusai ROI"
          />
        </template>
        <template #bottom-tool>
          <ToolCard
            :custom-metadata="pigmentMetadata"
            spectrum-picker-placeholder="Select material"
          />
        </template>
      </ToolControlGroup>
      <LeftRightGroup class="mt-5">
        <template #left>
          <NextPrevButton to="../hokusai-painting" direction="prev" light>
            previous section
          </NextPrevButton>
        </template>
        <template #right>
          <NextPrevButton to="data-table" direction="next" light>
            part 2
          </NextPrevButton>
        </template>
      </LeftRightGroup>
    </template>
  </MuseumLayout>
</template>

<script setup lang="ts">
import hokusaiChallenge from '@/assets/spectrum_data/Museum_Conservation/hokusai_painting_labels_910.webp';
import hokusaiBig from '@/assets/spectrum_data/Museum_Conservation/hokusai_painting_labels_big.webp';
import { useSpecLabHead } from '@/utils/locationUtils';
import { useCustomMetadata, useAllMetadata } from '@/utils/metadataUtils';
import mystery from '@/assets/spectrum_data/mystery@2x.png';

useSpecLabHead('Hokusai Pigments Part 1: Spectra', 'Museum');

const hokusaiB1 = useCustomMetadata(
  'Painting Regions',
  'F1904-134_VNIR-SWIR_colors_Blue_1',
  {
    title: 'ROI B1',
    imageUrl: mystery,
    bigImageUrl: '',
  },
);

const hokusaiB2 = useCustomMetadata(
  'Painting Regions',
  'F1904-134_VNIR-SWIR_colors_Blue_2',
  {
    title: 'ROI B2',
    imageUrl: mystery,
    bigImageUrl: '',
  },
);

const hokusaiW1 = useCustomMetadata(
  'Painting Regions',
  'F1904-134_VNIR-SWIR_colors_White_1',
  {
    title: 'ROI W1',
    imageUrl: mystery,
    bigImageUrl: '',
  },
);

const hokusaiY = useCustomMetadata(
  'Painting Regions',
  'F1904-134_VNIR-SWIR_colors_Yellow',
  {
    title: 'ROI Y1',
    imageUrl: mystery,
    bigImageUrl: '',
  },
);

const customMetadataMaybe = [hokusaiB1, hokusaiB2, hokusaiW1, hokusaiY];
const customMetadata = customMetadataMaybe.filter((sm) => !!sm);

const hokusaiROIsMetadata = customMetadata.filter(
  (sm) =>
    sm.filename === 'F1904-134_VNIR-SWIR_colors_Blue_1' ||
    sm.filename === 'F1904-134_VNIR-SWIR_colors_Blue_2' ||
    sm.filename === 'F1904-134_VNIR-SWIR_colors_White_1' ||
    sm.filename === 'F1904-134_VNIR-SWIR_colors_Yellow',
);

const allMetadata = useAllMetadata();
const pigmentMetadata = allMetadata['Paint Pigments & Supplies'];
</script>
