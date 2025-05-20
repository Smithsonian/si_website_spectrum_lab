<template>
  <ChallengeCard>
    <template #top>
      <slot></slot>
    </template>
    <template #middle>
      <img width="100%" :src="slideOrder[slideIndex]" />
    </template>
    <template #bottom>
      <LeftRightGroup>
        <template #left v-if="!atFirstSlide">
          <NextPrevButton direction="prev" light @click="prevSlide"
            >prev slide</NextPrevButton
          >
        </template>
        <template #right v-if="!atLastSlide">
          <NextPrevButton direction="next" light @click="nextSlide"
            >next slide</NextPrevButton
          >
        </template>
      </LeftRightGroup>
    </template>
  </ChallengeCard>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const props = defineProps<{ slideOrder: string[] }>();

const slideIndex = ref(0);

const atFirstSlide = computed(() => slideIndex.value <= 0);
const atLastSlide = computed(
  () => slideIndex.value >= props.slideOrder.length - 1,
);

const nextSlide = () => {
  if (!atLastSlide.value) {
    slideIndex.value++;
  }
};

const prevSlide = () => {
  if (!atFirstSlide.value) {
    slideIndex.value--;
  }
};
</script>
