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
  </FishTankLayout>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue';

useHead({
  title: 'Spectrum Lab | Fishtank Background Part II',
});
</script>
