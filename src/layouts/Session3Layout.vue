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
      <li class="nav-item"><a class="nav-link">Challenge 1: Discussion</a></li>
      <li class="nav-item"><a class="nav-link">Challenge 2: Sun</a></li>
      <li class="nav-item"><a class="nav-link">Challenge 2: M star</a></li>
      <li class="nav-item"><a class="nav-link">Challenge 2: B star</a></li>
      <li class="nav-item"><a class="nav-link">Challenge 2: Discussion</a></li>
      <li class="nav-item">
        <a class="nav-link">Challenge 2: Sun temperature</a>
      </li>
      <li class="nav-item">
        <a class="nav-link">Challenge 2: M star temperature</a>
      </li>
      <li class="nav-item">
        <a class="nav-link">Challenge 2: B star temperature</a>
      </li>
      <li class="nav-item">
        <a class="nav-link">Challenge 3: Incandescent</a>
      </li>
      <li class="nav-item"><a class="nav-link">Challenge 4: Earth</a></li>
      <li class="nav-item"><a class="nav-link">Conclusion</a></li>
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
