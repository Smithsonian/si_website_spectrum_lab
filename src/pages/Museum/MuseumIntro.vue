<template>
  <MuseumLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <h2>
          (Art Conservation challenge goal)
        </h2>
        <img src="/src/assets/SI_paint_samples_uv.png" class="mb-2 intro-image" />
        <p>
          For this project, you’ll ...
        </p>
      </ChallengeCard>
    </template>
  </MuseumLayout>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue';

useHead({
  title: 'Spectrum Lab | Museum Intro',
});
</script>
