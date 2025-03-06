<template>
  <nav>
    <ul class="nav nav-pills mt-3">
      <li class="nav-item">
        <RouterLink
          class="nav-link"
          active-class="active"
          to="/temperature/intro"
          >1. Intro</RouterLink
        >
      </li>
      <li class="nav-item">
        <RouterLink
          class="nav-link"
          active-class="active"
          to="/temperature/tutorial"
          >2. Tutorial</RouterLink
        >
      </li>
      <li class="nav-item">
        <RouterLink
          class="nav-link"
          active-class="active"
          to="/temperature/challenge1"
          >3. Color and temperature</RouterLink
        >
      </li>
      <li class="nav-item">
        <a class="nav-link">4. Spectra and Temperature</a>
      </li>
      <li class="nav-item">
        <a class="nav-link">5. Incandescent light bulb</a>
      </li>
      <li class="nav-item"><a class="nav-link">6. Earth</a></li>
    </ul>
  </nav>
  <ChallengeToolLayout>
    <template #challenge-col>
      <slot name="challenge-tab"></slot>
    </template>
    <template #tool-col>
      <slot name="tool-col"></slot>
    </template>
  </ChallengeToolLayout>
</template>
