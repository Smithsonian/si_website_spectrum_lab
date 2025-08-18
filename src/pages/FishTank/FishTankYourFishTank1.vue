<template>
  <FishTankLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <InstructionHeader>
          Your Fish Tank Part 1: Choose Your Inhabitants
        </InstructionHeader>
        <InstructionRow row-type="Investigate">
          Use the data charts provided to learn about the available plants,
          coral, and fish and decide which you would like in your fish tank.
          <template #before-steps>
            <p>
              <BLink
                href="https://waps.cfa.harvard.edu/microobservatory/spectrum/large_files/Fish%20Tank%20Project%20Data%20Charts.pdf"
                target="_blank"
                rel="noopener"
              >
                Fish Tank Project Data Charts
              </BLink>
            </p>
          </template>
        </InstructionRow>
        <InstructionRow row-type="Notebook">
          <template #steps>
            <InstructionStep>
              Complete the table with your selections.
            </InstructionStep>
            <InstructionStep>
              Explain why you chose these plants and animals.
            </InstructionStep>
          </template>
        </InstructionRow>
        <LeftRightGroup class="mt-5">
          <template #left>
            <NextPrevButton
              direction="prev"
              light
              to="../plant-reflection-spectra"
            >
              previous section
            </NextPrevButton>
          </template>
          <template #right>
            <NextPrevButton direction="next" light to="part-2">
              part 2
            </NextPrevButton>
          </template>
        </LeftRightGroup>
      </ChallengeCard>
    </template>
  </FishTankLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';

useSpecLabHead('Your Fish Tank Part 1', 'Fish Tank');
</script>
