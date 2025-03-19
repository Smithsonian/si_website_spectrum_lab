<template>
  <TemperatureLayout>
    <template #challenge-tab>
      <ChallengeCard remove-padding>
        <div class="pt-3 px-3">
          <BRow class="my-3">
            <BCol cols="1"></BCol>
            <BCol><h2 class="h4">Temperature and Colors from Spectra</h2></BCol>
          </BRow>
          <BRow>
            <BCol cols="1">
              <InstructionIcon name="Notebook" />
            </BCol>
            <BCol>
              <p class="mb-2">
                <strong>Spectrum Notebook.</strong> In the
                <em>Temperature and Colors from Spectra</em>
                section, answer these questions:
              </p>
              <ol class="fw-light">
                <li class="mb-2">
                  You see a red star and a blue star in the sky. Which do you
                  think has the higher temperature?
                </li>
                <li class="mb-2">
                  Explain why you chose the answer you did. It’s okay if you
                  have no idea! We will explain the answer in the next section.
                </li>
              </ol>
            </BCol>
          </BRow>
        </div>
        <div
          class="rounded-bottom-4"
          style="background-color: var(--gen-black)"
        >
          <img
            src="/src/assets/Blue_and_Red_Stars.png"
            height="544px"
            class="d-block mx-auto"
          />
        </div>
      </ChallengeCard>
      <LeftRightGroup class="mt-5">
        <template #right>
          <NextPrevButton direction="next" to="stars" light>
            next section
          </NextPrevButton>
        </template>
      </LeftRightGroup>
    </template>
  </TemperatureLayout>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue';

useHead({
  title: 'Spectrum Lab | Temperature: Predictions',
});
</script>
