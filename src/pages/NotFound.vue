<template>
  <ChallengeToolLayout>
    <template #challenge-col>
      <h1>Page not found</h1>
      <p>
        Try going <BLink variant="secondary" @click="goBack">back</BLink>, or
        returning to the <BLink variant="secondary" to="/">home page</BLink>.
      </p>
      <p>
        If the problem persists, contact us at
        <BLink
          variant="secondary"
          href="mailto:microobservatory@cfa.harvard.edu"
        >
          microobservatory@cfa.harvard.edu</BLink
        >.
      </p>
      <p>
        Include the missing path in your email:
        <code>{{ route.path }}</code>
      </p>
    </template>
  </ChallengeToolLayout>
</template>

<script setup lang="ts">
import { useSpecLabHead } from '@/utils/locationUtils';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();

useSpecLabHead(`Not found: ${route.path}`);

const router = useRouter();

const goBack = () => {
  router.back();
};
</script>
