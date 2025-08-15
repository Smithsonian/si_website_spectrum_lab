<template>
  <FishTankLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <template #top>
          <InstructionHeader>Plant Reflection Spectra</InstructionHeader>
          <InstructionRow row-type="Intro">
            This is a shaving brush plant that can grow in a saltwater aquarium.
            Its green color comes from chlorophyll, which reflects some photons
            while absorbing others.
          </InstructionRow>
          <InstructionRow row-type="Tool">
            Examine the reflection spectrum of chlorophyll A, one of the
            pigments that make up the plant.
          </InstructionRow>
          <InstructionRow row-type="Notebook">
            Answer these questions in your notebook.
            <template #steps>
              <InstructionStep>
                Within the visible part of the spectrum, at what wavelength does
                the plant reflect the most amount of light? Is this in line with
                your expectation? Why or why not?
              </InstructionStep>
              <InstructionStep>
                Chlorophyll is the most important pigment in most green plants,
                and it absorbs sunlight to make food for the plant through
                photosynthesis. Based on the shaving brush plant’s reflection
                spectrum, what color photons do you think are the ones that the
                plant needs to perform photosynthesis to keep it healthy?
              </InstructionStep>
            </template>
          </InstructionRow>
        </template>
        <template #middle>
          <div class="bg-gen-black">
            <img
              src="/src/assets/fishtank/shaving_brush_alyssas_seahorse_savvy_website.jpg"
              alt="Green plants in an aquarium"
              class="d-block mx-auto"
              style="max-width: 575px"
            />
          </div>
        </template>
      </ChallengeCard>
    </template>
    <template #tool-col>
      <ToolControlGroup>
        <template #top-tool>
          <ToolCard
            :custom-metadata="plantMetadata"
            :spectrum-picker-placeholder="null"
          />
        </template>
      </ToolControlGroup>
      <LeftRightGroup>
        <template #left>
          <NextPrevButton direction="prev" to="reflection-spectra-colors" light>
            previous section
          </NextPrevButton>
        </template>
        <template #right>
          <NextPrevButton direction="next" to="your-fishtank" light>
            next section
          </NextPrevButton>
        </template>
      </LeftRightGroup>
    </template>
  </FishTankLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';
import { useAllMetadata } from '@/utils/metadataUtils';

useSpecLabHead('Plant Reflection', 'Fish Tank');

const allMetadata = useAllMetadata();
const fishtankMetadata = allMetadata['Fish Tank Inhabitants'];
const plantMetadata = fishtankMetadata.filter(
  (sm) => sm.filename === 'Chlorophyll_a',
);
</script>
