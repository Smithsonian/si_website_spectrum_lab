<template>
  <ChallengeToolLayout>
    <template #challenge-col>
      <BRow>
        <BCol cols="3">
          <nav>
            <ul class="nav nav-pills flex-column">
              <li class="nav-item">
                <RouterLink
                  class="section-nav-link nav-link"
                  to="/temperature/tutorial"
                  >Tutorial</RouterLink
                >
              </li>
              <li class="nav-item">
                <RouterLink
                  class="section-nav-link nav-link"
                  to="/temperature/predictions"
                  >Temperature Predictions</RouterLink
                >
              </li>
              <li class="nav-item">
                <RouterLink
                  class="section-nav-link nav-link"
                  to="/temperature/stars"
                  >Stars</RouterLink
                >
              </li>
              <li class="nav-item">
                <RouterLink
                  class="section-nav-link nav-link"
                  to="/temperature/incandescentbulb"
                  >Incandescent Bulb</RouterLink
                >
              </li>
              <li class="nav-item">
                <RouterLink
                  class="section-nav-link nav-link"
                  to="/temperature/earth"
                  >Earth</RouterLink
                >
              </li>
            </ul>
          </nav>
        </BCol>
        <BCol>
          <ChallengeIntro
            heading="What can spectra tell us about temperature?"
            :icon-path="temperatureIcon"
            icon-alt="Temperature module icon"
          >
            Stars are too far away (and too hot!) for a human to touch, yet we
            can measure their temperatures. Spectra make this possible! Let’s
            investigate how.
          </ChallengeIntro>
          <slot name="challenge-tab"></slot>
        </BCol>
      </BRow>
    </template>
    <template #tool-col>
      <slot name="tool-col"></slot>
    </template>
  </ChallengeToolLayout>
</template>

<script setup lang="ts">
import temperatureIcon from '@/assets/SVG/temperature_icon.svg';
</script>
