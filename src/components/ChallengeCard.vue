<template>
  <div
    class="rounded-4 bg-sl-royal-blue text-light"
    :class="{ 'p-3': !removePadding }"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineProps<{ removePadding?: boolean }>();
</script>
