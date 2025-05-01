<template>
  <TutorialFloatingContainer
    v-if="tutorialState === 'model'"
    :width="600"
    :anchor-elem="anchorElem"
    :extra-offset="15"
    :no-scroll="!scrollToPopup"
  >
    <p>
      This is a high-resolution <strong>model</strong> of the predicted
      transmission spectrum from a cloud-free “Hot Jupiter” exoplanet.
    </p>
    <p>
      It is based on what astronomers know about planetary atmospheres and the
      physics and chemistry of atoms and molecules at the temperatures and
      pressures found in these planets.
    </p>
    <LeftRightGroup>
      <template #right>
        <NextPrevButton direction="next" @click="goToNext" />
      </template>
    </LeftRightGroup>
  </TutorialFloatingContainer>
</template>

<script setup lang="ts">
import { useExoplanetsClearTutorialStateMachine } from '@/utils/tutorialUtils';
import type { ComponentPublicInstance } from 'vue';

defineProps<{ anchorElem: HTMLElement | ComponentPublicInstance | null }>();

const { tutorialState, scrollToPopup, goToNext } =
  useExoplanetsClearTutorialStateMachine();
</script>
