<template>
  <ChallengeToolLayout>
    <template #challenge-col>
      <BRow>
        <BCol cols="3">
          <SectionNav>
            <SectionNavItem to="/color/tutorial">
              Spectrum Tutorial
            </SectionNavItem>
            <SectionNavItem to="/color/seeing-color">
              Seeing color
            </SectionNavItem>
            <SectionNavItem to="/color/predictions">
              Predictions
            </SectionNavItem>
          </SectionNav>
        </BCol>
        <BCol>
          <ChallengeIntro
            heading="How are spectra and color related?"
            :icon-path="colorIcon"
            icon-alt="Color module icon"
          >
            The mix of photon colors that reach our eyes determines what colors
            we see. We'll learn how to follow a source of light along its path
            to our eyes and consider how its spectrum relates to the color we
            see.
          </ChallengeIntro>
          <slot name="challenge-tab"></slot>
        </BCol>
      </BRow>
    </template>
    <template v-if="$slots['tool-col']" #tool-col>
      <slot name="tool-col"></slot>
    </template>
  </ChallengeToolLayout>
</template>

<script setup lang="ts">
import colorIcon from '@/assets/SVG/color_icon.svg?source&set-current-color';
</script>
