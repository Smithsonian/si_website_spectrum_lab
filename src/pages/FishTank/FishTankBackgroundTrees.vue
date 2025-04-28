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
            :custom-metadata="treeMetadata"
            :spectrum-picker-placeholder="null"
          />
        </template>
      </ToolControlGroup>
      <LeftRightGroup class="mt-5">
        <template #right>
          <NextPrevButton
            direction="next"
            to="/final-projects/fishtank/background-2"
          >
            next section
          </NextPrevButton>
        </template>
      </LeftRightGroup>
    </template>
  </FishTankLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';
import { useAllMetadata } from '@/utils/metadataUtils';

useSpecLabHead('Background Part I', 'Fishtank');

const allMetadata = useAllMetadata();
const natureMetadata = allMetadata.Nature;
const treeMetadata = natureMetadata.filter(
  (sm) => sm.filename === 'Tree_in_Summer_Reflection',
);
</script>
