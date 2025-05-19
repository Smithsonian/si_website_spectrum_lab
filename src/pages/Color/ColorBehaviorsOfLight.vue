<template>
  <ColorLayout>
    <ChallengeCard>
      <template #top>
        <InstructionHeader>Behaviors of Light</InstructionHeader>
        <InstructionRow row-type="Slideshow">
          Learn about the four key behaviors of light: emission, absorption,
          transmission, and reflection.
        </InstructionRow>
        <InstructionRow row-type="Notebook">
          In <em>Part A</em> of the <em>Behaviors of Light</em> section, label
          the diagram with the key behaviors of light. Then, answer the
          questions in <em>Part B</em>.
        </InstructionRow>
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
  </ColorLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';
import slide1 from '@/assets/behaviors_of_light/behaviors_of_light_slide1.png';
import slide2 from '@/assets/behaviors_of_light/behaviors_of_light_slide2.png';
import slide3 from '@/assets/behaviors_of_light/behaviors_of_light_slide3.png';
import slide4 from '@/assets/behaviors_of_light/behaviors_of_light_slide4.png';
import { computed, ref } from 'vue';

useSpecLabHead('Behaviors of Light', 'Color');

const slideOrder = [slide1, slide2, slide3, slide4];

const slideIndex = ref(0);

const atFirstSlide = computed(() => slideIndex.value <= 0);
const atLastSlide = computed(() => slideIndex.value >= slideOrder.length - 1);

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
