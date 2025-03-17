<template>
  <div v-if="isErrored">
    <BContainer>
      <BAlert variant="danger" :model-value="true" class="mt-3">
        <p>
          Spectrum Lab encountered one or more errors. Please refresh the page,
          and contact diyadmin@cfa.harvard.edu if the problem persists.
        </p>
      </BAlert>
      <div v-for="(errorLog, index) in errors" :key="index">
        <BAlert variant="danger" :model-value="true" class="mt-3">
          <p>Error code: {{ errorLog.errorCode }}</p>
          <div v-if="devMode">
            <p>Component name: {{ errorLog.componentName }}</p>
            <p>Error object: {{ errorLog.errorObjectString }}</p>
          </div>
        </BAlert>
      </div>
    </BContainer>
  </div>
  <div v-else>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { BAlert } from 'bootstrap-vue-next';
import { onErrorCaptured, ref } from 'vue';

interface ErrorLog {
  errorObjectString: string;
  componentName: string | null;
  errorCode: string;
}

const isErrored = ref(false);
const errors = ref<ErrorLog[]>([]);
const devMode = import.meta.env.MODE === 'development';

onErrorCaptured((error, instance, info) => {
  isErrored.value = true;
  const name = (instance && instance.$.type.__name) || null;
  const errorLog = {
    errorObjectString: `${error}`,
    componentName: name,
    errorCode: info,
  };
  errors.value.push(errorLog);
  console.error(`Error code: ${errorLog.errorCode}`);
  if (devMode) {
    console.error(`Component name: ${errorLog.componentName}`);
    console.error(error);
  }
  return false;
});
</script>
