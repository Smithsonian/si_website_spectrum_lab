<template>
  <BCol cols="8" md="6" lg="8" xl="6">
    <BFormGroup label="Use your own spectrum data (CSV)">
      <BFormFile v-model="file" accept="text/csv" class="spectrum-filepicker" />
    </BFormGroup>
  </BCol>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const file = ref<File | null>(null);
</script>

<style>
input.spectrum-filepicker {
  background-color: rgb(255 255 255 / 10%);
  color: var(--bs-light);
  border-color: var(--bs-gray);
}
input.spectrum-filepicker::file-selector-button {
  color: var(--bs-light);
  background-color: #7f9ccb;
}
input.spectrum-filepicker:focus:not(:disabled):not(
    [readonly]
  )::file-selector-button,
input.spectrum-filepicker:hover:not(:disabled):not(
    [readonly]
  )::file-selector-button {
  color: var(--bs-light);
  background-color: #9bbff8;
}
input.spectrum-filepicker:focus,
input.spectrum-filepicker:hover {
  background-color: rgb(255 255 255 / 10%);
  color: var(--bs-light);
}
</style>
