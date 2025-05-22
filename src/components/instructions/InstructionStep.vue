<template>
  <div v-if="!props.singleton">
    <li class="mb-2">
      <slot></slot>
    </li>
  </div>
  <div v-else>
    <div class="mb-2">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    singleton?: boolean;
  }>(),
  {
    singleton: false,
  },
);
</script>
