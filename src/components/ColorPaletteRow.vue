<template>
  <BRow class="my-2">
    <BCol cols="2">
      <h2>{{ title }}</h2>
    </BCol>
    <BCol>
      <BRow>
        <slot></slot>
      </BRow>
    </BCol>
  </BRow>
  <hr />
</template>

<script setup lang="ts">
defineProps<{ title: string }>();
</script>
