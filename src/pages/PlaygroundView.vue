<template>
  <BRow>
    <ChallengeCol />
    <BCol>
      <ToolCard />
    </BCol>
  </BRow>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue';

useHead({
  title: 'Spectrum Lab | Playground',
});
</script>
