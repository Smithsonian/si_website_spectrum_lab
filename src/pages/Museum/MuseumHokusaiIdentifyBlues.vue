<template>
  <MuseumLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <template #top>
          <InstructionHeader>Identify the Pigments</InstructionHeader>
          <InstructionRow rowType="Tool">
            Compare the spectra from the two blue regions of interest with a
            sample of blue paint pigments and see if you can identify which
            pigments correspond to each blue region of interest in the painting
          </InstructionRow>
          <InstructionRow rowType="Notebook">
            <span class="needs-updating"> Write notebook questions </span>
          </InstructionRow>
        </template>
        <template #middle>
          <ImageZoomOverlay :src="hokusaiChallenge" :zoom-src="hokusaiBig" />
        </template>
      </ChallengeCard>
    </template>
    <template #tool-col>
      <ToolControlGroup :show-normalize-picker="true" :show-zoom="true">
        <template #top-tool>
          <ToolCard
            :custom-metadata="hokusaiBluesMetadata"
            spectrum-picker-placeholder="Select blue pigment"
          />
        </template>
        <template #bottom-tool>
          <ToolCard
            :custom-metadata="bluesMetadata"
            spectrum-picker-placeholder="Select comparison pigment"
          />
        </template>
      </ToolControlGroup>
      <LeftRightGroup class="mt-5">
        <template #left>
          <NextPrevButton to="two-blues" direction="prev" light>
            previous
          </NextPrevButton>
        </template>
        <template #right>
          <NextPrevButton to="other-blues" direction="next" light>
            next
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
import {
  useCustomMetadata,
  useAllMetadata,
  imageUrlFromPath,
} from '@/utils/metadataUtils';

useSpecLabHead('Identify pigments', 'Museum');

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

const hokusaiBluesMetadata = customMetadata.filter(
  (sm) =>
    sm.filename === 'F1904-134_VNIR-SWIR_colors_Blue_1' ||
    sm.filename === 'F1904-134_VNIR-SWIR_colors_Blue_2',
);

const allMetadata = useAllMetadata();
const pigmentMetadata = allMetadata['Paint Pigments'];
const bluesMetadata = pigmentMetadata.filter(
  (sm) =>
    sm.title === 'Prussian Blue' ||
    sm.title === 'Indigo' ||
    sm.title === 'Azurite' ||
    sm.title === 'Egyptian Blue',
);
</script>
