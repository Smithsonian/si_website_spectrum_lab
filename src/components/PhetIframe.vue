<template>
  <iframe
    height="500px"
    width="100%"
    src="https://phet.colorado.edu/sims/html/color-vision/latest/color-vision_en.html"
    allow="fullscreen"
    :class="{ 'phet-iframe-bordered': bordered }"
  ></iframe>
</template>

<script setup lang="ts">
defineProps<{ bordered?: boolean }>();
</script>

<style>
.phet-iframe-bordered {
  border: 1px solid var(--sl-light-blue);
  border-radius: 1rem;
}
</style>
