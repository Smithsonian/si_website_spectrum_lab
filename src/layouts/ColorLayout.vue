<template>
  <ChallengeToolLayout>
    <template #challenge-col>
      <BRow>
        <BCol cols="3">
          <SectionNav>
            <SectionNavItem to="/color/tutorial"> Tutorial </SectionNavItem>
            <SectionNavItem to="/color/seeing-color">
              Seeing color
            </SectionNavItem>
            <SectionNavItem to="/color/predictions">Predictions</SectionNavItem>
          </SectionNav>
        </BCol>
        <BCol>
          <ChallengeIntro
            heading="How can spectra tell us what color things are?"
            :icon-path="colorIcon"
            icon-alt="Color module icon"
          >
            Spectra interacts with matter to produce the color we see. How does
            it do this?
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
