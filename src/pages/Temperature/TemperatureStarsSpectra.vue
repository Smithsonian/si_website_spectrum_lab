<template>
  <TemperatureLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <BRow class="my-3">
          <BCol cols="1"></BCol>
          <BCol><h2 class="h4">Part 1: Spectra of Stars</h2></BCol>
        </BRow>
        <BRow>
          <BCol cols="1">
            <InstructionIcon name="Tool" />
          </BCol>
          <BCol>
            <p class="mb-2">
              <strong>Spectrum Tool.</strong> Using the
              <em>Target Object</em> menu, compare the spectrum of eacch star:
              Sun, M star, and B star. Adjust the wavelength slider so you can
              see their whole spectrum.
            </p>
          </BCol>
        </BRow>
        <BRow>
          <BCol cols="1">
            <InstructionIcon name="Notebook" />
          </BCol>
          <BCol>
            <p class="mb-2">
              <strong>Spectrum Notebook.</strong> Answer the following questions
              in the <em>Spectra of Stars</em> section:
            </p>
            <ol class="fw-light">
              <li class="mb-2">
                At what wavelength does the Sun emit the most light? Hint: Where
                is the y-value roughly the highest?
              </li>
              <li class="mb-2">
                What is the energy associated with that wavelength? Use the
                measuring tool, first changing the wavelength unit to electron
                volts!
              </li>
              <li class="mb-2">
                Based on the brightness of light across the visible part of the
                spectrum, what color would you expect this type of star to
                appear?
              </li>
            </ol>
          </BCol>
        </BRow>
      </ChallengeCard>
    </template>
    <template #tool-col>
      <ToolControlGroup show-zoom>
        <template #top-tool>
          <ToolCard title="Spectrum 1:" :custom-metadata="starMetadataList" />
        </template>
      </ToolControlGroup>
    </template>
  </TemperatureLayout>
</template>

<script setup lang="ts">
import { useCustomMetadata } from '@/utils/metadataUtils';
import { useHead } from '@unhead/vue';

useHead({
  title: 'Spectrum Lab | Temperature: Stars Part 1',
});

const sunMetadata = useCustomMetadata('Stars', 'sun_ref_colina96', {});
const mStarMetadata = useCustomMetadata('Stars', 'M_Star', {});
const bStarMetadata = useCustomMetadata('Stars', 'B_Star', {});
const starMetadataListMaybe = [sunMetadata, mStarMetadata, bStarMetadata];
const starMetadataList = starMetadataListMaybe.filter((md) => !!md);
</script>
