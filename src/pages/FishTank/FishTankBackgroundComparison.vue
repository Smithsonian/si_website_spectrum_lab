<template>
  <FishTankLayout>
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
            title="Spectrum 1"
            :custom-metadata="cactusMetadataList"
            :spectrum-picker-placeholder="null"
          />
        </template>
        <template #bottom-tool>
          <ToolCard
            title="Spectrum 2"
            :custom-metadata="pansyMetadataList"
            :spectrum-picker-placeholder="null"
          />
        </template>
      </ToolControlGroup>
    </template>
  </FishTankLayout>
</template>

<script setup lang="ts">
import { useAllMetadata, type SpectrumMetadata } from '@/utils/metadataUtils';
import { useHead } from '@unhead/vue';

useHead({
  title: 'Spectrum Lab | Fishtank Background Part IIa',
});

const allMetadata = useAllMetadata();
const natureMetadata = allMetadata.Nature;
const cactusMetadata = natureMetadata.find(
  (sm) => sm.filename === 'Cactus_Reflection',
);
const cactusMetadataList = [] as SpectrumMetadata[];
if (cactusMetadata) {
  cactusMetadataList.push({
    ...cactusMetadata,
    imageName: '',
  });
} else {
  console.warn('Cactus metadata not found.');
}
const pansyMetadata = natureMetadata.find(
  (sm) => sm.filename === 'Pansy_Reflection',
);
const pansyMetadataList = [] as SpectrumMetadata[];
if (pansyMetadata) {
  pansyMetadataList.push({
    ...pansyMetadata,
    imageName: '',
  });
} else {
  console.warn('Pansy metadata not found.');
}
</script>
