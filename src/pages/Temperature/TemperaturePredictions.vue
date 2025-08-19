<template>
  <TemperatureLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <template #top>
          <InstructionHeader> Temperature Predictions </InstructionHeader>
          <InstructionRow rowType="Notebook">
            Answer these questions in your Notebook:
            <template #steps>
              <InstructionStep>
                You see a red star and a blue star in the sky. Which do you
                think has the higher temperature?
              </InstructionStep>
              <InstructionStep>
                Explain why you chose the answer you did. (It is okay if you
                guessed. We will explain the answer in the next section.)
              </InstructionStep>
            </template>
          </InstructionRow>
        </template>
        <template #middle>
          <div class="rounded-bottom-4 bg-gen-black">
            <img
              src="/src/assets/Blue_and_Red_Stars.png"
              height="544px"
              class="d-block mx-auto"
            />
          </div>
        </template>
      </ChallengeCard>
      <LeftRightGroup class="mt-5">
        <template #right>
          <NextPrevButton direction="next" to="thermal-emission" light>
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
