<template>
  <SpectraLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <InstructionHeader
          >Draw a Spectrum Part 2: Draw and Reflect</InstructionHeader
        >
        <InstructionRow row-type="Tool">
          Draw a copy of the graph from your Notebook in the online Spectrum
          Tool.
        </InstructionRow>
        <InstructionRow row-type="Notebook">
          Answer the questions in your Notebook about the spectrum you drew.
          <template #steps>
            <InstructionStep>
              Estimate at what wavelength the source is emitting the most amount
              of light. (At what wavelength is the light the brightest?)
            </InstructionStep>
            <InstructionStep>
              What color is the light at the wavelength where the source is
              emitting the most light?
            </InstructionStep>
            <InstructionStep>
              Estimate how much light (as a relative value from 0–1 on the
              y-axis) is being emitted at 0.4 microns (on the x-axis).
            </InstructionStep>
            <InstructionStep>
              Estimate at what wavelength the source is emitting the least
              amount of light?
            </InstructionStep>
          </template>
        </InstructionRow>
      </ChallengeCard>
    </template>
    <template #tool-col>
      <ToolCard draw-only class="mb-5" />
      <LeftRightGroup>
        <template #left>
          <NextPrevButton direction="prev" to="explore" light>
            part 1
          </NextPrevButton>
        </template>
        <template #right>
          <NextPrevButton direction="next" to="../white-line" light>
            next section
          </NextPrevButton>
        </template>
      </LeftRightGroup>
    </template>
  </SpectraLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';

useSpecLabHead('Draw a Spectrum', 'Spectra');
</script>
