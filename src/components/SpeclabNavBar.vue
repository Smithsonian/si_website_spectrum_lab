<template>
  <BNavbar v-b-color-mode="'dark'" variant="dark" container="xl" tag="header">
    <BNavbarBrand
      href="https://smithsonian.github.io/si_website_datalabs/"
      aria-label="Data Labs home page"
    >
      <img
        src="/src/assets/DataLabsLogo@2x.png"
        height="44"
        width="196"
        alt="Smithsonian Data Labs logo"
      />
    </BNavbarBrand>
    <BNavbarNav>
      <BNavText>
        <span class="vr bg-light text-light ms-5 me-3 h-100 align-top"></span>
        <RouterLink to="/" aria-label="Spectrum Lab home page">
          <img
            class="d-inline-block align-top"
            src="/src/assets/SpecLabLogo@2x.png"
            height="36"
            width="230"
            alt="Spectrum Lab logo"
          />
        </RouterLink>
      </BNavText>
    </BNavbarNav>
    <BNavbarNav class="ms-auto">
      <BNavItem
        href="https://smithsonian.github.io/si_website_speclab_teacher_resources/"
        variant="light"
        opacity-hover="75"
        class="text-uppercase"
      >
        Teacher Resources
      </BNavItem>
    </BNavbarNav>
  </BNavbar>
</template>
