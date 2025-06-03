<template>
  <LightLayout>
    <ChallengeCard>
      <template #top>
        <InstructionHeader>Photons and Color Simulation</InstructionHeader>
        <InstructionRow row-type="Simulation">
          Click the “Single Bulb” to launch the Physics Education Technology
          (PhET) simulation.
        </InstructionRow>
        <InstructionRow row-type="Notebook">
          <template #steps>
            <InstructionStep>
              Follow instructions in <em>Part A</em> of the
              <em>Photons and Color</em> section.
            </InstructionStep>
            <InstructionStep>
              Answer the questions in <em>Part B</em>.
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
            <NextPrevButton direction="prev" light to="predictions">
              previous section
            </NextPrevButton>
          </template>
          <template #right>
            <NextPrevButton direction="next" light to="mixing">
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

useSpecLabHead('Photons and Color', 'Light');
</script>
