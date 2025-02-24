<template>
  <nav>
    <ul class="nav nav-pills mt-3">
      <li class="nav-item">
        <RouterLink class="nav-link" active-class="active" to="/fishtank/intro"
          >1. Fishtank Intro</RouterLink
        >
      </li>
      <li class="nav-item">
        <a class="nav-link">2. Background: Trees</a>
      </li>
      <li class="nav-item">
        <a class="nav-link">3. Background: Reflection</a>
      </li>
      <li class="nav-item">
        <a class="nav-link">4. Light your tank</a>
      </li>
      <li class="nav-item">
        <a class="nav-link">5. BONUS: Mood lighting</a>
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
