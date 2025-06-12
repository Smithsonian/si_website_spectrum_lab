<template>
  <ChallengeToolLayout>
    <template #challenge-col>
      <BRow>
        <BCol cols="3">
          <SectionNav>
            <SectionNavItem to="/final-projects/museum/intro">
              Science of Art Conservation
            </SectionNavItem>
            <SectionNavItem to="/final-projects/museum/chokha-painting">
              Chokha Painting
            </SectionNavItem>
            <SectionNavItem to="/final-projects/museum/chokha-pigments">
              <!-- 3 parts -->
              Chokha Pigments
            </SectionNavItem>
            <SectionNavItem to="/final-projects/museum/hokusai-painting">
              Hokusai Painting
            </SectionNavItem>
            <SectionNavItem to="/final-projects/museum/hokusai-pigments">
              Hokusai Pigments
            </SectionNavItem>
            <SectionNavItem to="/final-projects/museum/whole-image-techniques">
              Bonus: Whole-image Techniques
            </SectionNavItem>
            <SectionNavItem to="/final-projects/museum/design-museum-display">
              Design Museum Display
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
