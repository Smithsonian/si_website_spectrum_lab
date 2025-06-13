<template>
  <MuseumLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <InstructionHeader>
          Hokusai Pigments Part 2: Data Table
        </InstructionHeader>
        <InstructionRow row-type="Investigate">
          Use the data chart provided to learn about the properties of some
          paint pigments, and where and when they have been used.
          <template #before-steps>
            <p>
              <BLink
                href="https://docs.google.com/document/d/12tWtxQ2-CibGcFYxlEbWjwgogqQr0MFKGtHnW1s0N7Y/edit?usp=sharing"
                target="_blank"
                rel="noopener"
              >
                Pigment Data Table
              </BLink>
            </p>
          </template>
        </InstructionRow>
        <InstructionRow row-type="Notebook">
          Complete the table with your information.
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
import { useSpecLabHead } from '@/utils/locationUtils';

useSpecLabHead('Chokha Pigments Part 4: Data Table', 'Museum');
</script>
