<template>
  <SpectraLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <InstructionHeader> Measure Wavelengths and Energy </InstructionHeader>
        <InstructionRow row-type="Tool">
          <template #steps>
            <InstructionStep>
              Move the measuring tool across the spectrum graph with your cursor
              to identify the wavelengths (in microns) of the three brightest
              features (labeled A, B, and C) in this spectrum.
            </InstructionStep>
            <InstructionStep>
              Use the <strong>unit dropdown menu</strong> to change the unit of
              the measuring tool to nanometers and remeasure the wavelengths.
              Repeat for angstroms and electron volts (a unit of energy).
            </InstructionStep>
            <InstructionStep>
              Use the measuring tool to estimate the brightness of the three
              brightest features. (You can use your pencil or a ruler to help
              eyeball the brightness level on the y-axis.)
            </InstructionStep>
          </template>
        </InstructionRow>
        <InstructionRow row-type="Notebook">
          <template #steps>
            <InstructionStep>
              As you measure the features in the tool, write the values in your
              table, one column at a time.
            </InstructionStep>
            <InstructionStep>
              Use your completed table to answer the questions.
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
          <NextPrevButton direction="prev" light to="light-sources">
            previous section
          </NextPrevButton>
          <NextPrevButton
            v-if="tutorialState === 'nextPage'"
            class="ms-2"
            direction="prev"
            light
            @click="replay"
          >
            reopen units guide
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

useSpecLabHead('Wavelengths and Energy', 'Spectra');

const { tutorialState, goToNext, replay } = useWavelengthTutorialStateMachine();
goToNext();

const fluorescent = useCustomMetadata('Lamps', 'Fluorescent_Bulb', {});
const metadataList = fluorescent ? [fluorescent] : [];
</script>
