<template>
  <ColorLayout>
    <ChallengeCard>
      <template #top>
        <InstructionHeader>Behaviors of Light</InstructionHeader>
        <InstructionRow row-type="Slideshow">
          Learn about the four key behaviors of light: emission, absorption,
          transmission, and reflection.
        </InstructionRow>
        <InstructionRow row-type="Notebook">
          In <em>Part A</em> of the <em>Behaviors of Light</em> section, label
          the diagram with the key behaviors of light. Then, answer the
          questions in <em>Part B</em>.
        </InstructionRow>
      </template>
      <template #middle>
        <iframe
          height="500px"
          width="100%"
          src="https://phet.colorado.edu/sims/html/color-vision/latest/color-vision_en.html"
          allow="fullscreen"
        ></iframe>
      </template>
      <template #bottom>
        <LeftRightGroup>
          <template #right>
            <NextPrevButton direction="next" light to="behaviors">
              next section
            </NextPrevButton>
          </template>
        </LeftRightGroup>
      </template>
    </ChallengeCard>
  </ColorLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';

useSpecLabHead('Behaviors of Light', 'Color');
</script>
