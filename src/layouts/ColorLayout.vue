<template>
  <ChallengeToolLayout>
    <template #challenge-col>
      <BRow>
        <BCol cols="3">
          <SectionNav>
            <SectionNavItem to="/color/predictions">
              Make a Prediction
            </SectionNavItem>
            <SectionNavItem to="/color/photons">
              Photons and Color
            </SectionNavItem>
            <SectionNavItem to="/color/mixing">Color Mixing</SectionNavItem>
            <SectionNavItem to="/color/behaviors">
              Behaviors of Light
            </SectionNavItem>
          </SectionNav>
        </BCol>
        <BCol>
          <ChallengeIntro
            heading="How does the interaction of light and matter affect the colors we see?"
            :icon-path="colorIcon"
            icon-alt="Color module icon"
          >
            Why does this even matter?
          </ChallengeIntro>
          <slot></slot>
        </BCol>
      </BRow>
    </template>
  </ChallengeToolLayout>
</template>

<script setup lang="ts">
import colorIcon from '@/assets/SVG/color_icon.svg';
</script>
