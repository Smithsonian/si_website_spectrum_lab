<template>
  <div
    class="header-image-bg text-light d-flex flex-column justify-content-end"
  >
    <BContainer>
      <BRow>
        <BCol cols="6">
          <p>
            Apply what you know about light, color, and spectra to Design a Fish
            Tank lighting system; Explore Exoplanet Atmospheres; or Analyze
            Artworks as a Museum Conservator.
          </p>
        </BCol>
      </BRow>
    </BContainer>
  </div>
  <div class="bg-sl-slate-blue py-4">
    <BContainer class="px-4" style="margin-bottom: 150px">
      <BRow class="gx-5 mb-4">
        <ModuleTile :icon-source="fishtankIcon" title="Fishtank" to="fishtank">
          Create and light a saltwater reef aquarium that is healthy and looks
          great too.
        </ModuleTile>
        <ModuleTile
          :icon-source="exoplanetsIcon"
          title="Exoplanets"
          to="exoplanets"
        >
          Explore the atmosphere of planets outside our solar system.
        </ModuleTile>
        <ModuleTile
          :icon-source="museumIcon"
          title="Museum Conservation"
          to="museum"
        >
          Set up a museum display that conveys how spectra are used in art
          conservation.
        </ModuleTile>
      </BRow>
    </BContainer>
  </div>
</template>

<script setup lang="ts">
import fishtankIcon from '@/assets/SVG/fish_tank_icon.svg?source&set-current-color';
import exoplanetsIcon from '@/assets/SVG/exoplanets_icon.svg?source&set-current-color';
import museumIcon from '@/assets/SVG/museum_conservation_icon.svg?source&set-current-color';
import { useSpecLabHead } from '@/utils/locationUtils';

useSpecLabHead('Final Projects');
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
