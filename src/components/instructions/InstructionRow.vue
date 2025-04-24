<template>
  <BRow class="instruction-row">
    <BCol cols="1">
      <InstructionIcon :row-type="rowType" />
    </BCol>
    <BCol>
      <div class="instruction-row-paras">
        <p>
          <strong>{{ title }}</strong>
          <slot></slot>
        </p>
        <slot name="extra-paras"></slot>
      </div>
      <ol v-if="$slots.steps" class="fw-light">
        <slot name="steps"></slot>
      </ol>
      <p v-if="$slots.note" class="fw-light">
        Note:
        <slot name="note"></slot>
      </p>
    </BCol>
  </BRow>
</template>

<script setup lang="ts">
import type { InstructionRowType } from '@/constants';
import { computed } from 'vue';

const props = defineProps<{ rowType: InstructionRowType }>();

const title = computed(() => {
  switch (props.rowType) {
    case 'Intro':
      return 'Introduction.';
    case 'Tutorial':
      return 'Spectrum Tool Introduction.';
    case 'Notebook':
      return 'Spectrum Notebook.';
    case 'Tool':
      return 'Spectrum Tool.';
    case 'Video':
      return 'Video.';
    case 'Investigate':
      return 'Investigate.';
    case 'Art':
      return 'Artwork.';
    default:
      return '';
  }
});
</script>

<style>
.instruction-row {
  margin-bottom: 1rem;
}

.instruction-row-paras p {
  margin-bottom: 0.5rem;
}
</style>
