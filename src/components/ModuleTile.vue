<template>
  <RouterLink :to="to" class="text-decoration-none text-light">
    <div
      class="p-3 rounded-4 h-100 d-flex module-tile"
      :class="{
        'module-tile-dark': !lighter,
        'module-tile-lighter': lighter,
      }"
    >
      <div class="module-tile-icon-container">
        <SvgImage
          v-if="iconSource"
          :src="iconSource"
          class="module-tile-icon"
        />
      </div>
      <div>
        <div class="text-uppercase fs-5 fw-bold color-sl-light-blue">
          {{ title }}
        </div>
        <slot></slot>
      </div>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import { SvgImage } from 'vite-awesome-svg-loader/vue-integration';

defineProps<{
  iconSource?: string;
  title: string;
  to: string;
  lighter?: boolean;
}>();
</script>

<style>
.module-tile-icon-container {
  padding-right: 1rem;
}

.module-tile-icon {
  height: 60px;
  width: 80px;
  color: var(--gen-grey);
}

path.cls-1 {
  fill: var(--gen-grey);
}

.module-tile-dark {
  background-color: var(--sl-navy);
}

.module-tile-lighter {
  background-color: var(--sl-royal-blue);
}

.module-tile-dark:hover {
  background-color: #143c66;
}

.module-tile-lighter:hover {
  background-color: hwb(202 0% 53%);
}
</style>
