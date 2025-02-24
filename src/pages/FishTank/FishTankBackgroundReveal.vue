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
  </FishTankLayout>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue';

useHead({
  title: 'Spectrum Lab | Fishtank Background Part IIa',
});
</script>
