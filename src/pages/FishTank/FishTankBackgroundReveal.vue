<template>
  <FishTankLayout>
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

const cactusMetadata = natureMetadata.find(
  (sm) => sm.filename === cactusFilename,
);
let cactusMetadataByFilename = null;
if (cactusMetadata) {
  cactusMetadataByFilename = { [cactusFilename]: cactusMetadata };
} else {
  console.warn(
    `Custom metadata '${cactusFilename}' not found in metadata list. Defaulting to full list.`,
  );
}

const pansyFilename = 'Pansy_Reflection';
const pansyMetadata = natureMetadata.find(
  (sm) => sm.filename === pansyFilename,
);
let pansyMetadataByFilename = null;
if (pansyMetadata) {
  pansyMetadataByFilename = { [pansyFilename]: pansyMetadata };
} else {
  console.warn(
    `Custom metadata '${pansyFilename}' not found in metadata list. Defaulting to full list.`,
  );
}
</script>
