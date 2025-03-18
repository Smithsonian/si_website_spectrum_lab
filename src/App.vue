<template>
  <div class="bg-sl-navy text-light">
    <SpeclabNavBar />
    <SpeclabPageNav />
    <main>
      <ErrorBoundary>
        <MetadataProvider>
          <RouterView />
        </MetadataProvider>
      </ErrorBoundary>
    </main>
  </div>
  <SpeclabFooter />
</template>

<style>
.top-banner {
  text-align: center;
  background: url(/includes/AI_common/images/rainbow-line-art_H210.png) center
    left no-repeat;
}
.nav-link.app-nav-link {
  color: #999;
  transition: ease-in-out color 0.15s;
}
.nav-link.app-nav-link:hover {
  color: #fff;
}
.nav-link.router-link-active,
.nav-link.router-link-active:hover,
.nav-link.router-link-active:focus {
  color: #479ff8;
}
</style>
