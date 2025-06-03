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
              <em>Part II</em>.
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
            <WavelengthEnergyOverlay />
          </ToolCard>
        </template>
      </ToolControlGroup>
      <LeftRightGroup class="mt-4">
        <template #left>
          <NextPrevButton direction="prev" light to="part-1">
            go to microns
          </NextPrevButton>
          <NextPrevButton
            v-if="tutorialState === 'nextPage'"
            class="ms-2"
            direction="prev"
            light
            @click="replay"
          >
            replay tutorial
          </NextPrevButton>
        </template>
        <template #right>
          <NextPrevButton direction="next" light to="part-3">
            go to electron volts
          </NextPrevButton>
        </template>
      </LeftRightGroup>
    </template>
  </SpectraLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';
import { useCustomMetadata } from '@/utils/metadataUtils';
import { useWavelengthTutorialStateMachine } from '@/utils/tutorialUtils';

useSpecLabHead('Wavelengths and energy: nanometers', 'Spectra');

const { tutorialState, goToNext, replay } = useWavelengthTutorialStateMachine();
goToNext();

const fluorescent = useCustomMetadata('Lamps', 'Fluorescent_Bulb', {});
const metadataList = fluorescent ? [fluorescent] : [];
</script>
