<template>
  <ChallengeToolLayout>
    <template #challenge-col>
      <BRow>
        <BCol cols="3">
          <SectionNav>
            <SectionNavItem to="/spectra/tutorial">Tutorial</SectionNavItem>
            <SectionNavItem to="/spectra/start-drawing">
              Start drawing
            </SectionNavItem>
            <SectionNavItem to="/spectra/draw-a-spectrum">
              Draw a spectrum
            </SectionNavItem>
            <SectionNavItem to="/spectra/white-line">
              Spectroscope: White line
            </SectionNavItem>
            <SectionNavItem to="/spectra/light-sources">
              Spectroscope: Light sources
            </SectionNavItem>
            <SectionNavItem to="/spectra/wavelength-and-energy">
              Wavelengths and energy
            </SectionNavItem>
          </SectionNav>
        </BCol>
        <BCol>
          <ChallengeIntro
            heading="Get to know the Spectrum Tool"
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
import spectraIcon from '@/assets/SVG/spectra_icon.svg';
</script>
