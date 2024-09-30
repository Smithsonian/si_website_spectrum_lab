<template>
  <h1>Hi routing!</h1>
  <p>Current path: {{ $route.fullPath }}</p>
  <main>
    <RouterView />
  </main>
</template>
