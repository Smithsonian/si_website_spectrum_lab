<template>
  <MuseumLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <InstructionHeader>Putting it together</InstructionHeader>
        <InstructionRow row-type="Notebook">
          <template #before-steps>
            <p>
              Using all the data you’ve collected, design a display for a museum
              exhibit highlighting the use of light, color, and spectra in
              analyzing artworks. Choose one of the works of art featured in
              this project to display in an exhibit. Develop a display that
              tells the story of the hidden details a visitor might not see from
              looking at the piece. Your display should include:
            </p>
            <ul>
              <li>
                At least two regions of interest within your chosen painting.
              </li>
              <li>
                At least one spectrum or comparison image taken with the
                techniques described in this activity. (You may take screenshots
                from the online tool and paste them into your notebook.)
              </li>
              <li>
                A caption with a description describing how art conservationists
                might use the data presented.
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
