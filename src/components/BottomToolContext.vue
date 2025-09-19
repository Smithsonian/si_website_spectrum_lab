<template>
  <slot></slot>
</template>

<script setup lang="ts">
import { inBottomToolSlotKey } from '@/injectionKeys';
import { provide } from 'vue';

// With this, ToolCards in the bottom slot can automatically change
// their default title, layout, etc.
provide(inBottomToolSlotKey, true);
</script>
