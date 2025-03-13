<template>
  <ChallengeToolLayout>
    <template #challenge-col>
      <BRow>
        <BCol cols="3">
          <nav>
            <ul class="nav nav-pills flex-column">
              <li class="nav-item">
                <RouterLink class="section-nav-link nav-link" to="/museum/intro"
                  >Science of Art Conservation</RouterLink
                >
              </li>
              <li class="nav-item">
                <RouterLink
                  class="section-nav-link nav-link"
                  to="/museum/paint-colors"
                  >Paint Colors & Spectra</RouterLink
                >
              </li>
              <li class="nav-item">
                <RouterLink
                  class="section-nav-link nav-link"
                  to="/museum/two-blues"
                  >Two Blue Spectra</RouterLink
                >
              </li>
              <li class="nav-item">
                <RouterLink
                  class="section-nav-link nav-link"
                  to="/museum/identify-blues"
                  >Identify Pigments</RouterLink
                >
              </li>
              <li class="nav-item">
                <RouterLink
                  class="section-nav-link nav-link"
                  to="/museum/other-blues"
                  >Other Blues</RouterLink
                >
              </li>
              <li class="nav-item">
                <RouterLink
                  class="section-nav-link nav-link"
                  to="/museum/blue-filter"
                  >Blue Filter</RouterLink
                >
              </li>
              <li class="nav-item">
                <RouterLink
                  class="section-nav-link nav-link"
                  to="/museum/infrared-filter"
                  >Infrared Filter</RouterLink
                >
              </li>
            </ul>
          </nav>
        </BCol>
        <BCol>
          <ChallengeIntro
            heading="Design a Museum Display"
            :icon-path="museumIconUrl"
            icon-alt="Museum module icon"
          >
            For this project, you'll set up a museum display that conveys how
            spectra are used in art conservation.
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
import museumIconUrl from '@/assets/SVG/museum_conservation_icon.svg';
</script>
