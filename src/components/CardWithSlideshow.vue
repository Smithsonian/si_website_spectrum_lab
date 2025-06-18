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
        <template #middle>
          <div class="d-flex align-items-center h-100 color-sl-lighter-blue">
            <div
              v-for="i in slideOrder.length"
              :key="i - 1"
              class="card-with-slideshow-slide-button"
              :class="{ active: slideIndex === i - 1 }"
              @click="navigateToSlide(i - 1)"
            >
              <FontAwesomeIcon
                :icon="['fas', 'circle']"
                class="position-relative"
              />
            </div>
          </div>
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

const navigateToSlide = (index: number) => {
  slideIndex.value = index;
};
</script>

<style>
/* Borrowed from Vuetify round icon buttons used in Hubble Cosmic DS */
.card-with-slideshow-slide-button {
  cursor: pointer;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.card-with-slideshow-slide-button::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #fff;
  border-radius: inherit;
  opacity: 0;
  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.6, 1);
}
.card-with-slideshow-slide-button:hover:before {
  opacity: 0.15;
}
.card-with-slideshow-slide-button.active:before {
  opacity: 0.25;
}
.card-with-slideshow-slide-button.active:hover:before {
  opacity: 0.15;
}
</style>
