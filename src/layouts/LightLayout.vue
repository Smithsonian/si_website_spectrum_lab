<template>
  <ChallengeToolLayout>
    <template #challenge-col>
      <BRow>
        <BCol cols="3">
          <SectionNav>
            <SectionNavItem to="/light/introduction">
              Introduction
            </SectionNavItem>
            <SectionNavItem to="/light/color-filters">
              Color Filters
            </SectionNavItem>
            <SectionNavItem to="/light/photons">
              Photons and Color
            </SectionNavItem>
            <SectionNavItem to="/light/mixing">Color Mixing</SectionNavItem>
            <SectionNavItem to="/light/behaviors">
              Behaviors of Light
            </SectionNavItem>
          </SectionNav>
        </BCol>
        <BCol>
          <ChallengeIntro
            heading="How does light interact with matter?"
            :icon-path="lightIcon"
            icon-alt="Light module icon"
          >
            Light provides energy to sustain life and makes it possible for us
            to see the world around us. Explore the different ways light affects
            us and our surroundings.
          </ChallengeIntro>
          <slot></slot>
        </BCol>
      </BRow>
    </template>
  </ChallengeToolLayout>
</template>

<script setup lang="ts">
import lightIcon from '@/assets/SVG/lightbulb-regular.svg?source&set-current-color';
</script>
