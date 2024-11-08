<template>
  <nav>
    <ul class="nav nav-pills mt-3">
      <li class="nav-item">
        <RouterLink class="nav-link" active-class="active" to="/session3/intro"
          >Intro</RouterLink
        >
      </li>
      <li class="nav-item">
        <RouterLink
          class="nav-link"
          active-class="active"
          to="/session3/tutorial"
          >Tutorial</RouterLink
        >
      </li>
      <li class="nav-item">
        <RouterLink
          class="nav-link"
          active-class="active"
          to="/session3/challenge1"
          >Challenge 1</RouterLink
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
