<template>
  <FishTankLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <InstructionHeader>
          Your Fish Tank Part 2: Lighting Needs for Your Inhabitants
        </InstructionHeader>
        <InstructionRow row-type="Investigate">
          Identify the lighting needs of your tank inhabitants based on the data
          charts.
          <template #before-steps>
            <p>
              <BLink
                :href="`${LARGE_FILES_BASE}/Speclab/FishTank_DataSheetpdf.pdf`"
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
import { LARGE_FILES_BASE } from '@/constants';
import { useSpecLabHead } from '@/utils/locationUtils';

useSpecLabHead('Your Fish Tank Part 2', 'Fish Tank');
</script>
