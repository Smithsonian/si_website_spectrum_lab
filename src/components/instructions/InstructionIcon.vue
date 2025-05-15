<template>
  <SvgImage
    :src="iconPath"
    :style="{ height: '30px', 'padding-left': extraPadding }"
    class="ms-lg-2 ms-xl-3 ms-xxl-4 instruction-icon"
    :alt="`${rowType} icon`"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { SvgImage } from 'vite-awesome-svg-loader/vue-integration';
import introIcon from '@/assets/SVG/lightbulb-regular.svg?source&set-current-color';
import tutorialIcon from '@/assets/SVG/tutorial_instruction.svg?source&set-current-color';
import notebookIcon from '@/assets/SVG/notebook_instruction.svg?source&set-current-color';
import toolIcon from '@/assets/SVG/chart-bell-curve-cumulative.svg?source&set-current-color';
import videoIcon from '@/assets/SVG/Video.svg?source&set-current-color';
import investigateIcon from '@/assets/SVG/microscope-solid.svg?source&set-current-color';
import artIcon from '@/assets/SVG/palette-outline.svg?source&set-current-color';
import simulationIcon from '@/assets/SVG/Simulation.svg?source&set-current-color';
import type { InstructionRowType } from '@/constants';

const props = defineProps<{ rowType: InstructionRowType }>();
const iconPath = computed(() => {
  switch (props.rowType) {
    case 'Intro':
      return introIcon;
    case 'Tutorial':
      return tutorialIcon;
    case 'Notebook':
      return notebookIcon;
    case 'Tool':
      return toolIcon;
    case 'Video':
      return videoIcon;
    case 'Investigate':
      return investigateIcon;
    case 'Art':
      return artIcon;
    case 'Simulation':
      return simulationIcon;
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

<style>
.instruction-icon {
  color: var(--sl-light-blue);
}
</style>
