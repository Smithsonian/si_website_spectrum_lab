<template>
  <SpectraLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <InstructionHeader>
          Measuring wavelengths and energy: brightness
        </InstructionHeader>
        <InstructionRow row-type="Intro">
          In a spectrum, the <strong>brightness</strong> (or
          <strong>intensity</strong>) tells you how much light the source emits
          at a given wavelength.
        </InstructionRow>
        <InstructionRow row-type="Tool">
          This tool graphs the <strong>relative brightness</strong> and scales
          the brightness at each wavelength to values between 0 and 1.
        </InstructionRow>
        <InstructionRow row-type="Notebook">
          Follow the instructions in the
          <em>Measuring wavelengths and energy</em> section.
          <template #steps>
            <InstructionStep>
              Use the measuring tool to estimate the brightness of the three
              brightest features. Write your estimates in <em>Part B</em>.
            </InstructionStep>
            <InstructionStep>
              Use your completed table to answer the questions in
              <em>Part C</em>.
            </InstructionStep>
          </template>
          <template #note>
            You can use your pencil or a ruler to help eyeball the brightness
            level on the y-axis.
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
          <NextPrevButton direction="prev" light to="part-3">
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

useSpecLabHead('Wavelengths and energy part 3', 'Spectra');

const fluorescent = useCustomMetadata('Lamps', 'Fluorescent_Bulb', {});
const metadataList = fluorescent ? [fluorescent] : [];
</script>
