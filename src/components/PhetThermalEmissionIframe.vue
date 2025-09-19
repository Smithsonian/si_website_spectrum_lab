<template>
  <iframe
    height="550px"
    width="100%"
    src="https://phet.colorado.edu/sims/html/blackbody-spectrum/latest/blackbody-spectrum_en.html"
    allow="fullscreen"
    :class="bordered && 'border border-sl-light-blue rounded-4'"
  ></iframe>
</template>

<script setup lang="ts">
defineProps<{ bordered?: boolean }>();
</script>
