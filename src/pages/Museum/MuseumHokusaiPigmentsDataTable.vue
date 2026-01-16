<template>
  <MuseumLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <InstructionHeader>
          Hokusai Pigments Part 2: Time Period and Region
        </InstructionHeader>
        <InstructionRow row-type="Investigate">
          For the Regions of Interest in the painting where you feel confident
          of your pigment identifications, use the Pigment Data Table to
          determine the time period and geographic region where those pigments
          were commonly used.
          <template #before-steps>
            <p>
              <BLink
                :href="`${LARGE_FILES_BASE}/Speclab/MuseumConservationPigmentsDataTable.pdf`"
                target="_blank"
                rel="noopener"
              >
                Pigment Data Table
              </BLink>
            </p>
          </template>
        </InstructionRow>
        <InstructionRow row-type="Notebook">
          <template #steps>
            <InstructionStep>
              Complete the table with your information.
            </InstructionStep>
            <InstructionStep>
              Based on the time periods and geographic regions where your
              identified pigments were commonly used, what constraints can you
              place regarding when and where this painting was created? (Assume
              that all the pigments are original to the artist, and were not
              added at a later date).
            </InstructionStep>
          </template>
        </InstructionRow>
        <LeftRightGroup class="mt-5">
          <template #left>
            <NextPrevButton direction="prev" light to="spectra">
              part 1
            </NextPrevButton>
          </template>
          <template #right>
            <NextPrevButton direction="next" light to="../hokusai-ir-imaging">
              next section
            </NextPrevButton>
          </template>
        </LeftRightGroup>
      </ChallengeCard>
    </template>
  </MuseumLayout>
</template>

<script setup lang="ts">
import { LARGE_FILES_BASE } from '@/constants';
import { useSpecLabHead } from '@/utils/locationUtils';

useSpecLabHead('Chokha Pigments Part 4: Data Table', 'Museum');
</script>
