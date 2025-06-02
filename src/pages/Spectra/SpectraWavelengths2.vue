<template>
  <SpectraLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <InstructionHeader>
          Measuring wavelengths and energy: nanometers
        </InstructionHeader>
        <InstructionRow row-type="Tool">
          Use the <strong>unit dropdown menu</strong> to change the unit of the
          measuring tool to nanometers.
        </InstructionRow>
        <InstructionRow row-type="Notebook">
          Follow the instructions in the
          <em>Measuring wavelengths and energy</em> section.
          <template #steps>
            <InstructionStep>
              Use the measuring tool to identify the wavelengths
              <strong>in nanometers</strong> of the three brightest features, in
              <em>Part B</em>.
            </InstructionStep>
          </template>
        </InstructionRow>
      </ChallengeCard>
    </template>
    <template #tool-col>
      <ToolControlGroup :control-names="['units']">
        <template #top-tool>
          <ToolCard
            :custom-metadata="metadataList"
            :spectrum-picker-placeholder="null"
          >
            <div class="text-dark fs-4 fw-bold">
              <div class="position-absolute" style="top: 40px; left: 265px">
                1
              </div>
              <div class="position-absolute" style="top: 0px; left: 317px">
                2
              </div>
              <div class="position-absolute" style="top: 25px; left: 480px">
                3
              </div>
            </div>
          </ToolCard>
        </template>
      </ToolControlGroup>
      <LeftRightGroup class="mt-4">
        <template #left>
          <NextPrevButton direction="prev" light to="part-1">
            part 1
          </NextPrevButton>
        </template>
        <template #right>
          <NextPrevButton direction="next" light to="part-3">
            part 3
          </NextPrevButton>
        </template>
      </LeftRightGroup>
    </template>
  </SpectraLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';
import { useCustomMetadata } from '@/utils/metadataUtils';

useSpecLabHead('Wavelengths and energy part 2', 'Spectra');

const fluorescent = useCustomMetadata('Lamps', 'Fluorescent_Bulb', {});
const metadataList = fluorescent ? [fluorescent] : [];
</script>
