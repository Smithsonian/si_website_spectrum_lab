<template>
  <ChallengeToolLayout>
    <template #challenge-col>
      <BRow>
        <BCol cols="3">
          <SectionNav>
            <SectionNavItem to="/spectra/build">
              Build and Use a Spectroscope
            </SectionNavItem>
            <SectionNavItem to="/spectra/tutorial"
              >Guide to the Spectrum Tool</SectionNavItem
            >
            <SectionNavItem to="/spectra/draw-spectra">
              Draw a Spectrum
            </SectionNavItem>
            <SectionNavItem to="/spectra/white-line">
              Observe White Light Source
            </SectionNavItem>
            <SectionNavItem to="/spectra/understand-spectroscope">
              Understand Your Spectroscope
            </SectionNavItem>
            <SectionNavItem to="/spectra/light-sources">
              Investigate Light Sources
            </SectionNavItem>
            <SectionNavItem to="/spectra/wavelengths-and-energy">
              Measure Wavelengths and Energy
            </SectionNavItem>
          </SectionNav>
        </BCol>
        <BCol>
          <ChallengeIntro
            heading="Making Sense of Spectra"
            :icon-path="spectraIcon"
            icon-alt="Spectra module icon"
          >
            This Spectrum Tool will help you connect the visual color display of
            a light source's spectrum—like the color image you see in a
            spectroscope—with a graph of the light’s spectrum.
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
import spectraIcon from '@/assets/SVG/spectra_icon.svg?source&set-current-color';
</script>
