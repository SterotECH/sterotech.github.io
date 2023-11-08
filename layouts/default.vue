<template>
  <div class="relative">
    <LazyNuxtImg
      alt="background"
      fetchpriority="high"
      width="1572"
      height="795"
      decoding="async"
      data-nimg="1"
      class="absolute -top-28 -z-10"
      src="/images/bg-grid-lighter.svg"
      style="color: transparent"
    />
    <LayoutNavBar />
    <NuxtPage />
    <LayoutFooter />
  </div>
</template>
