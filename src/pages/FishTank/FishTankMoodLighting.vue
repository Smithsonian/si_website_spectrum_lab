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
  </FishTankLayout>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue';

useHead({
  title: 'Spectrum Lab | Fishtank Mood Lighting',
});
</script>
