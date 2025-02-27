<script setup lang="ts">
import SpeclabNavBar from './components/SpeclabNavBar.vue';
import SpeclabPageNav from './components/SpeclabPageNav.vue';
import { useAllMetadata } from './utils/metadataUtils';

// Initialize it here so everyone can use the saved one
useAllMetadata();
</script>

<template>
  <div class="bg-sl-lighter-blue pb-3">
    <SpeclabNavBar />
    <SpeclabPageNav />
    <main>
      <RouterView />
    </main>
  </div>
  <SpeclabFooter />
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
