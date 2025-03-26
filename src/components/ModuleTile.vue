<template>
  <BCol>
    <RouterLink :to="to" class="text-decoration-none text-light">
      <BRow
        class="p-3 rounded-4 h-100 module-tile"
        :class="{
          'module-tile-dark': !lighter,
          'module-tile-lighter': lighter,
        }"
      >
        <BCol cols="2">
          <img :src="iconPath" :alt="iconAlt" class="module-tile-icon" />
        </BCol>
        <BCol>
          <div class="text-uppercase fs-5 fw-bold color-sl-light-blue">
            {{ title }}
          </div>
          <p>
            <slot></slot>
          </p>
        </BCol>
      </BRow>
    </RouterLink>
  </BCol>
</template>

<script setup lang="ts">
defineProps<{
  iconPath: string;
  iconAlt: string;
  title: string;
  to: string;
  lighter?: boolean;
}>();
</script>

<style>
.module-tile-icon {
  height: 80px;
}

path.cls-1 {
  fill: var(--gen-grey);
}

.module-tile-dark {
  background-color: var(--sl-dark-purple);
}

.module-tile-lighter {
  background-color: var(--sl-navy);
}

.module-tile-dark:hover {
  background-color: #143c66;
}

.module-tile-lighter:hover {
  background-color: hwb(202 0% 53%);
}
</style>
