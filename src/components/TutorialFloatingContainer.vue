<template>
  <div
    ref="floatingRef"
    class="tutorial-container text-dark p-3"
    :style="{ width: `${width}px`, ...floatingStyles }"
  >
    <div class="float-end" style="height: 10px; width: 10px"></div>
    <button
      type="button"
      class="btn-close position-absolute"
      aria-label="Close tutorial"
      :style="{
        right: '3px',
        top: '3px',
      }"
      @click="closeHandler"
    ></button>
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
import {
  computed,
  useTemplateRef,
  watch,
  type ComponentPublicInstance,
} from 'vue';

const props = withDefaults(
  defineProps<{
    width: number;
    anchorElem: HTMLElement | ComponentPublicInstance | null;
    closeHandler: () => void;
    extraOffset?: number;
    noScroll?: boolean;
  }>(),
  { extraOffset: 0 },
);

const floatingRef = useTemplateRef('floatingRef');
const arrowRef = useTemplateRef('arrowRef');
const anchorRef = computed(() => props.anchorElem);

// This moves the box so the arrow is a fixed distance from the left edge, as in the designs
const crossOffset = props.width / 2 - 100;

const { floatingStyles, middlewareData, isPositioned } = useFloating(
  anchorRef,
  floatingRef,
  {
    placement: 'bottom',
    middleware: [
      offset({ crossAxis: crossOffset, mainAxis: props.extraOffset }),
      shift({ padding: 10 }),
      arrow({ element: arrowRef }),
    ],
    whileElementsMounted: autoUpdate,
  },
);

const arrowStyles = computed(() => {
  let left = '';
  if (middlewareData.value.arrow?.x != null) {
    left = `${middlewareData.value.arrow.x}px`;
  }
  return { left };
});

watch([isPositioned, () => props.noScroll], ([isPositioned, noScroll]) => {
  if (noScroll) {
    return;
  }
  if (isPositioned && floatingRef.value) {
    floatingRef.value.scrollIntoView();
  }
});
</script>

<style>
.tutorial-arrow {
  background-color: var(--sl-lighter-blue);
  /* Move the center to the top, with an extra pixel for overlap */
  top: -11px;
  width: 24px;
  height: 24px;
  transform: rotate(45deg);
  /* Cut off the bottom half of the triangle, plus the overlapping portion */
  clip-path: polygon(-100% -100%, 195% -100%, -100% 195%);
  border: 2px solid var(--sl-slate-blue);
  box-shadow: 0px 0px 7px 2px var(--sl-slate-blue);
}
.tutorial-container {
  z-index: 100;
  background-color: var(--sl-lighter-blue);
  border: 2px solid var(--sl-slate-blue);
  box-shadow: 0px 0px 7px 2px var(--sl-slate-blue);
}
</style>
