<template>
  <MuseumLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <InstructionHeader>
          Chokha Pigments Part 4: Data Table
        </InstructionHeader>
        <InstructionRow row-type="Investigate">
          Use the data charts provided to learn about the available plants,
          coral, and fish and decide which you would like in your fishtank.
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
            <NextPrevButton direction="prev" light to="uvl">
              part 3
            </NextPrevButton>
          </template>
          <template #right>
            <NextPrevButton direction="next" light to="../hokusai-painting">
              next section
            </NextPrevButton>
          </template>
        </LeftRightGroup>
      </ChallengeCard>
    </template>
  </MuseumLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';

useSpecLabHead('Chokha Pigments Part 4: Data Table', 'Museum');
</script>
