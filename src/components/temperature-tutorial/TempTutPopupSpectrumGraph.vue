<template>
  <TutorialPopup width="500px">
    <p>
      This is the <strong>spectrum graph</strong>, which is a plot of the
      spectrum. It shows how much light the source emits or reflects at a given
      wavelength (or color, or energy). The spectrum is taken at one moment in
      time.
    </p>
    <LeftRightGroup>
      <template #left>
        <NextPrevButton direction="prev" light />
      </template>
      <template #right>
        <NextPrevButton direction="next" light />
      </template>
    </LeftRightGroup>
  </TutorialPopup>
</template>
