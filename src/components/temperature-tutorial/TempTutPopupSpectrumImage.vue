<template>
  <TutorialPopup width="500px">
    <p>
      This bar represents the <strong>spectrum image</strong>—what you see
      through a spectroscope when a light source is split by a diffraction
      grating into its component wavelengths (or colors, or energies).
    </p>
    <LeftRightGroup>
      <template #right>
        <NextPrevButton direction="next" light />
      </template>
    </LeftRightGroup>
  </TutorialPopup>
</template>
