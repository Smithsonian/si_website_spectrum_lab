<template>
  <SvgImage
    v-if="iconPath"
    :src="iconPath"
    :style="iconStyle"
    class="instruction-icon"
    :alt="`${rowType} icon`"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { SvgImage } from 'vite-awesome-svg-loader/vue-integration';
import tutorialIcon from '@/assets/SVG/tutorial_instruction.svg?source&set-current-color';
import notebookIcon from '@/assets/SVG/notebook_instruction.svg?source&set-current-color';
import toolIcon from '@/assets/SVG/chart-bell-curve-cumulative.svg?source&set-current-color';
import videoIcon from '@/assets/SVG/Video.svg?source&set-current-color';
import investigateIcon from '@/assets/SVG/microscope-solid.svg?source&set-current-color';
import artIcon from '@/assets/SVG/palette-outline.svg?source&set-current-color';
import simulationIcon from '@/assets/SVG/Simulation.svg?source&set-current-color';
import slideshowIcon from '@/assets/SVG/Slideshow.svg?source&set-current-color';
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
    case 'Slideshow':
      return slideshowIcon;
    default:
      return '';
  }
});

const iconStyle = computed((): IconStyle => {
  const defaultStyle = {
    height: 20,
    width: 24,
    top: 2,
    left: -38,
  };
  switch (props.rowType) {
    case 'Notebook':
      return {
        ...defaultStyle,
        width: defaultStyle.width * 1.15,
        left: defaultStyle.left + 2,
      };
    case 'Tool':
      return {
        ...defaultStyle,
        height: defaultStyle.height * 1.1,
      };
    case 'Art':
      return {
        ...defaultStyle,
        top: defaultStyle.top - 2,
        height: defaultStyle.height * 1.3,
        width: defaultStyle.width * 1.1,
      };
    case 'Simulation':
      return {
        ...defaultStyle,
        width: defaultStyle.width * 1.1,
      };
    case 'Slideshow':
      return {
        ...defaultStyle,
        width: defaultStyle.width * 1.1,
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
