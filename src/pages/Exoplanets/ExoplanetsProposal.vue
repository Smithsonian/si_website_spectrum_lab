<template>
  <ExoplanetsLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <InstructionHeader> Proposal to NASA </InstructionHeader>
        <InstructionRow row-type="Intro">
          Imagine you are an Exoplanet Researcher! Create a hypothetical
          proposal to NASA to observe a planet of your choice using the
          <BLink
            href="https://science.nasa.gov/mission/webb/"
            target="_blank"
            rel="noopener"
            >James Webb Space Telescope (JWST)</BLink
          >.
        </InstructionRow>
        <InstructionRow row-type="Investigate">
          JWST, which launched in late 2021, can collect higher resolution
          spectra at infrared wavelengths from 0.6 to 28 microns, making it
          well-suited for exoplanet research. (These wavelengths are where many
          interesting molecules have absorption features, and where planets give
          off thermal emission.)
          <template #steps>
            <InstructionStep>
              Decide which exoplanet target you would ask NASA to observe next
              with JWST. Perhaps choose a planet for which you had more than one
              “Maybe” in your Comparative Exoplanetology chart.
            </InstructionStep>
            <InstructionStep>
              <span class="challenge-bold">Optional:</span> Select your planet
              below to go to an interactive NASA visualization of your planet
              and its star system. (Click
              <span class="challenge-tool-label">Compare</span> on the bottom
              right of the visualization to compare your planet to Earth or
              Jupiter).
              <p class="mt-1">
                If you like, take a screenshot of the visualization of your
                planet to paste into your Notebook.
              </p>
              <BLink
                href="https://exoplanets.nasa.gov/exoplanet-catalog/5371/wasp-17-b/"
                target="_blank"
                rel="noopener"
              >
                WASP-17b
              </BLink>
              <br />
              <BLink
                href="https://exoplanets.nasa.gov/exoplanet-catalog/5673/wasp-39-b/"
                target="_blank"
                rel="noopener"
              >
                WASP-39b
              </BLink>
              <br />
              <BLink
                href="https://exoplanets.nasa.gov/exoplanet-catalog/3281/wasp-121-b/"
                target="_blank"
                rel="noopener"
              >
                WASP-121b
              </BLink>
              <br />
              <BLink
                href="https://exoplanets.nasa.gov/exoplanet-catalog/6902/hd-209458-b/"
                target="_blank"
                rel="noopener"
              >
                HD 209458 b
              </BLink>
              <br />
              <BLink
                href="https://exoplanets.nasa.gov/exoplanet-catalog/5120/wasp-12-b/"
                target="_blank"
                rel="noopener"
              >
                WASP-12b
              </BLink>
              <br />
              <BLink
                href="https://exoplanets.nasa.gov/exoplanet-catalog/6876/hd-189733-b/"
                target="_blank"
                rel="noopener"
              >
                HD 189733 b
              </BLink>
              <br />
              <BLink
                href="https://exoplanets.nasa.gov/exoplanet-catalog/1226/hat-p-12-b/"
                target="_blank"
                rel="noopener"
              >
                HAT-P-12 b
              </BLink>
              <br />
              <BLink
                href="https://exoplanets.nasa.gov/exoplanet-catalog/4847/k2-18-b/"
                target="_blank"
                rel="noopener"
              >
                K2-18 b
              </BLink>
            </InstructionStep>
          </template>
        </InstructionRow>
        <InstructionRow row-type="Tool">
          Use the Spectrum Tool to make decisions for your proposal, and to
          capture screenshots to describe the spectrum features for which you
          hope to get better data.
          <template #steps>
            <InstructionStep>
              Select the spectrum for your target planet under
              <span class="challenge-tool-label">Source 1</span>.
            </InstructionStep>
            <InstructionStep>
              Under <span class="challenge-tool-label">Source 2</span>,
              investigate comparison spectra for Atoms and Molecules, Exoplanet
              Models, or objects in our Solar System.
            </InstructionStep>
            <InstructionStep>
              Identify 2 wavelength ranges in the exoplanet spectrum for which
              you would like higher resolution data from JWST, and answer
              Question 3 in your Notebook.
            </InstructionStep>
            <InstructionStep>
              For each wavelength range proposed, take a screenshot of the
              existing spectral data for your exoplanet target, compared with a
              particular atom or molecule, exoplanet model atmosphere, or Solar
              System object, to illustrate the information you presented in
              Question 3.
            </InstructionStep>
          </template>
        </InstructionRow>
        <InstructionRow row-type="Notebook">
          Answer these questions in your Notebook.
          <template #steps>
            <InstructionStep> Which exoplanet did you select? </InstructionStep>
            <InstructionStep>
              <span class="challenge-bold">Optional:</span> Paste a screenshot
              of the NASA visualization of your planet in your Notebook.
            </InstructionStep>
            <InstructionStep>
              In the table, identify 2 wavelength ranges in the exoplanet
              spectrum for which you would like higher resolution data from
              JWST, and explain what that data could help you discover or
              confirm about your planet.
            </InstructionStep>
            <InstructionStep>
              Paste two screenshots of the existing spectrum for your exoplanet
              target, compared with a particular atom or molecule, exoplanet
              model atmosphere, or Solar System object, to illustrate the
              information you’ve described in Question 3. Provide a caption for
              each screenshot.
              <p class="mt-1">
                <span class="challenge-bold">Optional:</span> Annotate the
                screenshots to point out relevant features and make your
                proposal even stronger.
              </p>
            </InstructionStep>
            <InstructionStep>
              <span class="challenge-bold">Put it all together.</span> Write a
              paragraph that describes:
              <ul>
                <li>The target planet you are proposing to observe,</li>
                <li>
                  How JWST spectra will help you make discoveries about the
                  exoplanet,
                </li>
                <li>Why this science research is important.</li>
              </ul>
            </InstructionStep>
          </template>
        </InstructionRow>
      </ChallengeCard>
    </template>
    <template #tool-col>
      <ToolControlGroup v-model:plot-type="plotType" v-model:zoom="zoom">
        <template #top-tool>
          <ToolCard :custom-metadata="exoplanetMetadata" />
        </template>
        <template #bottom-tool>
          <ToolCard :custom-metadata="bottomMetadataList" />
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
const planetsMetadata = allMetadata['Solar System'];

const bottomMetadataList = [
  ...atomsMetadata,
  ...modelMetadata,
  ...planetsMetadata,
];
</script>
