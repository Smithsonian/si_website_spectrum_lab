<template>
  <FishTankLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <h2>BONUS: Mood Lighting</h2>
        <p>
          The top dropdown menu lets you choose different amounts (High, Medium,
          or Low) of the colors Red, Green, and Blue. There are also 2 sample
          mixed colors (orange and teal) that are shown in your
          <strong>Spectrum Notebook</strong>.
        </p>
        <p>
          With these reference graphs as guides, use the
          <strong>drawing tool</strong> in the bottom panel to create a graph of
          the “mood lighting” of your empty tank. Take a screenshot and paste it
          in your notebook.
        </p>
        <p>
          Note: The reference graphs in your Notebook for the fish and plant
          reflection spectra are given in nanometers, so you can change your
          measurement unit to nm for this activity.
        </p>
      </ChallengeCard>
    </template>
    <template #tool-col>
      <ToolControlGroup>
        <template #top-tool>
          <ToolCard
            title="Tank Lighting Choices"
            :custom-metadata="fishtankMetadata"
            normalize-override="none"
            spectrum-picker-placeholder="Select lighting"
          />
        </template>
        <template #bottom-tool>
          <ToolCard title="Draw a Spectrum" draw-only />
        </template>
      </ToolControlGroup>
    </template>
  </FishTankLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';
import { useAllMetadata } from '@/utils/metadataUtils';

useSpecLabHead('Mood Lighting', 'Fishtank');
const allMetadata = useAllMetadata();
const fishtankMetadata = allMetadata['Fish Tank'];
</script>
