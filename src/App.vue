<template>
  <div class="top-banner">
    <h1>Spectrum Lab</h1>
    <p class="m-0">Exploring the world of color</p>
  </div>
  <BNav class="bg-dark justify-content-center">
    <BNavItem link-class="app-nav-link" href="session2.html"
      >Session 2</BNavItem
    >
    <BNavItem link-class="app-nav-link" href="session3.html"
      >Session 3</BNavItem
    >
    <BNavItem link-class="app-nav-link" href="session4.html"
      >Session 4</BNavItem
    >
    <BNavItem link-class="app-nav-link" href="fishtank.html"
      >Fish Tank</BNavItem
    >
    <BNavItem link-class="app-nav-link" href="exoplanets.html"
      >Exoplanets</BNavItem
    >
    <BNavItem link-class="app-nav-link" href="playground.html"
      >Playground</BNavItem
    >
    <BNavItem link-class="app-nav-link" to="/">Vue Playground</BNavItem>
    <BNavItem link-class="app-nav-link" to="/session2vue"
      >Vue Session 2</BNavItem
    >
  </BNav>
  <main>
    <RouterView />
  </main>
</template>

<style>
.top-banner {
  text-align: center;
  background: url(/includes/AI_common/images/rainbow-line-art_H210.png) center
    left no-repeat;
}
.nav-link.app-nav-link {
  color: #999;
  transition: ease-in-out color 0.15s;
}
.nav-link.app-nav-link:hover {
  color: #fff;
}
.nav-link.router-link-active,
.nav-link.router-link-active:hover,
.nav-link.router-link-active:focus {
  color: #479ff8;
}
</style>
