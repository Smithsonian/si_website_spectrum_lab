<template>
  <footer class="bg-dark text-light pt-3">
    <BContainer>
      <BRow>
        <BCol cols="8">
          <p>
            <small>
              Smithsonian DataLabs is supported by the Smithsonian Institution’s
              Together We Thrive initiative and funded in part by the Jeff Bezos
              gift to the National Air and Space Museum.
            </small>
          </p>
          <p>
            <BLink href="https://www.si.edu/termsofuse">
              Smithsonian Terms of Use
            </BLink>
          </p>
          <p>
            <RouterLink to="/attributions">Attributions</RouterLink>
          </p>
          <p>
            <RouterLink to="/color-palette">Color palette</RouterLink>
          </p>
          <p>
            <RouterLink to="/icon-test">Icon test</RouterLink>
          </p>
        </BCol>
        <BCol>
          <img
            src="/src/assets/CfALogo@2x.png"
            width="100%"
            alt="Center for Astrophysics: Harvard & Smithsonian logo"
          />
        </BCol>
      </BRow>
    </BContainer>
  </footer>
</template>
