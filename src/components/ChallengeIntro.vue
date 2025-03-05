<template>
  <BRow class="pb-3">
    <BCol cols="9">
      <h1 class="h4">{{ heading }}</h1>
      <slot></slot>
    </BCol>
    <BCol cols="2">
      <div>
        <img :src="iconPath" :alt="iconAlt" style="height: 80px"/>
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
