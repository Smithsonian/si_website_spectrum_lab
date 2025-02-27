<template>
  <div class="mt-5 mb-3">
    <BContainer>
      <slot name="challenge-col"></slot>
    </BContainer>
  </div>
  <hr class="challenge-tool-layout-hr mb-3" />
  <div>
    <BContainer>
      <slot name="tool-col"></slot>
    </BContainer>
  </div>
</template>

<style>
.challenge-tool-layout-hr {
  border: none;
  border-top: 1px solid var(--sl-dark-purple);
  opacity: 1;
}
</style>
