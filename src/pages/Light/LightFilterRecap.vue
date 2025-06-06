<template>
  <LightLayout>
    <ChallengeCard>
      <template #top>
        <InstructionHeader>Behaviors of Light Part 2: Recap</InstructionHeader>
        <InstructionRow row-type="Investigate">
          Let's return to these three circles. Use the behaviors of light you
          learned (emission, reflection, transmission, and absorption) to
          describe what is happening when you look at these circles through a
          red gel.
        </InstructionRow>
        <InstructionRow row-type="Notebook">
          <template #steps>
            <InstructionStep>
              Discuss your ideas with your partner and write down your response
              in your notebook.
            </InstructionStep>
          </template>
        </InstructionRow>
      </template>
      <template #middle>
        <div class="bg-gen-black">
          <img
            src="/src/assets/2x/RGB circles@2x.webp"
            alt="Intersecting red, green, and blue circles of light"
            class="d-block mx-auto"
            style="max-width: 575px"
          />
        </div>
      </template>
      <template #bottom>
        <LeftRightGroup>
          <template #left>
            <NextPrevButton direction="prev" light to="slideshow">
              part 1
            </NextPrevButton>
          </template>
        </LeftRightGroup>
      </template>
    </ChallengeCard>
  </LightLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';

useSpecLabHead('Color Filters Recap', 'Light');
</script>
