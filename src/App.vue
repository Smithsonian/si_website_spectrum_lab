<script setup lang="ts">
import { BContainer } from 'bootstrap-vue-next';
</script>

<template>
  <div class="top-banner">
    <h1>Spectrum Lab</h1>
    <p class="m-0">Exploring the world of color</p>
  </div>
  <BNav class="bg-dark justify-content-center">
    <BNavItem link-class="app-nav-link" to="/session3">Session 3</BNavItem>
    <BNavItem link-class="app-nav-link" to="/playground">Playground</BNavItem>
  </BNav>
  <BContainer tag="main">
    <RouterView />
  </BContainer>
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
