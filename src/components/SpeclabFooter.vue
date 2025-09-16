<script setup lang="ts">
import { MODE } from '@/constants';
</script>

<template>
  <footer class="bg-dark text-light pt-3">
    <BContainer>
      <BRow>
        <BCol cols="8">
          <p>
            <small>
              Spectrum Lab is a Smithsonian DataLab supported by the Smithsonian
              Institution’s Together We Thrive initiative and funded in part by
              the Jeff Bezos gift to the National Air and Space Museum. Initial
              development supported by the National Science Foundation under
              award number DRL 1814077.
            </small>
          </p>
          <p>
            <BLink href="https://www.si.edu/termsofuse">
              Smithsonian Terms of Use
            </BLink>
          </p>
          <p>
            <RouterLink to="/attributions">Attributions</RouterLink>
          </p>
          <template v-if="MODE === 'development'">
            <p>
              <RouterLink to="/color-palette">Color palette</RouterLink>
            </p>
            <p>
              <RouterLink to="/icon-test">Icon test</RouterLink>
            </p>
          </template>
        </BCol>
        <BCol>
          <a href="https://www.cfa.harvard.edu/">
            <img
              src="/src/assets/CfALogo@2x.png"
              width="100%"
              alt="Center for Astrophysics: Harvard & Smithsonian logo"
            />
          </a>
        </BCol>
      </BRow>
    </BContainer>
  </footer>
</template>
