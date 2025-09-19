<template>
  <BRow class="pb-3">
    <BCol cols="9">
      <h1 class="h4">{{ heading }}</h1>
      <slot></slot>
    </BCol>
    <BCol cols="2">
      <div>
        <SvgImage :src="iconPath" :alt="iconAlt" class="challenge-intro-icon" />
      </div>
    </BCol>
  </BRow>
</template>

<script setup lang="ts">
import { SvgImage } from 'vite-awesome-svg-loader/vue-integration';

const { heading, iconPath, iconAlt } = defineProps<{
  heading: string;
  iconPath: string;
  iconAlt: string;
}>();
</script>

<style>
.challenge-intro-icon {
  height: 80px;
  color: var(--slr-dark-grey);
}
</style>
