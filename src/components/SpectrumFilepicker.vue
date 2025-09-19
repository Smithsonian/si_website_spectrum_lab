<template>
  <BCol cols="12" sm="10" md="8" lg="6" xl="5">
    <label class="spectrum-filepicker-label">
      <span class="spectrum-filepicker-button">
        <img src="/src/assets/SVG/import.svg" height="16px" />
      </span>
      <span class="spectrum-filepicker-status">
        <template v-if="file">{{ file.name }}</template>
        <template v-else>
          <span class="fw-semibold">Import your own spectrum data</span>
          (text or csv)
        </template>
      </span>
      <BFormFile
        v-model="file"
        accept="text/plain,text/csv"
        class="spectrum-filepicker-input"
      />
    </label>
  </BCol>
</template>

<script setup lang="ts">
const file = defineModel<File | null>();
</script>

<style>
.spectrum-filepicker-label {
  border-radius: var(--bs-border-radius);
  display: flex;
  vertical-align: middle;
  --sl-sfp-radius: 0.25rem;
  cursor: pointer;
  position: relative;
}
.spectrum-filepicker-label:focus-within {
  box-shadow: 0 0 0 0.25rem var(--bs-focus-ring-color);
}
.spectrum-filepicker-button {
  background-color: var(--sl-slate-blue);
  border: var(--bs-border-width) solid var(--sl-light-blue);
  border-top-left-radius: var(--sl-sfp-radius);
  border-bottom-left-radius: var(--sl-sfp-radius);
  display: flex;
  align-items: center;
  padding: 0.25rem 0.5rem 0.25rem 0.5rem;
}
.spectrum-filepicker-status {
  color: var(--bs-light);
  background-color: var(--sl-navy);
  border: var(--bs-border-width) solid var(--sl-light-blue);
  border-left: 0;
  border-top-right-radius: var(--sl-sfp-radius);
  border-bottom-right-radius: var(--sl-sfp-radius);
  padding: 0.25rem 0.5rem 0.25rem 0.5rem;
  font-size: 0.875rem;
  flex: 1 1 auto;
}
.spectrum-filepicker-input {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
}
</style>
