<template>
  <li class="nav-item final-projects-nav-item">
    <RouterLink class="final-projects-nav-link nav-link" :to="to">
      <div class="d-flex justify-content-between">
        <div>
          <slot></slot>
        </div>
        <div>
          <FontAwesomeIcon
            class="final-projects-nav-link-closed"
            :icon="['fas', 'chevron-down']"
          />
          <FontAwesomeIcon
            class="final-projects-nav-link-open"
            :icon="['fas', 'chevron-up']"
          />
        </div>
      </div>
    </RouterLink>
  </li>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

defineProps<{ to: string }>();
</script>

<style>
.final-projects-nav-link {
  color: var(--sl-navy);
  text-transform: uppercase;
  font-weight: 600;
}

.final-projects-nav-item {
  background-color: var(--sl-med-blue);
}

.final-projects-nav-item:not(:last-child) {
  border-bottom: 1px solid var(--sl-slate-blue);
}

.final-projects-nav-link-open {
  display: none;
}

.nav-pills .final-projects-nav-link.nav-link.router-link-active {
  color: var(--sl-navy);
}

.nav-pills .final-projects-nav-link.nav-link:hover,
.nav-pills .final-projects-nav-link.nav-link:focus {
  color: var(--sl-navy);
  outline: 1px solid var(--sl-slate-blue);
  outline-offset: 0;
  box-shadow: none;
}

.router-link-active .final-projects-nav-link-open {
  display: inline;
}

.router-link-active .final-projects-nav-link-closed {
  display: none;
}
</style>
