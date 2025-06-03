<template>
  <div
    class="rounded-4 bg-sl-royal-blue text-light"
    :class="{ 'challenge-card-padded': !$slots['middle'] }"
  >
    <div v-if="$slots['top']" class="challenge-card-top">
      <!-- Use these slots if you need something in the middle
       with its own background/padding situation.
       The outer padding will be removed in that case.
        -->
      <slot name="top"></slot>
    </div>
    <div
      v-if="$slots['middle']"
      :class="{
        'rounded-bottom-4': !$slots['bottom'],
        'overflow-hidden': !$slots['bottom'],
      }"
    >
      <slot name="middle"></slot>
    </div>
    <div v-if="$slots['bottom']" class="challenge-card-bottom">
      <slot name="bottom"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<style>
.challenge-card-padded {
  padding: 1rem 60px 1rem 60px;
}

.challenge-card-top {
  padding: 1rem 60px 0 60px;
}

.challenge-card-bottom {
  padding: 1.5rem 60px 1.5rem 60px;
}
</style>
