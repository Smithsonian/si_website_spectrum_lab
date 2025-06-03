<template>
  <SpectraLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <InstructionHeader>
          Measuring wavelengths and energy: electron volts
        </InstructionHeader>
        <InstructionRow row-type="Intro">
          As we have been learning, light across the electromagnetic spectrum
          has different <strong>wavelengths</strong>.
          <template #before-steps>
            <p>
              Photons that correspond to different wavelengths also carry
              different amounts of <strong>energy</strong>.
            </p>
          </template>
        </InstructionRow>
        <InstructionRow row-type="Tool">
          The measurement tool can also report the energy of photons at a
          specific wavelength.
        </InstructionRow>
        <InstructionRow row-type="Notebook">
          Follow the instructions in the
          <em>Measuring wavelengths and energy</em> section.
          <template #steps>
            <InstructionStep>
              Use the measuring tool to identify the energy
              <strong>in electron volts</strong> of the three brightest
              features, in <em>Part B</em>.
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
          <NextPrevButton direction="prev" light to="part-2">
            part 2
          </NextPrevButton>
        </template>
        <template #right>
          <NextPrevButton direction="next" light to="part-4">
            part 4
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
