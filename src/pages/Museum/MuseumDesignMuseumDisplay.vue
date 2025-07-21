<template>
  <MuseumLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <InstructionHeader>Design Museum Display</InstructionHeader>
        <InstructionRow row-type="Investigate">
          <template #before-steps>
            <p>
              Imagine you are helping a museum curator prepare an exhibit that
              highlights the use of light, color, and spectra in analyzing
              artworks. Choose one of the paintings featured in this project for
              your exhibit. Using the spectra and/or image data you have
              explored for your painting, design a display that tells the story
              of the hidden details a visitor might not see from looking at the
              piece with their eyes.
            </p>
            <p>Your display should include:</p>
            <ul>
              <li>
                At least two regions of interest within your chosen painting
              </li>
              <li>
                At least one spectrum or comparison image taken with the
                techniques described in this activity. (You may take screenshots
                from the online tool and print them or paste them into your
                notebook or slideshow.)
              </li>
              <li>
                A caption that describes:
                <ul class="mt-1">
                  <li>the techniques used to analyze the pigments, and</li>
                  <li>
                    how art conservationists might use the data presented.
                  </li>
                </ul>
              </li>
            </ul>
          </template>
        </InstructionRow>
        <LeftRightGroup class="mt-4">
          <template #left>
            <NextPrevButton direction="prev" light to="hokusai-ir-imaging">
              previous section
            </NextPrevButton>
          </template>
        </LeftRightGroup>
      </ChallengeCard>
    </template>
  </MuseumLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';

useSpecLabHead('Design Museum Display', 'Museum');
</script>
