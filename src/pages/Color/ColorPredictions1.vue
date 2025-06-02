<template>
  <ColorLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <h2>Interpreting reflection spectra</h2>
        <p>
          The top panel shows the reflection spectrum of the body of a cactus.
        </p>
        <p>
          The bottom panel shows the reflection spectrum of a pansy (a type of
          flower).
        </p>
        <p>
          Based on the reflection spectra, what color do you think these plants
          appear under white light? Under a different colored light?
        </p>
        <p>
          Write your answers in your
          <strong>Spectrum Notebook</strong>.
        </p>
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
        <template #right>
          <NextPrevButton direction="next" to="part-2">part 2</NextPrevButton>
        </template>
      </LeftRightGroup>
    </template>
  </ColorLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';
import { useCustomMetadata } from '@/utils/metadataUtils';

useSpecLabHead('Predictions part 1', 'Color');

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
