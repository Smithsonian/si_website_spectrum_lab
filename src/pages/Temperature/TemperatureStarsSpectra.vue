<template>
  <TemperatureLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <InstructionHeader>Part 1: Spectra of Stars</InstructionHeader>
        <InstructionRow rowType="Tool">
          Using the <em>Target Object</em> menu, compare the spectrum of each
          star: Sun, M star, and B star. Adjust the wavelength slider so you can
          see their whole spectrum.
        </InstructionRow>
        <InstructionRow rowType="Notebook">
          Answer the following questions in the
          <em>Spectra of Stars</em> section:
          <template #questions>
            <InstructionQuestion>
              At what wavelength does the Sun emit the most light? Hint: Where
              is the y-value roughly the highest?
            </InstructionQuestion>
            <InstructionQuestion>
              What is the energy associated with that wavelength? Use the
              measuring tool, first changing the wavelength unit to electron
              volts!
            </InstructionQuestion>
            <InstructionQuestion>
              Based on the brightness of light across the visible part of the
              spectrum, what color would you expect this type of star to appear?
            </InstructionQuestion>
          </template>
        </InstructionRow>
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
      </ToolControlGroup>
      <LeftRightGroup class="mt-5">
        <template #right>
          <NextPrevButton to="measuring" direction="next">
            part 2
          </NextPrevButton>
        </template>
      </LeftRightGroup>
    </template>
  </TemperatureLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';
import { useCustomMetadata } from '@/utils/metadataUtils';

useSpecLabHead('Stars Part 1', 'Temperature');

const sunMetadata = useCustomMetadata('Stars', 'sun_ref_colina96', {});
const mStarMetadata = useCustomMetadata('Stars', 'M_Star', {});
const bStarMetadata = useCustomMetadata('Stars', 'B_Star', {});
const starMetadataListMaybe = [sunMetadata, mStarMetadata, bStarMetadata];
const starMetadataList = starMetadataListMaybe.filter((md) => !!md);
</script>
