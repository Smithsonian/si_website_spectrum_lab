<template>
  <ChallengeToolLayout>
    <template #challenge-col>
      <BRow>
        <BCol cols="3">
          <SectionNav>
            <SectionNavItem to="/composition/atomic-emission">
              Atomic Emission
            </SectionNavItem>
            <SectionNavItem to="/composition/atomic-absorption">
              Atomic Absorption
            </SectionNavItem>
            <SectionNavItem to="/composition/line-matching">
              What Counts as a Match?
            </SectionNavItem>
            <SectionNavItem to="/composition/sun"
              >The Sun's Composition</SectionNavItem
            >
            <SectionNavItem to="/composition/earth">Earth</SectionNavItem>
            <SectionNavItem to="/composition/solar-system">
              Solar System Composition
            </SectionNavItem>
          </SectionNav>
        </BCol>
        <BCol>
          <ChallengeIntro
            heading="How can spectra tell us what things are made of?"
            :icon-path="compositionIcon"
            icon-alt="Composition module icon"
          >
            Stars and planets are too far away for a human to touch, yet we know
            what they are made of. Spectra make this possible! Let’s investigate
            how.
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
import compositionIcon from '@/assets/SVG/composition_icon.svg?source&set-current-color';
</script>
