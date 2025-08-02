<template>
  <ChallengeToolLayout>
    <template #challenge-col>
      <BRow>
        <BCol cols="3">
          <SectionNav>
            <FinalProjectsOuterNavItem to="/final-projects/fishtank">
              Fish tank
            </FinalProjectsOuterNavItem>
            <FinalProjectsOuterNavItem to="/final-projects/exoplanets">
              Exoplanets
            </FinalProjectsOuterNavItem>
            <SectionNavItem to="/final-projects/exoplanets/intro">
              Researching Exoplanets
            </SectionNavItem>
            <SectionNavItem to="/final-projects/exoplanets/clear-skies">
              Tutorial: Exoplanet atmospheres
            </SectionNavItem>
            <SectionNavItem to="/final-projects/exoplanets/cloudy-skies">
              Tutorial: Cloudy/hazy atmospheres
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
            <FinalProjectsOuterNavItem to="/final-projects/museum">
              Museum conservation
            </FinalProjectsOuterNavItem>
          </SectionNav>
        </BCol>
        <BCol>
          <ChallengeIntro
            heading="Exploring exoplanet atmospheres"
            :icon-path="exoplanetIcon"
            icon-alt="Exoplanets module icon"
          >
            Investigate the atmospheres of planets outside our solar system,
            then make a pitch for what exoplanet spectra you’d like to capture
            with the James Webb Space Telescope.
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
import exoplanetIcon from '@/assets/SVG/modelTransit1_dark.svg?source&set-current-color';
</script>
