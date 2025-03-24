<template>
  <TemperatureLayout>
    <template #challenge-tab>
      <ChallengeCard remove-padding>
        <div class="pt-3 px-3">
          <InstructionHeader>
            Temperature and Colors from Spectra
          </InstructionHeader>
          <InstructionRow rowType="Notebook">
            In the <em>Temperature and Colors from Spectra</em>
            section, answer these questions:
            <template #questions>
              <InstructionQuestion>
                You see a red star and a blue star in the sky. Which do you
                think has the higher temperature?
              </InstructionQuestion>
              <InstructionQuestion>
                Explain why you chose the answer you did. It’s okay if you have
                no idea! We will explain the answer in the next section.
              </InstructionQuestion>
            </template>
          </InstructionRow>
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
import { useSpecLabHead } from '@/utils/locationUtils';

useSpecLabHead('Predictions', 'Temperature');
</script>
