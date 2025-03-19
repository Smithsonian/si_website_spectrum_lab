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
      <LeftRightGroup class="mt-5">
        <template #left>
          <NextPrevButton direction="prev" to="page-1">page 1</NextPrevButton>
        </template>
        <template #right>
          <NextPrevButton direction="next" to="../light-your-tank"
            >next section</NextPrevButton
          >
        </template>
      </LeftRightGroup>
    </template>
  </FishTankLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';
import { useAllMetadata } from '@/utils/metadataUtils';

useSpecLabHead('Background Part IIb', 'Fishtank');

const allMetadata = useAllMetadata();
const natureMetadata = allMetadata.Nature;
const cactusMetadataList = natureMetadata.filter(
  (sm) => sm.filename === 'Cactus_Reflection',
);
const pansyMetadataList = natureMetadata.filter(
  (sm) => sm.filename === 'Pansy_Reflection',
);
</script>
