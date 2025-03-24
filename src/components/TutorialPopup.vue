<template>
  <div
    class="tutorial-origin position-absolute"
    :style="{ bottom: bottom, left: left }"
  >
    <div
      class="tutorial-contents position-absolute text-dark p-3"
      :style="{ width: width }"
    >
      <slot></slot>
    </div>
    <div class="tutorial-arrow position-absolute"></div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ width: string; bottom: string; left: string }>();
</script>

<style>
.tutorial-origin {
  z-index: 100;
}
.tutorial-arrow {
  background-color: var(--sl-lighter-blue);
  top: 0;
  left: 0;
  width: 21.5px;
  height: 21.5px;
  transform-origin: top left;
  transform: rotate(45deg);
  clip-path: polygon(-100% -100%, 200% -100%, -100% 200%);
  border: 2px solid var(--sl-muted-blue);
  box-shadow: 0px 0px 7px 2px var(--sl-muted-blue);
}
.tutorial-contents {
  background-color: var(--sl-lighter-blue);
  top: 13px;
  left: -59px;
  border: 2px solid var(--sl-muted-blue);
  box-shadow: 0px 0px 7px 2px var(--sl-muted-blue);
}
</style>
