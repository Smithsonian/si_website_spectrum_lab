<template>
  <ChallengeToolLayout>
    <template #challenge-col>
      <BRow>
        <BCol cols="3">
          <SectionNav>
            <SectionNavItem to="/final-projects/fishtank/background-1">
              Background Part I
            </SectionNavItem>
            <SectionNavItem to="/final-projects/fishtank/background-2">
              Background Part II
            </SectionNavItem>
            <SectionNavItem to="/final-projects/fishtank/light-your-tank">
              Light Your Tank
            </SectionNavItem>
            <SectionNavItem to="/final-projects/fishtank/mood-lighting">
              Bonus: Mood Lighting
            </SectionNavItem>
          </SectionNav>
        </BCol>
        <BCol>
          <ChallengeIntro
            heading="Create and light a saltwater reef aquarium that is healthy and looks great too."
            :icon-path="fishtankIconUrl"
            icon-alt="Fishtank module icon"
          >
            For this project, you’ll first explore how land plants reflect
            light. Then you’ll dive into the project by investigating a variety
            of plants, fish and coral that live in saltwater aquaria. You’ll
            choose a few to live in your tank. Based on what you’ve learned in
            this unit, you’ll decide how to light the tank so all of its
            inhabitants thrive.
          </ChallengeIntro>
          <slot name="challenge-tab"></slot>
        </BCol>
      </BRow>
    </template>
    <template #tool-col>
      <slot name="tool-col"></slot>
    </template>
  </ChallengeToolLayout>
</template>

<script setup lang="ts">
import fishtankIconUrl from '@/assets/SVG/fish_tank_icon.svg';
</script>
