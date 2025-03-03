<template>
  <BRow class="pb-3">
    <BCol cols="9">
      <h1 class="h4">{{ heading }}</h1>
      <slot></slot>
    </BCol>
    <BCol cols="2">
      <div style="width: 80px">
        <img :src="iconPath" :alt="iconAlt" />
      </div>
    </BCol>
  </BRow>
</template>

<script setup lang="ts">
const { heading, iconPath, iconAlt } = defineProps<{
  heading: string;
  iconPath: string;
  iconAlt: string;
}>();
</script>
