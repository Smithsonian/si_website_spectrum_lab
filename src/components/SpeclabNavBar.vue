<template>
  <BNavbar v-b-color-mode="'dark'" variant="dark" container="xl">
    <BNavbarBrand href="https://smithsonian.github.io/si_website_datalabs/">
      <img src="/src/assets/DataLabsLogo@2x.png" height="44" width="196" />
    </BNavbarBrand>
    <BNavbarNav>
      <BNavText>
        <span class="vr bg-light text-light ms-5 me-3 h-100 align-top"></span>
        <RouterLink to="/">
          <img
            class="d-inline-block align-top"
            src="/src/assets/SpecLabLogo@2x.png"
            height="36"
            width="230"
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
