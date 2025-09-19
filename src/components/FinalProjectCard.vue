<template>
  <RouterLink :to="to" class="text-decoration-none rounded-4">
    <BCard
      no-body
      class="final-project-card overflow-hidden mb-3 border-0 rounded-4 bg-sl-med-blue"
    >
      <BRow class="g-0">
        <BCol lg="3">
          <BCardImg
            :src="imgSrc"
            :alt="imgAlt"
            class="final-project-card-img rounded-0"
          />
        </BCol>
        <BCol>
          <BCardBody>
            <BCardTitle class="final-project-card-title text-uppercase">{{
              title
            }}</BCardTitle>
            <slot></slot>
          </BCardBody>
        </BCol>
      </BRow>
    </BCard>
  </RouterLink>
</template>

<script setup lang="ts">
defineProps<{ title: string; to: string; imgSrc: string; imgAlt: string }>();
</script>

<style>
.final-project-card:hover {
  outline: 1px solid var(--sl-royal-blue);
}
.final-project-card-img {
  object-fit: cover;
  height: 100%;
  width: 100%;
}
.final-project-card-title {
  font-size: 18px;
}
</style>
