<template>
  <FishTankLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <InstructionHeader>
          Light Your Tank Part 2: Draw the Spectrum
        </InstructionHeader>
        <InstructionRow row-type="Tool">
          The top tool has sample spectra showing various percentages of red,
          green, and blue light, as well as a few mixes.
          <template #steps>
            <InstructionStep>
              Look at each of the sample spectra.
            </InstructionStep>
            <InstructionStep>
              In the bottom tool, draw the spectrum you’d expect to see from
              your lighting design from <em>Part 1</em>.
            </InstructionStep>
          </template>
        </InstructionRow>
        <InstructionRow row-type="Notebook">
          Take a screenshot of your drawing and post it in <em>Part 2</em>.
        </InstructionRow>
      </ChallengeCard>
    </template>
    <template #tool-col>
      <ToolControlGroup :control-names="['units', 'plotType']">
        <template #top-tool>
          <ToolCard
            :custom-metadata="fishtankMetadata"
            normalize-override="none"
            spectrum-picker-placeholder="Select lighting"
          />
        </template>
        <template #bottom-tool>
          <ToolCard draw-only />
        </template>
      </ToolControlGroup>
      <LeftRightGroup class="mt-5">
        <template #left>
          <NextPrevButton direction="prev" light to="part-1">
            part 1
          </NextPrevButton>
        </template>
        <template #right>
          <NextPrevButton
            direction="next"
            light
            to="../inhabitants-under-lights"
          >
            next section
          </NextPrevButton>
        </template>
      </LeftRightGroup>
    </template>
  </FishTankLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';
import { useAllMetadata } from '@/utils/metadataUtils';

useSpecLabHead('Light Your Tank Part 2', 'Fish Tank');

const allMetadata = useAllMetadata();
const fishtankMetadata = allMetadata['Fish Tank Lights'];
</script>
