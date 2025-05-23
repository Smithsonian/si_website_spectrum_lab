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
        <template #left>
          <NextPrevButton
            v-if="atFirstSlide && prevSection"
            direction="prev"
            light
            :to="prevSection"
          >
            previous section
          </NextPrevButton>
          <NextPrevButton
            v-if="!atFirstSlide"
            direction="prev"
            light
            @click="prevSlide"
          >
            previous slide
          </NextPrevButton>
        </template>
        <template #right>
          <NextPrevButton
            v-if="!atLastSlide"
            direction="next"
            light
            @click="nextSlide"
          >
            next slide
          </NextPrevButton>
          <NextPrevButton
            v-else-if="nextSection"
            direction="next"
            light
            :to="nextSection"
          >
            next section
          </NextPrevButton>
        </template>
      </LeftRightGroup>
    </template>
  </ChallengeCard>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const props = defineProps<{
  slideOrder: string[];
  prevSection?: string;
  nextSection?: string;
}>();

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
