<template>
  <div
    class="header-image-bg text-light d-flex flex-column justify-content-end"
  >
    <BContainer>
      <BRow>
        <BCol cols="6">
          <p>
            The Spectrum Lab is an online data visualization tool and associated
            set of investigations that supports students in learning about
            light, color, and the electromagnetic spectrum by working with
            hands-on materials, models and simulations, and authentic scientific
            spectral data.
          </p>
        </BCol>
      </BRow>
    </BContainer>
  </div>
  <div class="bg-sl-muted-blue py-4">
    <BContainer class="px-4" style="margin-bottom: 150px">
      <BRow class="gx-5 mb-4">
        <ModuleTile :icon-source="colorIcon" title="1. Color" to="/">
          How does the interaction of light and matter affect the colors we see?
          Explore light emission, reflection, absorption, and transmission using
          hands-on materials and interactive simulations.
        </ModuleTile>
        <ModuleTile :icon-source="spectraIcon" title="2. Spectra" to="/spectra">
          How can a spectrum tell us more than our eyes can perceive? Build a
          spectroscope to observe different sources of light, then use the
          Spectrum Lab Data Tool to explore a spectrum graph.
        </ModuleTile>
      </BRow>
      <BRow class="gx-5 mb-4">
        <ModuleTile
          :icon-source="tempIcon"
          title="3. Temperature"
          to="/temperature"
        >
          What can spectra tell us about an object’s temperature? Use the
          Spectrum Data Tool to explore how an object’s thermal emission relates
          to color and temperature.
        </ModuleTile>
        <ModuleTile :icon-source="compIcon" title="4. Composition" to="/">
          What can spectra tell us about an object’s composition? Explore how
          scientists identify chemical elements and compounds through their
          spectral signatures.
        </ModuleTile>
      </BRow>
      <hr class="mb-4" />
      <BRow class="gx-5">
        <ModuleTile
          :icon-source="finalIcon"
          title="Final Projects"
          lighter
          to="/fishtank"
        >
          Apply what you know about light, color, and spectra to Design a Fish
          Tank lighting system; Explore Exoplanet Atmospheres; or Analyze
          Artworks as a Museum Conservator.
        </ModuleTile>
        <ModuleTile
          :icon-source="playgroundIcon"
          title="Playground"
          lighter
          to="/playground"
        >
          Explore Spectral Data from over 100 different sources, from flowers
          and fish to atoms and artworks. Or upload your own spectrum data file.
          What can you discover about color, temperature, and composition?
        </ModuleTile>
      </BRow>
    </BContainer>
  </div>
</template>

<script setup lang="ts">
import colorIcon from '@/assets/SVG/color_icon.svg?source&set-current-color';
import spectraIcon from '@/assets/SVG/spectra_icon.svg?source&set-current-color';
import tempIcon from '@/assets/SVG/temperature_icon.svg?source&set-current-color';
import compIcon from '@/assets/SVG/composition_icon.svg?source&set-current-color';
import finalIcon from '@/assets/SVG/final_projects_icon.svg?source&set-current-color';
import playgroundIcon from '@/assets/SVG/playground_icon.svg?source&set-current-color';
import { useSpecLabHead } from '@/utils/locationUtils';

useSpecLabHead('Home Page');
</script>

<style>
.header-image-bg {
  background-image: url(/src/assets/2x/glass_filters@2x.webp);
  background-size: cover;
  background-position: top 100% left 50%;
  min-height: 370px;
  position: relative;
  /* New stacking context, for gradient above background but below content */
  z-index: 0;
}

.header-image-bg::before {
  content: '';
  background: linear-gradient(
    180deg,
    rgb(0 0 0 / 0%) 0%,
    rgb(0 0 0 / 0%) 50%,
    rgb(0 0 0 / 100%) 100%
  );
  height: 100%;
  width: 100%;
  position: absolute;
  /* This puts the gradient below siblings etc. But still above the parent background */
  z-index: -1;
}
</style>
