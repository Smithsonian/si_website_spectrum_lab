<template>
  <div class="bg-sl-lighter-blue text-dark py-5">
    <BContainer>
      <slot name="challenge-col"></slot>
    </BContainer>
  </div>
  <div v-if="$slots['tool-col']" class="py-5" style="min-height: 800px">
    <BContainer>
      <slot name="tool-col"></slot>
    </BContainer>
  </div>
</template>
