<template>
  <MuseumLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <template #top>
          <InstructionHeader>Artwork Credits: Chokha </InstructionHeader>
          <InstructionRow rowType="Art">
            <p>
              <span style="font-weight: 700">Credits:</span> Chokha / National
              Museum of Asian Art, Smithsonian Institution, Purchase and partial
              gift from the Catherine and Ralph Benkaim Collection — funds
              provided by the Friends of the National Museum of Asian Art,
              S2018.1.76
            </p>
          </InstructionRow>
        </template>
        <template #middle>
          <ImageZoomOverlay :src="chokhaChallenge" :zoom-src="chokhaBig" />
        </template>
        <template #bottom>
          <a
            href="#"
            @click.prevent="showInfo = !showInfo"
            style="cursor: pointer; text-decoration: underline"
            class="color-slr-med-grey"
          >
            {{
              showInfo ? 'Hide information' : 'Learn more about this painting'
            }}
          </a>
          <div v-if="!showInfo" class="mb-4"></div>
          <div v-if="showInfo" style="margin-top: 1rem">
            <p>
              <span style="font-weight: 700">Title:</span> Rawat Gokul Das of
              Devgarh and Tilkayat Dauji II worship Shri Nathji
            </p>
            <p>
              <span style="font-weight: 700">Description:</span> Devotion to
              Shri Nathji—a form of Lord Krishna depicted as a child—is central
              to the Pushtimarg sect of Hinduism. The Pushtimarg movement
              exploded across Rajasthan and Gujarat in the 18th century. Some
              rulers installed Pushtimarg icons (swarups) within their kingdoms;
              others came as pilgrims to Nathdwara. Court artists, who regularly
              produced portraits of their patrons, probably created the earliest
              paintings in this religious genre. This image by the illustrious
              court painter Chokha records the devotion of two rulers to Krishna
              and their support for Pushtimarg.
            </p>
          </div>
          <LeftRightGroup>
            <template #left>
              <NextPrevButton to="../put-it-together" direction="prev" light>
                previous section
              </NextPrevButton>
            </template>
            <template #right>
              <NextPrevButton to="hokusai" direction="next" light>
                Hokusai
              </NextPrevButton>
            </template>
          </LeftRightGroup>
        </template>
      </ChallengeCard>
    </template>
  </MuseumLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import chokhaChallenge from '@/assets/spectrum_data/Museum_Conservation/Chokha_color_910.webp';
import chokhaBig from '@/assets/spectrum_data/Museum_Conservation/Chokha_color_big.webp';
import { useSpecLabHead } from '@/utils/locationUtils';

useSpecLabHead('Chokha Painting Credits', 'Museum');

const showInfo = ref(false);
</script>
