<template>
  <TutorialPopup
    v-if="tutorialState === 'widthDepth'"
    :width="600"
    :anchor-elem="anchorElem"
    :extra-offset="15"
    :no-scroll="!scrollToPopup"
  >
    <p>
      Different atmospheric conditions — such as <strong>Clouds</strong> — can
      change how individual spectral signatures appear, including the
      <strong>width</strong> and <strong>depth</strong> of specific absorption
      features.
    </p>
    <LeftRightGroup>
      <template #right>
        <NextPrevButton direction="next" @click="goToNext" />
      </template>
    </LeftRightGroup>
  </TutorialPopup>
</template>

<script setup lang="ts">
import { useExoplanetsCloudyTutorialStateMachine } from '@/utils/tutorialUtils';
import type { ComponentPublicInstance } from 'vue';

defineProps<{ anchorElem: HTMLElement | ComponentPublicInstance | null }>();

const { tutorialState, scrollToPopup, goToNext } =
  useExoplanetsCloudyTutorialStateMachine();
</script>
