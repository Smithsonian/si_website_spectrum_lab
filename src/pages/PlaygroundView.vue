<template>
  <ChallengeToolLayout>
    <template #challenge-col>
      <BRow>
        <BCol cols="12" xl="11" xxl="10">
          <ChallengeIntro
            heading="Welcome to the Playground!"
            :icon-path="playgroundIcon"
            icon-alt="Playground module icon"
          >
            This Spectrum Tool will help you connect the visual color display of
            a light source's spectrum&mdash;like the color image you see in a
            spectroscope&mdash;with a graph of the light's spectrum.
          </ChallengeIntro>
        </BCol>
      </BRow>
    </template>
    <template #tool-col>
      <ToolControlGroup
        :control-names="['units', 'plotType', 'normalize', 'zoom']"
      >
        <template #top-tool>
          <ToolCard :show-file-picker="true" />
        </template>
        <template #bottom-tool>
          <ToolCard :show-file-picker="true" />
        </template>
      </ToolControlGroup>
    </template>
  </ChallengeToolLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';
import playgroundIcon from '@/assets/SVG/playground_icon.svg?source&set-current-color';

useSpecLabHead('Playground');
</script>
