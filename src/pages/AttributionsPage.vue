<template>
  <ChallengeToolLayout>
    <template #challenge-col>
      <h1>Attributions</h1>
      <h2>1. Light</h2>
      <dl>
        <dt>
          <BLink variant="secondary" to="/light/photons">PhET Simulation</BLink>
        </dt>
        <dd>
          Simulation by PhET Interactive Simulations, University of Colorado
          Boulder, licensed under CC-BY-4.0 (<BLink
            variant="secondary"
            href="https://phet.colorado.edu"
            >https://phet.colorado.edu</BLink
          >).
        </dd>
      </dl>
      <h2>Spectrum source images</h2>
      <h3>Nature</h3>
      <dl>
        <dt>
          <BLink
            variant="secondary"
            href="/src/assets/spectrum_data/Nature/jellyfish.webp"
            >Jellyfish</BLink
          >
        </dt>
        <dd>
          The copyright holder of this file, Sierra Blakely, allows anyone to
          use it for any purpose, provided that the copyright holder is properly
          attributed. Redistribution, derivative work, commercial use, and all
          other use is permitted. Attribution: Sierra Blakely. (<BLink
            variant="secondary"
            href="https://commons.wikimedia.org/wiki/File:Aequorea4.jpg"
            >https://commons.wikimedia.org/wiki/File:Aequorea4.jpg</BLink
          >)
        </dd>
      </dl>
    </template>
  </ChallengeToolLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';

useSpecLabHead('Attributions');
</script>
