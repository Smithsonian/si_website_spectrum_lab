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
            v-if="atFirstSlide && prevPath"
            direction="prev"
            light
            :to="prevPath"
          >
            {{ prevLabel }}
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
            v-if="atLastSlide && nextPath"
            direction="next"
            light
            :to="nextPath"
          >
            {{ nextLabel }}
          </NextPrevButton>
        </template>
      </LeftRightGroup>
    </template>
  </ChallengeCard>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const props = withDefaults(
  defineProps<{
    slideOrder: string[];
    prevPath?: string;
    nextPath?: string;
    prevLabel?: string;
    nextLabel?: string;
  }>(),
  {
    prevLabel: 'previous section',
    nextLabel: 'next section',
  },
);

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
