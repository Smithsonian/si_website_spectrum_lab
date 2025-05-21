<template>
  <ChallengeToolLayout>
    <template #challenge-col>
      <BRow>
        <BCol cols="3">
          <SectionNav>
            <SectionNavItem to="/composition/atomic-emission">
              Atomic Emission
            </SectionNavItem>
            <SectionNavItem to="/composition/atoms-and-spectra">
              Atoms and Spectra
            </SectionNavItem>
            <SectionNavItem to="/composition/earth">Earth</SectionNavItem>
            <SectionNavItem to="/composition/solar-system">
              Solar System
            </SectionNavItem>
            <SectionNavItem to="/composition/bonus-solar-system">
              Bonus: Solar System
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
          <slot></slot>
        </BCol>
      </BRow>
    </template>
  </ChallengeToolLayout>
</template>

<script setup lang="ts">
import compositionIcon from '@/assets/SVG/composition_icon.svg';
</script>
