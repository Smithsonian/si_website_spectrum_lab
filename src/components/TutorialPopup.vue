<template>
  <div
    ref="popupRef"
    class="tutorial-contents text-dark p-3"
    :style="{ width: `${width}px`, ...floatingStyles }"
  >
    <slot></slot>
    <div
      ref="arrowRef"
      class="tutorial-arrow position-absolute"
      :style="arrowStyles"
    ></div>
  </div>
</template>

<script setup lang="ts">
import {
  arrow,
  autoUpdate,
  offset,
  shift,
  useFloating,
} from '@floating-ui/vue';
import { computed, useTemplateRef, type ComponentPublicInstance } from 'vue';

const props = defineProps<{
  width: number;
  anchorElem: HTMLElement | ComponentPublicInstance | null;
}>();

const popupRef = useTemplateRef('popupRef');
const arrowRef = useTemplateRef('arrowRef');
const anchorRef = computed(() => props.anchorElem);

// This moves the box so the arrow is a fixed distance from the left edge, as in the designs
const crossOffset = props.width / 2 - 100;

const { floatingStyles, middlewareData } = useFloating(anchorRef, popupRef, {
  placement: 'bottom',
  middleware: [
    offset({ crossAxis: crossOffset }),
    shift({ padding: 10 }),
    arrow({ element: arrowRef }),
  ],
  whileElementsMounted: autoUpdate,
});

const arrowStyles = computed(() => {
  let left = '';
  if (middlewareData.value.arrow?.x != null) {
    left = `${middlewareData.value.arrow.x}px`;
  }
  return { left };
});
</script>

<style>
.tutorial-arrow {
  background-color: var(--sl-lighter-blue);
  top: -11px;
  width: 22px;
  height: 22px;
  transform: rotate(45deg);
  clip-path: polygon(-100% -100%, 200% -100%, -100% 200%);
  border: 2px solid var(--sl-muted-blue);
  box-shadow: 0px 0px 7px 2px var(--sl-muted-blue);
}
.tutorial-contents {
  z-index: 100;
  background-color: var(--sl-lighter-blue);
  border: 2px solid var(--sl-muted-blue);
  box-shadow: 0px 0px 7px 2px var(--sl-muted-blue);
}
</style>
