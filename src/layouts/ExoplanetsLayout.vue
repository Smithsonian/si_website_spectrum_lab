<template>
  <ChallengeToolLayout>
    <template #challenge-col>
      <BRow>
        <BCol cols="3">
          <SectionNav>
            <FinalProjectsOuterNavItem to="/final-projects/exoplanets">
              Exoplanets
            </FinalProjectsOuterNavItem>
            <SectionNavItem to="/final-projects/exoplanets/intro">
              Researching Exoplanets
            </SectionNavItem>
            <SectionNavItem to="/final-projects/exoplanets/capturing-spectra/">
              Capturing Spectra
            </SectionNavItem>
            <SectionNavItem to="/final-projects/exoplanets/clear-skies">
              Modeling Clear Atmospheres
            </SectionNavItem>
            <SectionNavItem to="/final-projects/exoplanets/cloudy-skies">
              Modeling Cloudy & Hazy Atmospheres
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
          <FinalProjectsOtherProjects />
          <SectionNav>
            <FinalProjectsOuterNavItem to="/final-projects/fishtank">
              Fish tank
            </FinalProjectsOuterNavItem>
            <FinalProjectsOuterNavItem to="/final-projects/museum">
              Museum conservation
            </FinalProjectsOuterNavItem>
          </SectionNav>
        </BCol>
        <BCol>
          <ChallengeIntro
            heading="Explore Exoplanet Atmospheres"
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
