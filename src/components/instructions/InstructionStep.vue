<template>
  <li class="instruction-step">
    <slot></slot>
  </li>
</template>

<style>
.instruction-step {
  margin-bottom: 0.5rem;
}

.instruction-step:only-child {
  list-style-type: none;
}
</style>
