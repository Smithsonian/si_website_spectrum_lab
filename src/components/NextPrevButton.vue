<template>
  <BButton class="next-prev-button" :class="{ 'button-light': light }" :to="to">
    <span v-if="direction === 'prev'">
      <FontAwesomeIcon :icon="['fas', 'chevron-left']" />{{ ' ' }}
    </span>
    <slot>{{ directionDisplay }}</slot>
    <span v-if="direction === 'next'">
      {{ ' ' }}<FontAwesomeIcon :icon="['fas', 'chevron-right']" />
    </span>
  </BButton>
</template>

<script setup lang="ts">
import { computed } from 'vue';

type Direction = 'next' | 'prev';

const props = defineProps<{
  to?: string;
  direction: Direction;
  light?: boolean;
}>();

const directionDisplay = computed((): string => {
  return props.direction === 'prev' ? 'back' : 'next';
});
</script>

<style>
.btn.next-prev-button.button-light {
  border: 2px solid var(--sl-muted-blue);
  background-color: var(--sl-lighter-blue);
  color: var(--sl-dark-purple);
  font-weight: 600;
}

.btn.next-prev-button.button-light:hover {
  border: 2px solid var(--sl-muted-blue);
  background-color: var(--sl-dark-purple);
  /* This is the Bootstrap default light text incantation */
  color: rgba(var(--bs-light-rgb), 1);
  font-weight: 600;
}

.btn.next-prev-button {
  border: 2px solid var(--sl-light-blue);
  background-color: var(--sl-navy);
  font-weight: 600;
}

.btn.next-prev-button:hover {
  border: 2px solid var(--sl-muted-blue);
  background-color: var(--sl-light-blue);
  color: var(--sl-dark-purple);
  font-weight: 600;
}
</style>
