<template>
  <LightLayout>
    <ChallengeCard>
      <template #top>
        <InstructionHeader>Photons and Color Simulation</InstructionHeader>
        <InstructionRow row-type="Simulation">
          <span class="challenge-emphasis"> Double-click</span>
          the “RGB Bulbs” to launch the simulation.
        </InstructionRow>
        <InstructionRow row-type="Notebook">
          <template #steps>
            <InstructionStep>
              Follow instructions in <em>Part 1</em> of the
              <em>Color Mixing</em> section.
            </InstructionStep>
            <InstructionStep>
              In the table, note what light combinations of RGB light make each
              color.
            </InstructionStep>
            <InstructionStep>
              Answer the questions in <em>Part 2</em>
            </InstructionStep>
          </template>
        </InstructionRow>
      </template>
      <template #middle>
        <PhetIframe />
      </template>
      <template #bottom>
        <LeftRightGroup>
          <template #left>
            <NextPrevButton direction="prev" light to="photons">
              previous section
            </NextPrevButton>
          </template>
          <template #right>
            <NextPrevButton direction="next" light to="behaviors">
              next section
            </NextPrevButton>
          </template>
        </LeftRightGroup>
      </template>
    </ChallengeCard>
  </LightLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';

useSpecLabHead('Color Mixing', 'Light');
</script>
