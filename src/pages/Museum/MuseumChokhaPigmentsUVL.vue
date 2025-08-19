<template>
  <MuseumLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <template #top>
          <InstructionHeader
            >Chokha Pigments Part 3: UV-induced Visible
            Luminescence</InstructionHeader
          >
          <InstructionRow rowType="Investigate">
            Compare how the painting appears in natural light (No filter) and
            under a UV light, where some pigments exhibit UV-induced visible
            luminescence (UVL).
            <template #after-steps>
              More information on UVL can be found at this
              <BLink
                href="https://waps.cfa.harvard.edu/microobservatory/spectrum/large_files/Museum%20Conservation%20Technique%20Description.pdf"
                target="_blank"
                rel="noopener"
                >Reference Sheet</BLink
              >.
            </template>
            <template #steps>
              <InstructionStep>
                Use the
                <span class="challenge-bold">No filter / UVL</span> buttons to
                toggle between the visible light image and the UVL image.
              </InstructionStep>
              <InstructionStep>
                Identify the colors (if any) you observe in the UVL image for
                each region of interest.
              </InstructionStep>
              <InstructionStep>
                Use this
                <BLink
                  href="https://waps.cfa.harvard.edu/microobservatory/spectrum/large_files/Museum%20Conservation%20Pigments%20Data%20Table.pdf"
                  target="_blank"
                  rel="noopener"
                  style="font-weight: 400"
                  >Data Table</BLink
                >
                to identify which pigment(s) exhibit the UVL behavior you
                observed. Note whether this behavior is consistent with the
                pigment you identified from the spectra in Part 1.
              </InstructionStep>
            </template>
          </InstructionRow>
          <InstructionRow rowType="Notebook">
            <template #steps>
              <InstructionStep>
                Use the information to complete the table in your notebook.
              </InstructionStep>
              <InstructionStep>
                For each ROI where adding UVL data changed your pigment
                identification and/or improved your confidence in your
                identification, describe how the UVL data helped.
              </InstructionStep>
            </template>
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
          <img :src="imageUrl" class="d-block challenge-image" />
        </template>
        <template #bottom>
          <LeftRightGroup>
            <template #left>
              <NextPrevButton to="uvl-intro" direction="prev" light>
                part 2
              </NextPrevButton>
            </template>
            <template #right>
              <NextPrevButton to="data-table" direction="next" light>
                part 4
              </NextPrevButton>
            </template>
          </LeftRightGroup>
        </template>
      </ChallengeCard>
    </template>
  </MuseumLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';

import { computed, ref } from 'vue';
import chokhaChallenge from '@/assets/spectrum_data/Museum_Conservation/chokha_visible_r1b1y1w1_910.webp';
import chokhaUVL from '@/assets/spectrum_data/Museum_Conservation/chokha_uvl_r1b1y1w1_910.webp';

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
