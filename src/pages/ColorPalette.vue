<template>
  <div class="bg-gen-white text-dark py-5">
    <BContainer>
      <h1 class="mb-5">Color palette</h1>
      <ColorPaletteRow title="General colors">
        <ColorCircle
          color="#ffffff"
          display-name="Smithsonian white"
          variable-name="gen-white"
        />
        <ColorCircle
          color="#000000"
          display-name="General black"
          variable-name="gen-black"
        />
        <ColorCircle
          color="#ffcd00"
          display-name="Smithsonian gold"
          variable-name="gen-gold"
        />
        <ColorCircle
          color="#a8a8b4"
          display-name="General grey"
          variable-name="gen-grey"
        />
      </ColorPaletteRow>
      <ColorPaletteRow title="Data Labs colors">
        <ColorCircle
          color="#3a3b75"
          display-name="Data Labs bright purple"
          variable-name="dl-bright-purple"
        />
        <ColorCircle
          color="#291a56"
          display-name="Data Labs dark purple"
          variable-name="dl-dark-purple"
        />
        <ColorCircle
          color="#d8f354"
          display-name="Data Labs chartreuse"
          variable-name="dl-chartreuse"
        />
      </ColorPaletteRow>
      <ColorPaletteRow title="Speclab colors">
        <ColorCircle
          color="#3a678a"
          display-name="Speclab slate blue"
          variable-name="sl-slate-blue"
        />
        <ColorCircle
          color="#00456c"
          display-name="Speclab royal blue"
          variable-name="sl-royal-blue"
        />
        <ColorCircle
          color="#153353"
          display-name="Speclab navy blue"
          variable-name="sl-navy"
        />
        <ColorCircle
          color="#3ad4ed"
          display-name="Speclab light blue"
          variable-name="sl-light-blue"
        />
        <ColorCircle
          color="#8ce7ff"
          display-name="Speclab lighter blue"
          variable-name="sl-lighter-blue"
        />
      </ColorPaletteRow>
      <ColorPaletteRow title="Speclab resources colors">
        <ColorCircle
          color="#774e2b"
          display-name="Speclab resources light brown"
          variable-name="slr-light-brown"
        />
        <ColorCircle
          color="#422a16"
          display-name="Speclab resources dark brown"
          variable-name="slr-dark-brown"
        />
        <ColorCircle
          color="#5c5c64"
          display-name="Speclab resources dark grey"
          variable-name="slr-dark-grey"
        />
        <ColorCircle
          color="#edecf2"
          display-name="Speclab resources light grey"
          variable-name="slr-light-grey"
        />
        <ColorCircle
          color="#ccccd4"
          display-name="Speclab resources medium grey"
          variable-name="slr-med-grey"
        />
      </ColorPaletteRow>
      <ColorPaletteRow title="DIY planet search colors">
        <ColorCircle
          color="#594a40"
          display-name="DIY brown"
          variable-name="diy-brown"
        />
        <ColorCircle
          color="#36679c"
          display-name="DIY blue"
          variable-name="diy-blue"
        />
        <ColorCircle
          color="#c02325"
          display-name="DIY red"
          variable-name="diy-red"
        />
      </ColorPaletteRow>
    </BContainer>
  </div>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';

useSpecLabHead('Color palette');
</script>
