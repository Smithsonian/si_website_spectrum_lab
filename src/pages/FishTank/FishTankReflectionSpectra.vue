<template>
  <FishTankLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <template #top>
          <InstructionHeader
            >Fish Reflection Spectra and Colors</InstructionHeader
          >
          <InstructionRow row-type="Intro">
            This is a colorful Regal Angelfish. We see different colors in the
            fish’s patterns because they reflect different amounts of visible
            light at different wavelengths. Let’s investigate the reflection
            spectra from different parts of the fish and try to identify the
            colors that go with each one.
          </InstructionRow>
          <InstructionRow row-type="Tool">
            <template #steps>
              <InstructionStep>
                Under Fish Spectra, use the dropdown menu to view each mystery
                spectrum.
              </InstructionStep>
              <InstructionStep>
                Use what you learned about how light colors mix (Module 2) to
                identify what color corresponds to each spectrum.
              </InstructionStep>
            </template>
          </InstructionRow>
          <InstructionRow row-type="Notebook">
            <template #steps>
              Complete the table, listing for each spectrum the color you would
              see and match it to the corresponding region of the fish.
            </template>
          </InstructionRow>
          <InstructionRow row-type="Simulation">
            Use the RGB Bulbs Phet Simulation at the bottom if you need a
            refresher on how light colors mix.
          </InstructionRow>
        </template>
        <template #middle>
          <img
            width="100%"
            src="/src/assets/spectrum_data/Fishtank_Inhabitants/angelfish.jpg"
          />
        </template>
      </ChallengeCard>
    </template>
    <template #tool-col>
      <ToolControlGroup :control-names="['units', 'plotType', 'normalize']">
        <template #top-tool>
          <ToolCard
            spectrum-picker-placeholder="Select reflection spectrum"
            :custom-metadata="metadataList"
          />
        </template>
      </ToolControlGroup>
      <PhetIframe bordered />
      <LeftRightGroup class="mt-4">
        <template #left>
          <NextPrevButton direction="prev" light to="explore-lighting-design">
            previous section
          </NextPrevButton>
        </template>
        <template #right>
          <NextPrevButton direction="next" light to="plant-reflection-spectra">
            next section
          </NextPrevButton>
        </template>
      </LeftRightGroup>
    </template>
  </FishTankLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';
import { useCustomMetadata } from '@/utils/metadataUtils';
import mystery from '@/assets/spectrum_data/mystery@2x.png';

useSpecLabHead('Reflection Spectra & Colors', 'Fishtank');

const spectrumA = useCustomMetadata(
  'Fish Tank Inhabitants',
  'angelfish_dkbluecurve',
  {
    title: 'Mystery Spectrum A',
    imageUrl: mystery,
  },
);

const spectrumB = useCustomMetadata(
  'Fish Tank Inhabitants',
  'angelfish_greycurve',
  {
    title: 'Mystery Spectrum B',
    imageUrl: mystery,
  },
);

const spectrumC = useCustomMetadata(
  'Fish Tank Inhabitants',
  'angelfish_yellowcurve',
  {
    title: 'Mystery Spectrum C',
    imageUrl: mystery,
  },
);

const metadataList = [spectrumA, spectrumB, spectrumC].filter((sm) => !!sm);
</script>
