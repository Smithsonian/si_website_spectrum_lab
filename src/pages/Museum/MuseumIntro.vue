<template>
  <MuseumLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <h2>
          (Art Conservation challenge goal)
        </h2>
        <img src="/src/assets/fishtank_first_screen.jpg" class="mw-100 mb-2" />
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
