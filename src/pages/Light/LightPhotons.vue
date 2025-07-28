<template>
  <LightLayout>
    <ChallengeCard>
      <template #top>
        <InstructionHeader>Photons and Color</InstructionHeader>
        <InstructionRow row-type="Simulation">
          Click the “Single Bulb” to launch the Physics Education Technology
          (PhET) simulation.
          <template #steps>
            <InstructionStep>
              Follow the Exploration Guide in your Notebook. The accompanying
              figure in your Notebook shows what all the controls do.
            </InstructionStep>
          </template>
        </InstructionRow>
        <InstructionRow row-type="Notebook">
          Answer the Reflection Questions in your Notebook
          <template #steps>
            <InstructionStep>
              Describe what makes up WHITE light.
            </InstructionStep>
            <InstructionStep>
              Describe what a RED filter does.
            </InstructionStep>
            <InstructionStep>
              Describe what happens if you put a RED filter in front of a GREEN
              light source
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
            <NextPrevButton direction="prev" light to="color-filters">
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
