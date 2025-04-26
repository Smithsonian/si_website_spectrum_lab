<template>
  <ExoplanetsLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <InstructionHeader>
          You’re the Exoplanet Researcher! What exoplanet should NASA’s James
          Webb Space Telescope study?
        </InstructionHeader>
        <InstructionRow row-type="Tool">
          Use this workspace to make decisions for your proposal, and to capture
          screenshots to describe the spectrum features for which you hope to
          get better data.
        </InstructionRow>
        <InstructionRow row-type="Notebook">
          Go to <em>Final Challenge 4. You’re the Researcher</em> in your
          notebook. Read the instructions for how to write your proposal.
          <template #steps>
            <InstructionStep>
              What target will you propose for? (Choose a planet for which you
              had more than one “Maybe” in your Exoplanet Features Chart)
            </InstructionStep>
            <InstructionStep>
              Identify 2 regions of the spectrum for which you would like higher
              resolution data from JWST, and explain what that data will help
              you discover or confirm about your planet (remember, JWST has
              capabilities from .6 microns to 28 microns)
            </InstructionStep>
            <InstructionStep>
              Paste two screenshots of the existing spectral data for your
              exoplanet target, compared with the closest model atmosphere or
              with a particular molecule, or with a solar system planet, to
              illustrate the information you’ve described in Question 2. Provide
              a caption for each screenshot. (If you’re able to annotate the
              screenshot to point out features, that will be helpful to the
              proposal reviewers ;)
            </InstructionStep>
          </template>
        </InstructionRow>
        <InstructionRow row-type="Notebook">
          Putting it all together.
          <template #steps>
            <InstructionStep>
              Write a paragraph that describes:
              <ol type="a">
                <li>The target planet you are proposing to observe,</li>
                <li>
                  How JWST spectra will help you make discoveries about the
                  exoplanet,
                </li>
                <li>Why this science research is important</li>
              </ol>
            </InstructionStep>
          </template>
        </InstructionRow>
      </ChallengeCard>
    </template>
    <template #tool-col>
      <ToolControlGroup
        v-model:plot-type="plotType"
        v-model:zoom="zoom"
        show-zoom
      >
        <template #top-tool>
          <ToolCard title="Spectrum 1" :custom-metadata="exoplanetMetadata" />
        </template>
        <template #bottom-tool>
          <ToolCard
            title="Spectrum 2"
            :custom-metadata="bottomMetadataList"
            :custom-category-names="{
              Planets: 'Solar System',
            }"
          />
        </template>
      </ToolControlGroup>
    </template>
  </ExoplanetsLayout>
</template>

<script setup lang="ts">
import type { PlotType } from '@/constants';
import { useSpecLabHead } from '@/utils/locationUtils';
import { useAllMetadata } from '@/utils/metadataUtils';
import { ref } from 'vue';

useSpecLabHead('Proposal to NASA', 'Exoplanets');

const plotType = ref<PlotType>('scatter');
const zoom = ref(41);

const allMetadata = useAllMetadata();
const exoplanetMetadata = allMetadata['Exoplanets'];
const modelMetadata = allMetadata['Exoplanet Models'];
const atomsMetadata = allMetadata['Atoms and Molecules'];
const planetsMetadata = allMetadata['Planets'];

const bottomMetadataList = [
  ...modelMetadata,
  ...atomsMetadata,
  ...planetsMetadata,
];
</script>
