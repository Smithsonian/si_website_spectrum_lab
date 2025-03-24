<template>
  <TemperatureLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <BRow class="my-3">
          <BCol cols="1"></BCol>
          <BCol><h2 class="h4">Tutorial</h2></BCol>
        </BRow>
        <BRow>
          <BCol cols="1">
            <InstructionIcon rowType="Tutorial" />
          </BCol>
          <BCol>
            <p>
              <strong>Spectrum Tool Introduction.</strong> Follow the tutorial
              (below) to learn how to use the spectrum tool and review key
              concepts.
            </p>
          </BCol>
        </BRow>
        <BRow>
          <BCol cols="1">
            <InstructionIcon rowType="Notebook" />
          </BCol>
          <BCol>
            <p class="mb-2">
              <strong>Spectrum Notebook.</strong> In the
              <em>Temperature, Tutorial</em>
              section, answer these questions:
            </p>
            <ol class="fw-light">
              <li class="mb-2">
                What is the relationship between the wavelength and energy of
                light?
              </li>
              <li class="mb-2">
                Why might it be useful to display a spectrum graph as a scatter
                plot instead of a line chart?
              </li>
              <li>
                What parts of the electromagnetic spectrum are not displayed on
                the Spectrum Tool?
              </li>
            </ol>
          </BCol>
        </BRow>
      </ChallengeCard>
    </template>
    <template #tool-col>
      <ToolControlGroup show-zoom>
        <template #top-tool>
          <ToolCard
            title="Spectrum 1:"
            :custom-metadata="marsMetadataList"
            :spectrum-picker-placeholder="null"
          />
        </template>
      </ToolControlGroup>
      <LeftRightGroup class="mt-5">
        <template #right>
          <NextPrevButton
            v-if="tutorialState === 'nextSection'"
            direction="next"
            to="predictions"
          >
            next section
          </NextPrevButton>
        </template>
      </LeftRightGroup>
    </template>
  </TemperatureLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';
import { useCustomMetadata } from '@/utils/metadataUtils';
import { useTempTutorialStateMachine } from '@/utils/tutorialUtils';

useSpecLabHead('Tutorial', 'Temperature');

const marsMetadata = useCustomMetadata('Planets', 'Mars_Reflection', {});
const marsMetadataList = marsMetadata ? [marsMetadata] : [];

// Initialize the tutorial state and start the first popup
const { tutorialState, goToNext } = useTempTutorialStateMachine();
goToNext();
</script>
