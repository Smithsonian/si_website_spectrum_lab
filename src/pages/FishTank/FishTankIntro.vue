<template>
  <FishTankLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <h2>
          Create and light a saltwater reef aquarium that is healthy and looks
          great too.
        </h2>
        <img src="/src/assets/fishtank_first_screen.jpg" class="mw-100 mb-2" />
        <p>
          For this project, you’ll first explore how land plants reflect light.
          Then you’ll dive into the project by investigating a variety of
          plants, fish and coral that live in saltwater aquaria. You’ll choose a
          few to live in your tank. Based on what you’ve learned in this unit,
          you’ll decide how to light the tank so all of its inhabitants thrive.
        </p>
      </ChallengeCard>
    </template>
  </FishTankLayout>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue';

useHead({
  title: 'Spectrum Lab | Fishtank Intro',
});
</script>
