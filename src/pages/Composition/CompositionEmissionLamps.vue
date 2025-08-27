<template>
  <CompositionLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <InstructionHeader
          >Atomic Emission Part 1: Incandescent vs. Fluorescent
          Bulbs</InstructionHeader
        >
        <InstructionRow row-type="Intro">
          In Module 4, we explored thermal emission—light given off by all
          objects due to their temperature.
          <template #before-steps>
            Now let’s consider a different kind of light emission by looking at
            the spectra of two types of light bulbs.
          </template>
        </InstructionRow>
        <InstructionRow row-type="Tool">
          Compare the spectra of the two light bulbs shown.
        </InstructionRow>
        <InstructionRow row-type="Notebook">
          Answer these questions in your Notebook.
          <template #steps>
            <InstructionStep>
              Both these types of bulbs emit light in the visible part of the
              spectrum and can be used to light up a room. What are the key
              differences you observe in the bulbs’ spectra?
            </InstructionStep>
            <InstructionStep>
              Infrared radiation that is emitted by a lightbulb cannot be seen
              with our eyes, but still requires electricity to be produced.
              Based on the two spectra, which bulb is preferable for the
              environment? Explain why.
            </InstructionStep>
          </template>
        </InstructionRow>
      </ChallengeCard>
    </template>
    <template #tool-col>
      <ToolControlGroup>
        <template #top-tool>
          <ToolCard
            :custom-metadata="topMetadata"
            :spectrum-picker-placeholder="null"
          />
        </template>
        <template #bottom-tool>
          <ToolCard
            :custom-metadata="bottomMetadata"
            :spectrum-picker-placeholder="null"
          />
        </template>
      </ToolControlGroup>
      <LeftRightGroup class="mt-4">
        <template #right>
          <NextPrevButton light direction="next" to="slideshow"
            >part 2</NextPrevButton
          >
        </template>
      </LeftRightGroup>
    </template>
  </CompositionLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';
import { useCustomMetadata } from '@/utils/metadataUtils';

useSpecLabHead('Atomic emission part 1', 'Composition');

const incandescent = useCustomMetadata('Lamps', 'Incandescent_Bulb', {});
const topMetadata = incandescent ? [incandescent] : [];
const metalHalide = useCustomMetadata('Lamps', 'Metal_Halide_Bulb', {});
const bottomMetadata = metalHalide ? [metalHalide] : [];
</script>
