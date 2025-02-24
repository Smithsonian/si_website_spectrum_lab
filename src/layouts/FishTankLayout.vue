<template>
  <nav>
    <ul class="nav nav-pills mt-3">
      <li class="nav-item">
        <RouterLink class="nav-link" active-class="active" to="/fishtank/intro"
          >1. Fishtank Intro</RouterLink
        >
      </li>
      <li class="nav-item">
        <RouterLink
          class="nav-link"
          active-class="active"
          to="/fishtank/background-trees"
          >2. Background Part I</RouterLink
        >
      </li>
      <li class="nav-item">
        <RouterLink
          class="nav-link"
          active-class="active"
          to="/fishtank/background-comparison"
          >3. Background Part IIa</RouterLink
        >
      </li>
      <li class="nav-item">
        <RouterLink
          class="nav-link"
          active-class="active"
          to="/fishtank/background-reveal"
          >4. Background Part IIb</RouterLink
        >
      </li>
      <li class="nav-item">
        <RouterLink
          class="nav-link"
          active-class="active"
          to="/fishtank/light-your-tank"
          >5. Light Your Tank</RouterLink
        >
      </li>
      <li class="nav-item">
        <RouterLink
          class="nav-link"
          active-class="active"
          to="/fishtank/mood-lighting"
          >6. Bonus: Mood Lighting</RouterLink
        >
      </li>
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
