<template>
  <ColorLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <InstructionHeader>Light Behaviors</InstructionHeader>
        <InstructionRow row-type="Intro">
          We now reveal the sources of light for the spectra you predicted the
          colors of in the previous section.
        </InstructionRow>
        <InstructionRow row-type="Tool">
          <template #steps>
            <InstructionStep>
              Use the dropdown menu to view the spectrum and image for each
              object.
            </InstructionStep>
          </template>
        </InstructionRow>
        <InstructionRow row-type="Notebook">
          <template #steps>
            <InstructionStep>
              For each object, describe the path of the light from the source to
              your eyes (or the spectroscope) that allows you to see the color
              you predicted. Consider the behaviors of light: emission,
              absorption, transmission, and reflection.
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
      <LeftRightGroup class="mt-5">
        <template #left>
          <NextPrevButton direction="prev" light to="predictions">
            previous section
          </NextPrevButton>
        </template>
      </LeftRightGroup>
    </template>
  </ColorLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';
import { useCustomMetadata } from '@/utils/metadataUtils';

useSpecLabHead('Light Behaviors', 'Color');

const objectA = useCustomMetadata('Nature', 'Jellyfish_Emission', {
  hideCategory: true,
  title: 'A: Jellyfish',
});

const objectB = useCustomMetadata('Nature', 'Aspen_in_Fall_Reflection', {
  hideCategory: true,
  title: 'B: Aspen',
});

const objectC = useCustomMetadata('Stars', 'A_Star', {
  hideCategory: true,
  title: 'C: Star (class A)',
});

const objectD = useCustomMetadata('Nature', 'Cactus_Reflection', {
  hideCategory: true,
  title: 'D: Cactus',
});

const objectE = useCustomMetadata('Lamps', 'tvRemote', {
  hideCategory: true,
  title: 'E: LED from TV remote',
});
const metadataList = [objectA, objectB, objectC, objectD, objectE].filter(
  (sm) => !!sm,
);
</script>
