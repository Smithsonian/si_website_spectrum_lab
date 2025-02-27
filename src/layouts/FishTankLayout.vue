<template>
  <ChallengeToolLayout>
    <template #challenge-col>
      <BRow>
        <BCol cols="3">
          <nav>
            <ul class="nav nav-pills flex-column mt-3">
              <li class="nav-item">
                <RouterLink
                  class="section-nav-link nav-link"
                  to="/fishtank/intro"
                  >1. Fishtank Intro</RouterLink
                >
              </li>
              <li class="nav-item">
                <RouterLink
                  class="section-nav-link nav-link"
                  to="/fishtank/background-trees"
                  >2. Background Part I</RouterLink
                >
              </li>
              <li class="nav-item">
                <RouterLink
                  class="section-nav-link nav-link"
                  to="/fishtank/background-comparison"
                  >3. Background Part IIa</RouterLink
                >
              </li>
              <li class="nav-item">
                <RouterLink
                  class="section-nav-link nav-link"
                  to="/fishtank/background-reveal"
                  >4. Background Part IIb</RouterLink
                >
              </li>
              <li class="nav-item">
                <RouterLink
                  class="section-nav-link nav-link"
                  to="/fishtank/light-your-tank"
                  >5. Light Your Tank</RouterLink
                >
              </li>
              <li class="nav-item">
                <RouterLink
                  class="section-nav-link nav-link"
                  to="/fishtank/mood-lighting"
                  >6. Bonus: Mood Lighting</RouterLink
                >
              </li>
            </ul>
          </nav>
        </BCol>
        <BCol>
          <slot name="challenge-tab"></slot>
        </BCol>
      </BRow>
    </template>
    <template #tool-col>
      <slot name="tool-col"></slot>
    </template>
  </ChallengeToolLayout>
</template>
