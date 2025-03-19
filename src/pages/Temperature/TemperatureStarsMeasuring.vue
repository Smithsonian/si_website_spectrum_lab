<template>
  <TemperatureLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <BRow class="my-3">
          <BCol cols="1"></BCol>
          <BCol><h2 class="h4">Part 2: Measuring Temperatures</h2></BCol>
        </BRow>
        <BRow class="mb-3">
          <BCol cols="1">
            <InstructionIcon name="Tool" />
          </BCol>
          <BCol>
            <p>
              <strong>Spectrum Tool.</strong> Using the
              <em>Target Object</em> menu, compare the spectrum of each star:
              Sun, M star, and B star. Using the
              <em>Comparison Object</em> menu, examine thermal spectra models
              for different temperatures (in Kelvin).
            </p>
          </BCol>
        </BRow>
        <BRow>
          <BCol cols="1">
            <InstructionIcon name="Notebook" />
          </BCol>
          <BCol>
            <p class="mb-2">
              <strong>Spectrum Notebook.</strong> Answer this question in the
              table of the <em>Spectra of Stars</em> section:
            </p>
            <ol class="fw-light">
              <li class="mb-2">
                Comparing the spectrum of the star with the model spectra, what
                temperature thermal (blackbody) spectrum best matches the stars
                spectrum?
              </li>
            </ol>
            <p class="fw-light">
              Note: The y-values of these model spectra are not plotted on the
              same scale—they have been modified so they can all be plotted in
              the range of the tool. The key is to compare the overall shape of
              the curves, and most importantly, where the peaks are.
            </p>
          </BCol>
        </BRow>
      </ChallengeCard>
    </template>
    <template #tool-col>
      <ToolControlGroup show-zoom>
        <template #top-tool>
          <ToolCard
            title="Spectrum 1:"
            :custom-metadata="starMetadataList"
            spectrum-picker-placeholder="select star"
          />
        </template>
        <template #bottom-tool>
          <ToolCard
            title="Spectrum 2:"
            :custom-metadata="blackbodyList"
            spectrum-picker-placeholder="select blackbody"
          />
        </template>
      </ToolControlGroup>
      <LeftRightGroup class="mt-5">
        <template #left>
          <NextPrevButton to="spectra" direction="prev">part 1</NextPrevButton>
        </template>
        <template #right>
          <NextPrevButton to="../incandescent" direction="next"
            >next section</NextPrevButton
          >
        </template>
      </LeftRightGroup>
    </template>
  </TemperatureLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';
import { useAllMetadata, useCustomMetadata } from '@/utils/metadataUtils';

useSpecLabHead('Stars Part 2', 'Temperature');

const sunMetadata = useCustomMetadata('Stars', 'sun_ref_colina96', {});
const mStarMetadata = useCustomMetadata('Stars', 'M_Star', {});
const bStarMetadata = useCustomMetadata('Stars', 'B_Star', {});
const starMetadataListMaybe = [sunMetadata, mStarMetadata, bStarMetadata];
const starMetadataList = starMetadataListMaybe.filter((md) => !!md);

const allMetadata = useAllMetadata();
const blackbodyList = allMetadata['Thermal Spectra'];
</script>
