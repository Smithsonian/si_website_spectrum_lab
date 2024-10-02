<template>
  <BCol>
    <div class="tool-col text-white p-3 rounded-4">
      <BRow class="mb-3">
        <BCol cols="8" md="6" lg="8" xl="6">
          <BFormGroup label="Use your own spectrum data (CSV)">
            <BFormFile
              v-model="file"
              accept="text/csv"
              class="spectrum-filepicker"
            />
          </BFormGroup>
        </BCol>
        <BCol />
      </BRow>
      <BRow>
        <BCol>
          <div class="h3">Spectrum 1</div>
          <div class="spectrum-icon-holder rounded-4">
            <img
              class="spectrum-icon"
              :src="`/includes/AI_common/images/${iconFilename}`"
            />
          </div>
        </BCol>
        <BCol></BCol>
      </BRow>
    </div>
  </BCol>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const file = ref<null | File>(null);
const iconFilename = ref('Harry_sun_spectrum.jpg');
</script>

<style>
.tool-col {
  background-color: #1e4c7d;
}
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
  background-color: rgb(255 255 255 / 30%);
  color: var(--bs-light);
}
.spectrum-icon-holder {
  height: 160px;
  width: 180px;
  overflow: hidden;
}
.spectrum-icon {
  margin-left: -30px;
}
</style>
