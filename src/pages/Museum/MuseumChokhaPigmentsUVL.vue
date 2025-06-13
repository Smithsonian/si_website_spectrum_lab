<template>
  <MuseumLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <template #top>
          <InstructionHeader
            >Chokha Pigments Part 3: UV-induced Luminescence</InstructionHeader
          >
          <InstructionRow rowType="Investigate">
            <template #steps>
              <InstructionStep>
                Use the
                <span style="font-weight: 600">No filter/UVL</span> buttons to
                toggle between the visible light image and an image showing
                UV-induced luminescence (UVL) from pigments in the painting.
              </InstructionStep>
              <InstructionStep>
                Identify a region of interest from Table 1 that is glowing in
                the UVL image.
              </InstructionStep>
              <InstructionStep>
                Use this
                <BLink
                  href="https://docs.google.com/document/d/12tWtxQ2-CibGcFYxlEbWjwgogqQr0MFKGtHnW1s0N7Y/edit?usp=sharing"
                  target="_blank"
                  rel="noopener"
                  >data table</BLink
                >
                to identify a pigment of this color that creates UVL.
              </InstructionStep>
            </template>
          </InstructionRow>
          <InstructionRow rowType="Notebook">
            Use the information to complete the table in your notebook.
          </InstructionRow>
          <div class="mb-3">
            <BFormRadioGroup
              v-model="chosenFilter"
              :options="FILTER_OPTION_LIST"
              name="chosen-filter"
              class="chosen-filter-picker"
              buttons
              button-variant="primary"
            />
          </div>
        </template>
        <template #middle>
          <img :src="imageUrl" class="d-block mb-2 challenge-image" />
        </template>
      </ChallengeCard>
      <LeftRightGroup class="mt-5">
        <template #left>
          <NextPrevButton to="uvl-intro" direction="prev" dark>
            part 2
          </NextPrevButton>
        </template>
        <template #right>
          <NextPrevButton to="data-table" direction="next" dark>
            part 4
          </NextPrevButton>
        </template>
      </LeftRightGroup>
    </template>
  </MuseumLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';

import { computed, ref } from 'vue';
import chokhaChallenge from '@/assets/spectrum_data/Museum_Conservation/chokha_painting_labels_910.webp';
import chokhaUVL from '@/assets/spectrum_data/Museum_Conservation/chokha_uvl_2000.webp';

useSpecLabHead('Chokha Pigments Part 3: UVL', 'Museum');

const FILTER_OPTION_LIST = [
  { text: 'No filter', value: 'none' },
  { text: 'UVL', value: 'UVL' },
] as const;

type FilterValues = (typeof FILTER_OPTION_LIST)[number]['value'];
const chosenFilter = ref<FilterValues>('none');
const imageUrl = computed(() => {
  switch (chosenFilter.value) {
    case 'none':
      return chokhaChallenge;
    case 'UVL':
      return chokhaUVL;
    default:
      return '';
  }
});
</script>

<style>
.chosen-filter-picker .btn-primary {
  --bs-btn-active-bg: hwb(188 70% 7%);
  --bs-btn-border-color: var(--sl-navy);
  --bs-btn-active-border-color: var(--sl-navy);
  margin-left: 15px;
}
</style>
