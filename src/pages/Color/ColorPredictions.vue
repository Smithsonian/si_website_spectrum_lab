<template>
  <ColorLayout>
    <ChallengeCard remove-padding>
      <div class="pt-3 ps-3 pe-5">
        <InstructionHeader>Make a Prediction</InstructionHeader>
        <InstructionRow row-type="Notebook">
          Without using any gels, examine the image below and write your
          prediction to this question:
          <template #steps>
            <InstructionStep>
              What will this image look like when viewed through the RED gel?
            </InstructionStep>
          </template>
        </InstructionRow>
      </div>
      <div>
        <img
          width="100%"
          src="/src/assets/2x/RGB circles@2x.webp"
          alt="Intersecting red, green, and blue circles of light"
        />
      </div>
      <div class="py-4 px-5">
        <LeftRightGroup>
          <template #right>
            <NextPrevButton direction="next">next section</NextPrevButton>
          </template>
        </LeftRightGroup>
      </div>
    </ChallengeCard>
  </ColorLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';

useSpecLabHead('Make a Prediction', 'Color');
</script>
