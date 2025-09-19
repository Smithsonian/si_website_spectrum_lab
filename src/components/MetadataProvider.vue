<template>
  <slot></slot>
</template>

<script setup lang="ts">
import { useAllMetadata } from '@/utils/metadataUtils';

// Initialize it here so everyone can use the saved one
useAllMetadata();
</script>
