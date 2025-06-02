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
            :custom-metadata="cactusMetadataList"
            :spectrum-picker-placeholder="null"
          />
        </template>
        <template #bottom-tool>
          <ToolCard
            :custom-metadata="pansyMetadataList"
            :spectrum-picker-placeholder="null"
          />
        </template>
      </ToolControlGroup>
      <LeftRightGroup class="mt-5">
        <template #right>
          <NextPrevButton direction="next" to="page-2">page 2</NextPrevButton>
        </template>
      </LeftRightGroup>
    </template>
  </ColorLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';
import { useCustomMetadata } from '@/utils/metadataUtils';

useSpecLabHead('Predictions Part 1', 'Color');

const cactusMetadata = useCustomMetadata('Nature', 'Cactus_Reflection', {
  imageUrl: '',
});
const pansyMetadata = useCustomMetadata('Nature', 'Pansy_Reflection', {
  imageUrl: '',
});
const cactusMetadataList = cactusMetadata ? [cactusMetadata] : [];
const pansyMetadataList = pansyMetadata ? [pansyMetadata] : [];
</script>
