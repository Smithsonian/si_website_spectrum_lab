<template>
  <ChallengeToolLayout>
    <template #challenge-col>
      <BRow>
        <BCol cols="3">
          <SectionNav>
            <FinalProjectsOuterNavItem to="/final-projects/fishtank">
              Fish tank
            </FinalProjectsOuterNavItem>
            <SectionNavItem
              to="/final-projects/fishtank/explore-lighting-design"
            >
              Explore Lighting Design
            </SectionNavItem>
            <SectionNavItem
              to="/final-projects/fishtank/reflection-spectra-colors"
            >
              Fish Reflection Spectra &amp; Colors
            </SectionNavItem>
            <SectionNavItem
              to="/final-projects/fishtank/plant-reflection-spectra"
            >
              Plant Reflection Spectra
            </SectionNavItem>
            <SectionNavItem to="/final-projects/fishtank/your-fishtank">
              Your Fish Tank
            </SectionNavItem>
            <SectionNavItem to="/final-projects/fishtank/light-your-tank">
              Light Your Tank
            </SectionNavItem>
            <SectionNavItem
              to="/final-projects/fishtank/inhabitants-under-lights"
            >
              Inhabitants Under Your Lights
            </SectionNavItem>
            <SectionNavItem to="/final-projects/fishtank/put-it-together">
              Put it Together
            </SectionNavItem>
          </SectionNav>
          <FinalProjectsOtherProjects />
          <SectionNav>
            <FinalProjectsOuterNavItem to="/final-projects/exoplanets">
              Exoplanets
            </FinalProjectsOuterNavItem>
            <FinalProjectsOuterNavItem to="/final-projects/museum">
              Museum conservation
            </FinalProjectsOuterNavItem>
          </SectionNav>
        </BCol>
        <BCol>
          <ChallengeIntro
            heading="Create and Light a Saltwater Aquarium"
            :icon-path="fishtankIconUrl"
            icon-alt="Fishtank module icon"
          >
            Investigate a variety of plants, fish and coral that can live in
            saltwater aquaria. Choose a few to live in your tank then decide how
            to light the tank so all of its inhabitants thrive.
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
import fishtankIconUrl from '@/assets/SVG/fish_tank_icon.svg?source&set-current-color';
</script>
