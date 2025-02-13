<template>
  <div class="bg-sl-dark-purple">
    <BContainer>
      <BNav>
        <BNavItem link-class="page-nav-link" to="/module3"
          >1. Module 3</BNavItem
        >
        <BNavItem link-class="page-nav-link" to="/playground"
          >2. Playground</BNavItem
        >
      </BNav>
    </BContainer>
  </div>
</template>

<style>
.page-nav-link {
  color: var(--slr-light-grey);
}

.page-nav-link.nav-link.router-link-active {
  color: var(--sl-navy);
  background-color: var(--sl-light-blue);
}
.page-nav-link.nav-link.router-link-active:hover,
.page-nav-link.nav-link.router-link-active:focus {
  color: var(--gen-black);
}
</style>
