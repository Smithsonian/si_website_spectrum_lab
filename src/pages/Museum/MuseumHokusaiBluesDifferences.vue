<template>
  <MuseumLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <template #top>
          <InstructionHeader
            >Hokusai IR Imaging Part 2: Blue Spectra</InstructionHeader
          >
          <InstructionRow rowType="Tool">
            Let's revisit the spectra of ROI B1 and B2 that you saw in the
            previous section. Compare the spectra of the two blue pigments
            against each other and note their similarities and differences in
            visible light and in the infrared.
            <template #steps>
              <InstructionStep>
                Under <span style="font-weight: 600">Normalize?</span>, select
                <span style="font-weight: 600">Visible</span> to view the
                spectra only in the visible range. Identify 1-2 similarities and
                1-2 differences between the spectra in the visible range.
              </InstructionStep>
              <InstructionStep>
                Under <span style="font-weight: 600">Normalize?</span>, select
                <span style="font-weight: 600">All</span> to view the spectra in
                visible and IR. Identify 1-2 similarities and 1-2 differences
                between the spectra in the IR range.
              </InstructionStep>
            </template>
          </InstructionRow>
          <InstructionRow rowType="Notebook">
            Complete the table and answer the questions in your notebook.
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
            :custom-metadata="hokusaiB1Metadata"
            :spectrum-picker-placeholder="null"
          />
        </template>
        <template #bottom-tool>
          <ToolCard
            :custom-metadata="hokusaiB2Metadata"
            :spectrum-picker-placeholder="null"
          />
        </template>
      </ToolControlGroup>
      <LeftRightGroup class="mt-5">
        <template #left>
          <NextPrevButton to="ir-intro" direction="prev" light>
            part 1
          </NextPrevButton>
        </template>
        <template #right>
          <NextPrevButton to="ir-imaging" direction="next" light>
            part 3
          </NextPrevButton>
        </template>
      </LeftRightGroup>
    </template>
  </MuseumLayout>
</template>

<script setup lang="ts">
import hokusaiChallenge from '@/assets/spectrum_data/Museum_Conservation/Hokusai_color_B1B2_910.webp';
import hokusaiBig from '@/assets/spectrum_data/Museum_Conservation/Hokusai_color_B1B2_big.webp';
import { useSpecLabHead } from '@/utils/locationUtils';
import { imageUrlFromPath, useCustomMetadata } from '@/utils/metadataUtils';

useSpecLabHead('Two Blues', 'Museum');

const hokusaiB1 = useCustomMetadata(
  'Painting Regions',
  'F1904-134_VNIR-SWIR_colors_Blue_1',
  {
    imageUrl: imageUrlFromPath('Museum_Conservation/Hokusai_B1_zoom.png'),
    bigImageUrl: '',
  },
);

const hokusaiB2 = useCustomMetadata(
  'Painting Regions',
  'F1904-134_VNIR-SWIR_colors_Blue_2',
  {
    imageUrl: imageUrlFromPath('Museum_Conservation/Hokusai_B2_zoom.png'),
    bigImageUrl: '',
  },
);

const customMetadataMaybe = [hokusaiB1, hokusaiB2];
const customMetadata = customMetadataMaybe.filter((sm) => !!sm);

const hokusaiB1Metadata = customMetadata.filter(
  (sm) => sm.filename === 'F1904-134_VNIR-SWIR_colors_Blue_1',
);
const hokusaiB2Metadata = customMetadata.filter(
  (sm) => sm.filename === 'F1904-134_VNIR-SWIR_colors_Blue_2',
);
</script>
