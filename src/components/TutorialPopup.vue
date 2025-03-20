<template>
  <div
    class="tutorial-origin position-absolute"
    style="width: 13px; height: 13px"
  >
    <div class="tutorial-arrow position-absolute"></div>
    <div
      class="tutorial-contents position-absolute text-dark fw-light p-3"
      :style="{ width: width }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ width: string }>();
</script>

<style>
.tutorial-origin {
  width: 13px;
  height: 13px;
}
.tutorial-arrow {
  width: 0;
  height: 0;
  border-left: 13px solid transparent;
  border-right: 13px solid transparent;
  border-bottom: 13px solid var(--sl-lighter-blue);
  left: -13px;
}
.tutorial-contents {
  background-color: var(--sl-lighter-blue);
  top: 13px;
  left: -59px;
}
</style>
