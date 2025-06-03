<template>
  <FishTankLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <InstructionHeader>
          Your Fishtank Part 2: Lighting needs for your inhabitants
        </InstructionHeader>
        <InstructionRow row-type="Investigate">
          Identify the lighting needs of your tank inhabitants based on the data
          charts.
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
          Complete the table with your selections.
        </InstructionRow>
        <LeftRightGroup class="mt-5">
          <template #left>
            <NextPrevButton direction="prev" light to="part-1">
              part 1
            </NextPrevButton>
          </template>
          <template #right>
            <NextPrevButton direction="next" light to="../light-your-tank">
              next section
            </NextPrevButton>
          </template>
        </LeftRightGroup>
      </ChallengeCard>
    </template>
  </FishTankLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';

useSpecLabHead('Your Fishtank part 2', 'Fishtank');
</script>
