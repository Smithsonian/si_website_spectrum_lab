<template>
  <CompositionLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <InstructionHeader>The Sun's Composition</InstructionHeader>
        <InstructionRow row-type="Intro">
          The Sun’s absorption lines tell us what elements are present in its
          gas. For example, we know that hydrogen is the most common element in
          a star.
        </InstructionRow>
        <InstructionRow row-type="Tool">
          Compare the spectra to identify what the Sun is made of.
          <template #steps>
            <InstructionStep>
              Under <span class="challenge-tool-label">Source 2</span>, use the
              dropdown menu to select the Hydrogen Emission spectrum.
            </InstructionStep>
            <InstructionStep>
              Identify three distinct wavelengths where absorption lines appear
              in the Sun’s spectrum and emission lines appear in the hydrogen
              spectrum. Use information about these lines to complete the Table
              in Question 1 in your Notebook.
            </InstructionStep>
            <InstructionStep>
              Under <span class="challenge-tool-label">Source 2</span>, use the
              dropdown menu to compare other atomic spectra with the Sun's
              spectrum. Identify one other element that is present in the Sun
              based on the comparison spectra. Use the information to answer
              Question 2 in your Notebook.
            </InstructionStep>
          </template>
          <template #note>
            A particular element like hydrogen can either absorb or emit light.
            Either way, the lines will occur at the same specific set of
            wavelengths and can be used as the “fingerprint” for that element.
          </template>
        </InstructionRow>
        <InstructionRow row-type="Notebook">
          Answer these questions in your Notebook.
          <template #steps>
            <InstructionStep>
              Complete the Hydrogen in the Sun table. For each of the lines that
              had a match between the Sun's spectrum and the hydrogen spectrum:
              write the wavelength of the line, describe how it appears in the
              Sun's spectrum, and how it appears in the hydrogen spectrum.
            </InstructionStep>
            <InstructionStep>
              Identify one other element that is present in the Sun based on the
              absorption and emission spectra.
            </InstructionStep>
          </template>
        </InstructionRow>
      </ChallengeCard>
    </template>
    <template #tool-col>
      <ToolControlGroup>
        <template #top-tool>
          <ToolCard
            :custom-metadata="topMetadata"
            :spectrum-picker-placeholder="null"
          />
        </template>
        <template #bottom-tool>
          <ToolCard :custom-metadata="bottomMetadata" />
        </template>
      </ToolControlGroup>
      <LeftRightGroup class="mt-4">
        <template #left>
          <NextPrevButton light direction="prev" to="line-matching">
            prev section
          </NextPrevButton>
        </template>
        <template #right>
          <NextPrevButton light direction="next" to="earth">
            next section
          </NextPrevButton>
        </template>
      </LeftRightGroup>
    </template>
  </CompositionLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';
import { useCustomMetadata } from '@/utils/metadataUtils';

useSpecLabHead('Sun', 'Composition');

const sun = useCustomMetadata('Stars', 'sun_ref_colina96', {});
const topMetadata = [sun].filter((sm) => !!sm);

const hydrogen = useCustomMetadata(
  'Atoms and Molecules',
  'Hydrogen_Emission',
  {},
);
const helium = useCustomMetadata('Atoms and Molecules', 'Helium_Emission', {});
const neon = useCustomMetadata('Atoms and Molecules', 'Neon_Emission', {});
const calcium = useCustomMetadata(
  'Atoms and Molecules',
  'Calcium_Emission',
  {},
);
const iron = useCustomMetadata('Atoms and Molecules', 'Iron_Emission', {});
const mercury = useCustomMetadata(
  'Atoms and Molecules',
  'Mercury_Emission',
  {},
);
const bottomMetadata = [hydrogen, helium, neon, calcium, iron, mercury].filter(
  (sm) => !!sm,
);
</script>
