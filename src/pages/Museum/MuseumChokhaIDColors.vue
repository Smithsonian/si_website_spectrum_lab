<template>
  <MuseumLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <template #top>
          <InstructionHeader>
            Chokha Painting Part 2: Paint Colors and Spectra
          </InstructionHeader>
          <InstructionRow rowType="Art">
            Scientists have taken reflection spectra of different regions of
            interest (ROI), marked by labeled squares on the painting below. The
            wavelengths of light that are reflected by the paint in the visible
            part of the spectrum determines what color our eyes see.
            <template #steps>
              <InstructionStep>
                Hover your mouse over the painting to see an enlarged view of
                that region.
              </InstructionStep>
            </template>
          </InstructionRow>
          <InstructionRow rowType="Tool">
            View each "mystery pigment" spectrum and see if you can identify
            what color and region of interest it corresponds to in the painting.
            <template #before-steps>
              <div class="mb-2">
                (Find the Spectrum Tool by scrolling down below the painting.)
              </div>
            </template>
            <template #steps>
              <InstructionStep>
                Use the
                <span class="challenge-bold">Select pigment</span>
                dropdown menu to view each spectrum.
              </InstructionStep>
              <InstructionStep>
                Under <span class="challenge-tool-label">NORMALIZE DATA</span>,
                click <span class="challenge-bold">visible</span>.
              </InstructionStep>
              <InstructionStep>
                Use what you learned about how light colors mix (Modules 1 & 3)
                to identify what color corresponds to each spectrum.
              </InstructionStep>
            </template>
          </InstructionRow>
          <InstructionRow rowType="Notebook">
            Complete the table in your notebook, identifying the color of the
            region of interest you think corresponds to each Mystery Pigment
            spectrum.
          </InstructionRow>
          <InstructionRow rowType="Simulation">
            If you'd like a refresher on how light colors mix, double-click the
            "RGB Bulbs" to launch the
            <span class="challenge-bold">PhET Color Mixing</span> simulation.
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
            spectrum-picker-placeholder="Select pigment"
          />
        </template>
      </ToolControlGroup>
      <LeftRightGroup class="mt-5">
        <template #left>
          <NextPrevButton to="observe" direction="prev" light>
            part 1
          </NextPrevButton>
        </template>
        <template #right>
          <NextPrevButton to="../chokha-pigments" direction="next" light>
            next section
          </NextPrevButton>
        </template>
      </LeftRightGroup>
      <PhetColorVisionIframe class="mt-5" bordered />
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
  'S2018-1-76_VNIR-SWIR_colors_Blue_1',
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
