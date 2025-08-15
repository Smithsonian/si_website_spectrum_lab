<template>
  <FishTankLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <InstructionHeader>Put it Together</InstructionHeader>
        <InstructionRow row-type="Notebook">
          Using all the data you’ve collected, write a paragraph that describes
          the set-up of your tank including what creatures you’ve chosen to live
          in the tank, what lighting scheme you have chosen for the tank and why
          you made these choices.
        </InstructionRow>
        <LeftRightGroup class="mt-4">
          <template #left>
            <NextPrevButton
              direction="prev"
              light
              to="inhabitants-under-lights"
            >
              previous section
            </NextPrevButton>
          </template>
        </LeftRightGroup>
      </ChallengeCard>
    </template>
  </FishTankLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';

useSpecLabHead('Put it Together', 'Fish Tank');
</script>
