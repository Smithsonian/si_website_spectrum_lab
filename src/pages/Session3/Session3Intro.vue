<template>
  <Session3Layout>
    <template #challenge-tab>
      <ChallengeCard>
        <h2>What can spectra tell us about an object’s temperature?</h2>
        <img
          src="/includes/AI_common/images/session3_sun.png"
          class="mw-100 mb-2"
        />
        <p>
          Stars are too far away (and too hot!) for a human to touch, yet we can
          measure their temperatures. Spectra make this possible! Let’s
          investigate how.
        </p>
      </ChallengeCard>
    </template>
  </Session3Layout>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue';

useHead({
  title: 'Spectrum Lab | Session 3 Intro',
});
</script>
