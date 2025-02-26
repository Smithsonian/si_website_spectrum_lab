<template>
  <FishTankLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <h2>Why are trees green in summer?</h2>
        <img src="/src/assets/session4_tree.png" class="mw-100 mb-2" />
        <p>
          In this tree, some photons are reflected while others are absorbed.
        </p>
        <p>This is a reflection spectrum of a tree in summer.</p>
        <p>
          Use this spectrum to answer the questions in your
          <strong>Spectrum Notebook</strong>.
        </p>
      </ChallengeCard>
    </template>
    <template #tool-col>
      <ToolControlGroup>
        <template #top-tool>
          <ToolCard
            title="Tree in Summer Reflection"
            :custom-metadata-by-filename="customMetadataByFilename"
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
  title: 'Spectrum Lab | Fishtank Background Part I',
});

const allMetadata = useAllMetadata();
const natureMetadata = allMetadata.Nature;
const treeFilename = 'Tree_in_Summer_Reflection';
const treeMetadata = natureMetadata.find((sm) => sm.filename === treeFilename);
let customMetadataByFilename = null;
if (treeMetadata) {
  customMetadataByFilename = { [treeFilename]: treeMetadata };
} else {
  console.warn(
    `Custom metadata '${treeFilename}' not found in metadata list. Defaulting to full list.`,
  );
}
</script>
