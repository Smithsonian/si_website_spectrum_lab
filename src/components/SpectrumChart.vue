<template>
  <div class="spectrum-canvas">
    <div class="d-flex">
      <div class="left-axis-label">
        More Light
        <span class="mt-1">
          <FontAwesomeIcon :icon="['fas', 'arrow-up']" transform="rotate-180"
        /></span>
      </div>
      <SpectrumCursorOverlay>
        <SpectrumRainbow />
        <div class="d-flex">
          <LeftAxis />
          <SpectrumData />
        </div>
        <BottomAxis />
        <div class="text-center">Wavelength (Microns)</div>
      </SpectrumCursorOverlay>
    </div>
  </div>
</template>

<style>
.left-axis-label {
  margin: 60px 0 0 0;
  writing-mode: vertical-rl;
  text-align: center;
  transform: rotate(180deg);
  height: 150px;
}
.spectrum-canvas {
  width: 670px;
}
</style>
