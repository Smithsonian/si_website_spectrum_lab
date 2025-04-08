<template>
  <li class="nav-item section-nav-item">
    <RouterLink class="section-nav-link nav-link" :to="to">
      <slot></slot>
    </RouterLink>
  </li>
</template>

<script setup lang="ts">
defineProps<{ to: string }>();
</script>

<style>
.section-nav-link {
  color: var(--sl-navy);
}

.section-nav-item:not(:last-child) {
  border-bottom: 1px solid var(--sl-slate-blue);
}

.nav-pills .section-nav-link.nav-link.router-link-active {
  color: var(--gen-white);
  background-color: var(--sl-royal-blue);
}

.nav-pills .section-nav-link.nav-link.router-link-active:hover,
.section-nav-link.nav-link.router-link-active:focus {
  color: var(--gen-grey);
}
</style>
