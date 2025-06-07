<template>
  <ColorLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <InstructionHeader>Color Predictions from Spectra</InstructionHeader>
        <InstructionRow row-type="Tool">
          <template #steps>
            <InstructionStep>
              For each Object A - E, use the dropdown menu to view its spectrum.
            </InstructionStep>
            <InstructionStep>
              Based on the visible part of each spectrum, predict the color you
              would see if you viewed the object under the same lighting
              conditions as when the spectrum was taken.
            </InstructionStep>
          </template>
        </InstructionRow>
        <InstructionRow row-type="Simulation">
          <template #steps>
            <InstructionStep>
              Use the PhET Color Vision "RGB Bulbs" tool to recall how different
              light colors mix. (<strong>Double-click on the RGB Bulbs</strong>
              box to launch the simulation.)
            </InstructionStep>
            <InstructionStep>
              <strong>NOTE:</strong> The simulation is not a perfect proxy for
              what you would see in real life, because it does not include all
              colors that exist in the visible spectrum. You can still
              approximate the colors you would see by adjusting the percentages
              for R, G, and B to roughly match the brightness of the light
              (shown on the y-axis) for each band of color in the spectrum.
            </InstructionStep>
          </template>
        </InstructionRow>
        <InstructionRow row-type="Notebook">
          <template #steps>
            <InstructionStep>
              Write your predictions in the table in your
              <strong>Spectrum Notebook</strong>.
            </InstructionStep>
          </template>
        </InstructionRow>
      </ChallengeCard>
    </template>
    <template #tool-col>
      <ToolControlGroup>
        <template #top-tool>
          <ToolCard
            :custom-metadata="metadataList"
            :spectrum-picker-placeholder="null"
          />
        </template>
      </ToolControlGroup>
      <PhetIframe bordered />
      <LeftRightGroup class="mt-5">
        <template #left>
          <NextPrevButton direction="prev" light to="seeing-color">
            previous section
          </NextPrevButton>
        </template>
        <template #right>
          <NextPrevButton direction="next" light to="light-behaviors">
            next section
          </NextPrevButton>
        </template>
      </LeftRightGroup>
    </template>
  </ColorLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';
import { useCustomMetadata } from '@/utils/metadataUtils';

useSpecLabHead('Color Predictions', 'Color');

const objectA = useCustomMetadata('Nature', 'Jellyfish_Emission', {
  hideCategory: true,
  title: 'Object A',
  imageUrl: '',
});

const objectB = useCustomMetadata('Nature', 'Aspen_in_Fall_Reflection', {
  hideCategory: true,
  title: 'Object B',
  imageUrl: '',
});

const objectC = useCustomMetadata('Stars', 'A_Star', {
  hideCategory: true,
  title: 'Object C',
  imageUrl: '',
});

const objectD = useCustomMetadata('Nature', 'Cactus_Reflection', {
  hideCategory: true,
  title: 'Object D',
  imageUrl: '',
});

const objectE = useCustomMetadata('Lamps', 'tvRemote', {
  hideCategory: true,
  title: 'Object E',
  imageUrl: '',
});
const metadataList = [objectA, objectB, objectC, objectD, objectE].filter(
  (sm) => !!sm,
);
</script>

<style></style>
