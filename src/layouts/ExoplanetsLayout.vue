<template>
  <ChallengeToolLayout>
    <template #challenge-col>
      <BRow>
        <BCol cols="3">
          <SectionNav>
            <SectionNavItem to="/final-projects/exoplanets/clear-skies">
              Clear skies
            </SectionNavItem>
            <SectionNavItem to="/final-projects/exoplanets/cloudy-skies">
              Cloudy/hazy skies
            </SectionNavItem>
            <SectionNavItem to="/final-projects/exoplanets/wasp-17b">
              WASP-17b
            </SectionNavItem>
            <SectionNavItem to="/final-projects/exoplanets/comparing">
              Comparative Exoplanetology
            </SectionNavItem>
            <SectionNavItem to="/final-projects/exoplanets/proposal">
              Proposal to NASA
            </SectionNavItem>
          </SectionNav>
        </BCol>
        <BCol>
          <ChallengeIntro
            heading="Exploring Exoplanets"
            :icon-path="exoplanetIcon"
            icon-alt="Exoplanets module icon"
          >
            For this project, you’ll explore the atmosphere of planets outside
            our solar system.
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
import exoplanetIcon from '@/assets/SVG/exoplanets_icon.svg';
</script>
