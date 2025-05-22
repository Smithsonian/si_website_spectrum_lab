<template>
  <LightLayout>
    <ChallengeCard>
      <template #top>
        <InstructionHeader>Make a Prediction</InstructionHeader>
        <InstructionRow row-type="Investigate">
          <span class="challenge-emphasis"> Without using any gels</span>,
          examine the image below and consider:
          <template #steps>
            <InstructionStep singleton="true">
              What do you expect this image to look like when viewed through the
              RED gel?
            </InstructionStep>
          </template>
        </InstructionRow>
        <InstructionRow row-type="Notebook">
          Write your prediction in the chart, noting the predicted color for
          each section of the three circles.
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
            <NextPrevButton direction="prev" light to="introduction">
              previous section
            </NextPrevButton>
          </template>
          <template #right>
            <NextPrevButton direction="next" light to="photons">
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

useSpecLabHead('Make a Prediction', 'Light');
</script>
