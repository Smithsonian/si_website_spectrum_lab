<template>
  <BRow>
    <ChallengeCol />
    <BCol>
      <ToolCard :zoom="zoom" />
      <BRow class="mt-2">
        <BCol cols="6" offset="4">
          <BFormInput
            v-model="zoomPercent"
            type="range"
            min="2"
            max="200"
            class="zoom-slider"
          />
        </BCol>
      </BRow>
    </BCol>
  </BRow>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue';
import { BFormInput } from 'bootstrap-vue-next';
import { computed, ref } from 'vue';

useHead({
  title: 'Spectrum Lab | Playground',
});

const zoomPercent = ref(100);
const zoom = computed(() => zoomPercent.value / 100);
</script>

<style>
.zoom-slider::-webkit-slider-runnable-track {
  background-color: var(--bs-gray-400);
}
.zoom-slider::-moz-range-track {
  background-color: var(--bs-gray-400);
}
</style>
