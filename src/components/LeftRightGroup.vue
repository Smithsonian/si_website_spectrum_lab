<template>
  <div class="d-flex justify-content-between">
    <div class="left-right-group-side-slot">
      <slot name="left"></slot>
    </div>
    <div v-if="$slots['middle']">
      <slot name="middle"></slot>
    </div>
    <div class="left-right-group-side-slot d-flex justify-content-end">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<style>
.left-right-group-side-slot {
  min-width: 170px;
}
</style>
