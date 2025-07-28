<template>
  <LightLayout>
    <ChallengeCard>
      <template #top>
        <InstructionHeader>Behaviors of Light Part 2: Recap</InstructionHeader>
        <InstructionRow row-type="Investigate">
          Return to these three overlapping colored circles you viewed at the
          beginning of the module.
        </InstructionRow>
        <InstructionRow row-type="Notebook">
          Use all four light behaviors (emission, reflection, transmission,
          absorption) to describe what is happening when you look at them
          through the RED gel. You can discuss your ideas with a partner, as a
          class, or in small groups, as directed by your teacher.
          <p class="mt-2">Write down your response in your Notebook.</p>
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
