<template>
  <div class="bg-sl-dark-purple">
    <BContainer>
      <BNav>
        <BNavItem link-class="page-nav-link">1. Color</BNavItem>
        <BNavItem link-class="page-nav-link">2. Spectra</BNavItem>
        <BNavItem link-class="page-nav-link" to="/module3"
          >3. Temperature</BNavItem
        >
        <BNavItem link-class="page-nav-link">4. Composition</BNavItem>
        <BNavItem link-class="page-nav-link" to="/fishtank">Fishtank</BNavItem>
        <BNavItem link-class="page-nav-link" to="/museum">Art Conservation</BNavItem>
        <BNavItem link-class="page-nav-link" to="/playground"
          >Playground</BNavItem
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
