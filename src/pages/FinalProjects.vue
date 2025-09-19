<template>
  <ChallengeToolLayout>
    <template #challenge-col>
      <BRow>
        <BCol cols="3">
          <SectionNav>
            <FinalProjectsOuterNavItem to="fishtank">
              Fish tank
            </FinalProjectsOuterNavItem>
            <FinalProjectsOuterNavItem to="exoplanets">
              Exoplanets
            </FinalProjectsOuterNavItem>
            <FinalProjectsOuterNavItem to="museum">
              Museum conservation
            </FinalProjectsOuterNavItem>
          </SectionNav>
        </BCol>
        <BCol>
          <ChallengeIntro
            heading="Test your expertise with these final projects"
            :icon-path="finalProjectsIcon"
            icon-alt="Final projects icon"
          >
            Apply what you know about light, color, and spectra to design a fish
            tank lighting system; explore exoplanet atmospheres; or analyze
            artworks as a museum conservator.
          </ChallengeIntro>
          <FinalProjectCard
            title="Fish tank"
            :img-src="fishTankCardImage"
            img-alt="Colorful fish and plants in a fish tank"
            to="fishtank"
          >
            <BCardText>
              Create and light a saltwater reef aquarium that’s healthy and
              beautiful.
            </BCardText>
            <BCardText>
              In this project, you’ll first explore how land plants reflect
              light. Then you’ll dive deeper by investigating a variety of
              plants, fish, and coral that live in saltwater aquaria. Lastly,
              you’ll choose a few to live in your tank how to light the tank so
              its they thrive.
            </BCardText>
          </FinalProjectCard>
          <FinalProjectCard
            title="Exoplanets"
            :img-src="exoplanetsCardImage"
            img-alt="A planet orbiting a red star"
            to="exoplanets"
          >
            <BCardText>
              Explore the atmosphere of planets outside our solar system.
            </BCardText>
            <BCardText>
              In this project, you’ll investigate the atmospheres of planets
              outside our solar system, then make a pitch for what exoplanet
              spectra you’d like to capture with the James Webb Space Telescope.
            </BCardText>
          </FinalProjectCard>
          <FinalProjectCard
            title="Museum conservation"
            :img-src="museumCardImage"
            img-alt="A hand holding a paintbrush applies oil paint to a canvas"
            to="museum"
          >
            <BCardText>
              Design a museum display that conveys how light, color, and spectra
              are used in art conservation.
            </BCardText>
            <BCardText>
              In this project, you’ll learn how art conservators use light,
              color, and spectra to help them make decisions about how to best
              care for and restore works of art.
            </BCardText>
          </FinalProjectCard>
        </BCol>
      </BRow>
    </template>
  </ChallengeToolLayout>
</template>

<script setup lang="ts">
import finalProjectsIcon from '@/assets/SVG/final_projects_icon.svg?source&set-current-color';
import fishTankCardImage from '@/assets/2x/fishtank_card@2x.webp';
import exoplanetsCardImage from '@/assets/2x/exoplanets_card@2x.webp';
import museumCardImage from '@/assets/2x/museum_card@2x.webp';
import { useSpecLabHead } from '@/utils/locationUtils';

useSpecLabHead('Final Projects');
</script>
