<template>
  <div class="bg-sl-royal-blue">
    <BContainer>
      <BNav>
        <BNavItem link-class="page-nav-link" to="/color">1. Color</BNavItem>
        <BNavItem link-class="page-nav-link" to="/spectra">2. Spectra</BNavItem>
        <BNavItem link-class="page-nav-link" to="/temperature">
          3. Temperature
        </BNavItem>
        <BNavItem link-class="page-nav-link">4. Composition</BNavItem>
        <BNavItem link-class="page-nav-link" to="/final-projects">
          Final Projects
        </BNavItem>
        <BNavItem link-class="page-nav-link" to="/playground">
          Playground
        </BNavItem>
      </BNav>
    </BContainer>
  </div>
</template>

<style>
.page-nav-link {
  color: var(--slr-light-grey);
}

.page-nav-link.nav-link.router-link-active {
  color: var(--sl-royal-blue);
  background-color: var(--sl-lighter-blue);
}
.page-nav-link.nav-link.router-link-active:hover,
.page-nav-link.nav-link.router-link-active:focus {
  color: var(--gen-black);
}
</style>
