<template>
  <img
    :src="iconPath"
    :style="{ height: '30px', 'padding-left': extraPadding }"
    class="ms-lg-2 ms-xl-3 ms-xxl-4"
    alt="{{ name }} icon"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import tutorialIcon from '@/assets/SVG/tutorial_instruction.svg';
import notebookIcon from '@/assets/SVG/notebook_instruction.svg';
import toolIcon from '@/assets/SVG/tool_instruction.svg';

type InstructionIconName = 'Tutorial' | 'Notebook' | 'Tool';
const props = defineProps<{ name: InstructionIconName }>();
const iconPath = computed(() => {
  switch (props.name) {
    case 'Tutorial':
      return tutorialIcon;
    case 'Notebook':
      return notebookIcon;
    case 'Tool':
      return toolIcon;
    default:
      return '';
  }
});
// Help line up the different icons
const extraPadding = computed(() => {
  if (props.name === 'Notebook') {
    return '2px';
  }
  return '0';
});
</script>
