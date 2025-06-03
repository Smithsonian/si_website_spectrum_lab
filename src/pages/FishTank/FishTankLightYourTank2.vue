<template>
  <FishTankLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <h2>Light Your Tank: Part 2</h2>
        <p>
          The top dropdown menu lets you choose different amounts (High, Medium,
          or Low) of the colors Red, Green, and Blue. There are also 2 sample
          mixed colors (orange and teal) that are shown in your
          <strong>Spectrum Notebook</strong>. Notice the shape, location and
          height (intensity) of these spectra.
        </p>
        <p>
          With these reference graphs as guides, use the
          <strong>drawing tool</strong> in the bottom panel to create a graph of
          the overall color of your empty tank. Take a screenshot and paste it
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
      <ToolControlGroup :control-names="['units', 'plotType']">
        <template #top-tool>
          <ToolCard
            :custom-metadata="fishtankMetadata"
            normalize-override="none"
            spectrum-picker-placeholder="Select lighting"
          />
        </template>
        <template #bottom-tool>
          <ToolCard draw-only />
        </template>
      </ToolControlGroup>
      <LeftRightGroup class="mt-5">
        <template #left>
          <NextPrevButton direction="prev" light to="part-1">
            part 1
          </NextPrevButton>
        </template>
        <template #right>
          <NextPrevButton
            direction="next"
            light
            to="../inhabitants-under-lights"
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

useSpecLabHead('Light Your Tank part 2', 'Fishtank');

const allMetadata = useAllMetadata();
const fishtankMetadata = allMetadata['Fish Tank'];
</script>
