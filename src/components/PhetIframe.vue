<template>
  <iframe
    height="500px"
    width="100%"
    src="https://phet.colorado.edu/sims/html/color-vision/latest/color-vision_en.html"
    allow="fullscreen"
    :class="bordered && 'border border-sl-light-blue rounded-4'"
  ></iframe>
</template>

<script setup lang="ts">
defineProps<{ bordered?: boolean }>();
</script>
