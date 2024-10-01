<template>
  <BRow>
    <ChallengeCol />
    <ToolCol />
  </BRow>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue';

useHead({
  title: 'Spectrum Lab | Playground',
});
</script>
