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
import toolIcon from '@/assets/SVG/chart-bell-curve-cumulative.svg';
import artIcon from '@/assets/SVG/palette-outline.svg';
import type { InstructionRowType } from '@/constants';

const props = defineProps<{ rowType: InstructionRowType }>();
const iconPath = computed(() => {
  switch (props.rowType) {
    case 'Tutorial':
      return tutorialIcon;
    case 'Notebook':
      return notebookIcon;
    case 'Tool':
      return toolIcon;
    case 'Art':
      return artIcon;
    default:
      return '';
  }
});
// Help line up the different icons
const extraPadding = computed(() => {
  if (props.rowType === 'Notebook') {
    return '2px';
  }
  return '0';
});
</script>
