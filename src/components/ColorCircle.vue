<template>
  <BCol cols="2">
    <div class="color-circle mb-2" :style="{ 'background-color': color }"></div>
    <small>
      <div>{{ displayName }}</div>
      <div>
        <code>{{ color }}</code>
      </div>
      <div>
        <code>{{ variableName }}</code>
      </div>
    </small>
  </BCol>
</template>

<script setup lang="ts">
defineProps<{ color: string; displayName: string; variableName: string }>();
</script>

<style>
.color-circle {
  height: 75px;
  width: 75px;
  border: 1px solid black;
  border-radius: 50%;
}
</style>
