<template>
  <SvgImage
    :src="iconPath"
    :style="iconStyle"
    class="instruction-icon"
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

interface IconStyle {
  height: number;
  width: number;
  top: number;
  left: number;
}

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

const iconStyle = computed((): IconStyle => {
  const defaultStyle = {
    height: 18,
    width: 22,
    top: 3,
    left: -35,
  };
  switch (props.rowType) {
    case 'Notebook':
      return {
        ...defaultStyle,
        width: 25,
        left: -33,
      };
    case 'Tool':
      return {
        ...defaultStyle,
        height: 20,
      };
    case 'Art':
      return {
        ...defaultStyle,
        height: 22,
      };
    case 'Simulation':
      return {
        ...defaultStyle,
        left: -34,
      };
    case 'Intro':
      return {
        ...defaultStyle,
        height: 20,
        left: -36,
      };
    default:
      return defaultStyle;
  }
});
</script>

<style>
.instruction-icon {
  color: var(--sl-light-blue);
  position: absolute;
}
</style>
