<template>
  <div class="flex min-h-screen flex-col">
    <LandingHeader />
    <main id="main" class="flex-1">
      <slot />
    </main>
    <LandingFooter />
  </div>
</template>
