<template>
  <ColorLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <h2>Interpreting reflection spectra</h2>
        <p>
          Here are images of the actual cactus and pansy. How did you do with
          your color predictions?
        </p>
        <p>
          Now that you’ve explored reflection in plants, you’re ready to think
          about reflection of sea plants (algae) and animals (coral and fish).
          Complete the activities in your <strong>Spectrum Notebook</strong> and
          come back here when the notebook instructs you to use the online tool.
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
        <template #left>
          <NextPrevButton direction="prev" light to="part-1">
            part 1
          </NextPrevButton>
        </template>
      </LeftRightGroup>
    </template>
  </ColorLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';
import { useCustomMetadata } from '@/utils/metadataUtils';

useSpecLabHead('Predictions part 2', 'Color');

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
