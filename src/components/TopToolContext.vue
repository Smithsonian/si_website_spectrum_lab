<template>
  <slot></slot>
</template>

<script setup lang="ts">
import { isFirstOfTwoToolsKey } from '@/injectionKeys';
import { computed, provide } from 'vue';

const props = withDefaults(defineProps<{ hasBottomTool?: boolean }>(), {
  hasBottomTool: false,
});

const isFirstOfTwoTools = computed(() => props.hasBottomTool);

// Change top tool title when bottom tool is present
provide(isFirstOfTwoToolsKey, isFirstOfTwoTools);
</script>
