<template>
  <MuseumLayout>
    <template #challenge-tab>
      <ChallengeCard remove-padding>
        <div class="pt-3 px-3">
          <InstructionHeader>
            Part 2: Paint Colors and Spectra
          </InstructionHeader>
          <InstructionRow rowType="Tool">
            Your task is to identify which "mystery pigment" spectrum
            corresponds to the labeled regions of interest.
            <ol>
              <li class="mb-2">
                Under <em>Paint Spectra</em>, use the
                <em>Select mystery pigment</em> menu to view each spectrum.
              </li>
              <li class="mb-2">
                Under <span style="font-weight: 600">Normalize?</span>, click
                <span style="font-weight: 600">Visible</span>.
              </li>
              <li>
                Use what you learned about how light colors mix (Module 2) to
                identify what color corresponds to each spectrum.
              </li>
            </ol>
          </InstructionRow>
          <InstructionRow rowType="Notebook">
            In the <em>Paint Colors</em> section, draw a line from each spectrum
            to the corresponding region of interest on the painting.
          </InstructionRow>
        </div>
        <div
          class="rounded-bottom-4"
          style="background-color: var(--gen-black)"
        >
          <ImageZoomOverlay :src="chokhaChallenge" :zoom-src="chokhaBig" />
        </div>
      </ChallengeCard>
    </template>
    <template #tool-col>
      <ToolControlGroup :show-normalize-picker="true">
        <template #top-tool>
          <ToolCard
            title="Paint Spectra"
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
    </template>
  </MuseumLayout>
</template>

<script setup lang="ts">
import { useCustomMetadata } from '@/utils/metadataUtils';
import chokhaChallenge from '@/assets/spectrum_data/Museum_Conservation/chokha_mystery_labels_910.webp';
import chokhaBig from '@/assets/spectrum_data/Museum_Conservation/chokha_mystery_labels_big.webp';
import { useSpecLabHead } from '@/utils/locationUtils';

useSpecLabHead('Paint Colors', 'Museum');

const chokhaR1 = useCustomMetadata(
  'Museum Conservation',
  'S2018-1-76_VNIR-SWIR_colors_Red_1',
  {
    title: 'Mystery Pigment 1',
    imageUrl: '',
    bigImageUrl: '',
  },
);
const chokhaB2 = useCustomMetadata(
  'Museum Conservation',
  'S2018-1-76_VNIR-SWIR_colors_Blue_2',
  {
    title: 'Mystery Pigment 2',
    imageUrl: '',
    bigImageUrl: '',
  },
);
const chokhaY1 = useCustomMetadata(
  'Museum Conservation',
  'S2018-1-76_VNIR-SWIR_colors_Yellow_1',
  {
    title: 'Mystery Pigment 3',
    imageUrl: '',
    bigImageUrl: '',
  },
);
const chokhaW1 = useCustomMetadata(
  'Museum Conservation',
  'S2018-1-76_VNIR-SWIR_colors_White_1',
  {
    title: 'Mystery Pigment 4',
    imageUrl: '',
    bigImageUrl: '',
  },
);
const customMetadataMaybe = [chokhaR1, chokhaB2, chokhaY1, chokhaW1];
const customMetadata = customMetadataMaybe.filter((sm) => !!sm);
</script>
