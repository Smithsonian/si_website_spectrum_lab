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
    </template>
  </ChallengeToolLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';

useSpecLabHead('Attributions');
</script>
