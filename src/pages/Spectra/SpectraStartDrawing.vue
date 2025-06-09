<template>
  <SpectraLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <InstructionHeader>Draw a Spectrum Part 1: Explore</InstructionHeader>
        <InstructionRow row-type="Tool">
          To make sense of how this tool works, let’s start by drawing different
          types of curves in the graph space. After each step, notice how the
          spectrum graph pattern impacts the spectrum image above it. Which
          parts are bright, and which parts are dark?
          <template #steps>
            <InstructionStep>
              Draw a horizontal line straight across at y = 0.8.
            </InstructionStep>
            <InstructionStep>
              Draw a curve with a few peaks and valleys. Start on the lower-left
              corner and go all the way across the graph.
            </InstructionStep>
            <InstructionStep>
              Draw a spiky-looking graph: let it be mostly a straight line
              across the <strong>bottom</strong> that jumps to the top of the
              graph at a few points.
            </InstructionStep>
            <InstructionStep>
              Draw a spiky-looking graph: let it be mostly a straight line
              across the <strong>top</strong> that jumps to the bottom of the
              graph at a few points.
            </InstructionStep>
          </template>
        </InstructionRow>
      </ChallengeCard>
    </template>
    <template #tool-col>
      <ToolCard draw-only class="mb-5" />
      <LeftRightGroup>
        <template #left>
          <NextPrevButton direction="prev" to="../tutorial" light>
            previous section
          </NextPrevButton>
        </template>
        <template #right>
          <NextPrevButton direction="next" to="copy" light>
            part 2
          </NextPrevButton>
        </template>
      </LeftRightGroup>
    </template>
  </SpectraLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';

useSpecLabHead('Draw Spectra', 'Spectra');
</script>
