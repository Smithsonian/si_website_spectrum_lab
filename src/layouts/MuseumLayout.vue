<template>
  <ChallengeToolLayout>
    <template #challenge-col>
      <BRow>
        <BCol cols="3">
          <SectionNav>
            <SectionNavItem to="/final-projects/museum/intro">
              Science of Art Conservation
            </SectionNavItem>
            <SectionNavItem to="/final-projects/museum/paint-colors">
              Paint Colors &amp; Spectra
            </SectionNavItem>
            <SectionNavItem to="/final-projects/museum/two-blues">
              Two Blue Spectra
            </SectionNavItem>
            <SectionNavItem to="/final-projects/museum/identify-blues">
              Identify Pigments
            </SectionNavItem>
            <SectionNavItem to="/final-projects/museum/other-blues">
              Other Blues
            </SectionNavItem>
          </SectionNav>
        </BCol>
        <BCol>
          <ChallengeIntro
            heading="Design a Museum Display"
            :icon-path="museumIconUrl"
            icon-alt="Museum module icon"
          >
            For this project, you'll set up a museum display that conveys how
            spectra are used in art conservation.
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
import museumIconUrl from '@/assets/SVG/museum_conservation_icon.svg?source&set-current-color';
</script>
