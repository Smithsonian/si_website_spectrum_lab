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
            :custom-metadata-by-filename="cactusMetadataByFilename"
          />
        </template>
        <template #bottom-tool>
          <ToolCard
            title="Spectrum 2"
            :custom-metadata-by-filename="pansyMetadataByFilename"
          />
        </template>
      </ToolControlGroup>
    </template>
  </FishTankLayout>
</template>

<script setup lang="ts">
import { useAllMetadata } from '@/utils/metadataUtils';
import { useHead } from '@unhead/vue';

useHead({
  title: 'Spectrum Lab | Fishtank Background Part IIa',
});

const allMetadata = useAllMetadata();
const natureMetadata = allMetadata.Nature;
const cactusFilename = 'Cactus_Reflection';

let cactusMetadata = natureMetadata.find(
  (sm) => sm.filename === cactusFilename,
);
let cactusMetadataByFilename = null;
if (cactusMetadata) {
  cactusMetadata = {
    ...cactusMetadata,
    imageName: '',
  };
  cactusMetadataByFilename = { [cactusFilename]: cactusMetadata };
} else {
  console.warn(
    `Custom metadata '${cactusFilename}' not found in metadata list. Defaulting to full list.`,
  );
}

const pansyFilename = 'Pansy_Reflection';
let pansyMetadata = natureMetadata.find((sm) => sm.filename === pansyFilename);
let pansyMetadataByFilename = null;
if (pansyMetadata) {
  pansyMetadata = {
    ...pansyMetadata,
    imageName: '',
  };
  pansyMetadataByFilename = { [pansyFilename]: pansyMetadata };
} else {
  console.warn(
    `Custom metadata '${pansyFilename}' not found in metadata list. Defaulting to full list.`,
  );
}
</script>
