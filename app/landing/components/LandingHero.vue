<script setup lang="ts">
const photos = [
  {
    src: 'https://picsum.photos/seed/unitecorp-voluntariado/800/1000',
    alt: 'Voluntarios corporativos colaborando en una actividad'
  },
  {
    src: 'https://picsum.photos/seed/unitecorp-equipo/480/600',
    alt: 'Equipo de voluntarios conversando durante la jornada'
  },
  {
    src: 'https://picsum.photos/seed/unitecorp-comunidad/480/600',
    alt: 'Comunidad reuniéndose alrededor de una iniciativa solidaria'
  }
]
</script>

<template>
  <section id="inicio" class="relative isolate flex min-h-[85dvh] items-center overflow-hidden bg-hero">
    <div class="pointer-events-none absolute inset-0 -z-10"
      style="background: linear-gradient(90deg, color-mix(in srgb, var(--color-surface) 92%, transparent) 0%, color-mix(in srgb, var(--color-surface) 55%, transparent) 45%, color-mix(in srgb, var(--color-surface) 20%, transparent) 100%)" />
    <div
      class="mx-auto grid w-full max-w-[1280px] items-center gap-12 px-5 pb-16 pt-24 sm:px-10 lg:grid-cols-[3fr_2fr]">
      <div class="flex max-w-[640px] flex-col items-start gap-6">
        <p v-reveal class="text-[13px] font-semibold uppercase leading-4 tracking-[0.18em] text-primary">
          Voluntariado corporativo
        </p>

        <h1 v-reveal:100
          class="text-4xl font-bold leading-[1.05] tracking-[-0.02em] text-ink md:text-5xl lg:text-[54px]">
          Tu talento genera un impacto real
        </h1>

        <p v-reveal:200 class="max-w-[520px] text-lg leading-[1.6] text-muted">
          Conecta con oportunidades de voluntariado que aprovechan tus habilidades y
          desarrollan las de tu equipo.
        </p>

        <div v-reveal:300 class="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
          <a href="#causas"
            class="inline-flex h-[54px] items-center justify-center rounded-lg bg-primary px-7 text-base font-semibold text-white transition-all duration-200 hover:-translate-y-[1px] hover:bg-primary-700 active:translate-y-0 active:scale-[0.98]">
            Explorar causas
          </a>
          <a href="#como-funciona"
            class="inline-flex h-[54px] items-center justify-center rounded-lg border-2 border-primary/25 bg-surface/60 px-7 text-base font-semibold text-primary transition-all duration-200 hover:border-primary/40 hover:bg-surface active:translate-y-0 active:scale-[0.98]">
            Cómo funciona
          </a>
        </div>
      </div>

      <div v-reveal:200 class="relative mx-auto w-full max-w-md lg:max-w-none">
        <div class="relative aspect-[4/5] w-full">
          <div
            class="absolute inset-0 overflow-hidden rounded-2xl border border-line shadow-[0_24px_70px_-24px_rgba(0,0,0,0.4)]">
            <img :src="photos[0].src" :alt="photos[0].alt"
              class="motion-safe-scale h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
              loading="eager" fetchpriority="high" />
          </div>

          <div
            class="absolute -right-4 -top-6 hidden w-[46%] -rotate-2 overflow-hidden rounded-xl border border-line shadow-[0_18px_50px_-18px_rgba(0,0,0,0.4)] sm:block">
            <img :src="photos[1].src" :alt="photos[1].alt" class="aspect-[3/4] w-full object-cover" loading="lazy" />
          </div>

          <div
            class="absolute -bottom-8 -left-6 hidden w-[42%] rotate-2 overflow-hidden rounded-xl border border-line shadow-[0_18px_50px_-18px_rgba(0,0,0,0.4)] sm:block">
            <img :src="photos[2].src" :alt="photos[2].alt" class="aspect-[3/4] w-full object-cover" loading="lazy" />
          </div>

          <div
            class="absolute -bottom-5 right-4 flex items-center gap-2 rounded-lg border border-line bg-card px-4 py-3 shadow-[0_12px_30px_-12px_rgba(0,0,0,0.35)]">
            <UIcon name="lucide:users" class="h-4 w-4 text-primary" />
            <span class="text-sm font-bold leading-none text-ink">
              +1.500 voluntarios
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
