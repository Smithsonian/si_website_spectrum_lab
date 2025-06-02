<template>
  <ChallengeToolLayout>
    <template #challenge-col>
      <BRow>
        <BCol cols="3">
          <SectionNav>
            <SectionNavItem to="/temperature/predictions">
              Temperature Predictions
            </SectionNavItem>
            <SectionNavItem to="/temperature/stars">Stars</SectionNavItem>
            <SectionNavItem to="/temperature/incandescentbulb">
              Incandescent Bulb
            </SectionNavItem>
            <SectionNavItem to="/temperature/earth"> Earth </SectionNavItem>
          </SectionNav>
        </BCol>
        <BCol>
          <ChallengeIntro
            heading="What can spectra tell us about temperature?"
            :icon-path="temperatureIcon"
            icon-alt="Temperature module icon"
          >
            Stars are too far away (and too hot!) for a human to touch, yet we
            can measure their temperatures. Spectra make this possible! Let’s
            investigate how.
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
import temperatureIcon from '@/assets/SVG/temperature_icon.svg?source&set-current-color';
</script>
