<template>
  <div class="text-center top-banner">
    <h1>Spectrum Lab</h1>
    <p>Exploring the world of color</p>
  </div>
  <BNav>
    <BNavItem href="/session2.html">Session 2</BNavItem>
    <BNavItem href="/session3.html">Session 3</BNavItem>
    <BNavItem href="/session4.html">Session 4</BNavItem>
    <BNavItem href="/fishtank.html">Fish Tank</BNavItem>
    <BNavItem href="/exoplanets.html">Exoplanets</BNavItem>
    <BNavItem href="/playground.html">Playground</BNavItem>
    <BNavItem to="/">Vue Playground</BNavItem>
    <BNavItem to="/session2vue">Vue Session 2</BNavItem>
  </BNav>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
.top-banner {
  background: url(/includes/AI_common/images/rainbow-line-art_H210.png) center
    left no-repeat;
}
</style>
