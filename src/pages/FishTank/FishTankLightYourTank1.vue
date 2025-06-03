<template>
  <FishTankLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <InstructionHeader>
          Light Your Tank Part 1: Choose your RGB light colors
        </InstructionHeader>
        <InstructionRow row-type="Simulation">
          Double click RGB Bulbs to launch the Phet color mixing simulation. Mix
          the RGB colors to get the color you would like for your tank, keeping
          in mind the health needs of your tank’s inhabitants.
        </InstructionRow>
        <InstructionRow row-type="Notebook">
          <template #steps>
            <InstructionStep>
              Identify the color of the light for your tank.
            </InstructionStep>
            <InstructionStep>
              Take a screenshot from the simulation of your color combination
              and paste it into your notebook.
            </InstructionStep>
            <InstructionStep>
              Complete the table showing what levels of each color you are using
              to get your tank’s light color.
            </InstructionStep>
            <InstructionStep>
              Explain why you chose this color combination.
            </InstructionStep>
          </template>
        </InstructionRow>
      </ChallengeCard>
    </template>
    <template #tool-col>
      <PhetIframe bordered />
      <LeftRightGroup class="mt-5">
        <template #left>
          <NextPrevButton direction="prev" light to="../your-fishtank">
            previous section
          </NextPrevButton>
        </template>
        <template #right>
          <NextPrevButton direction="next" light to="part-2">
            part 2
          </NextPrevButton>
        </template>
      </LeftRightGroup>
    </template>
  </FishTankLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';

useSpecLabHead('Light Your Tank part 1', 'Fishtank');
</script>
