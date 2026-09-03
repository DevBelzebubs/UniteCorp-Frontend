<script setup lang="ts">
import { testimonials } from '../content/testimonials'
</script>

<template>
  <section id="testimonios" class="bg-surface">
    <div class="mx-auto flex max-w-[1280px] flex-col gap-16 px-5 py-24 sm:px-10">
      <div v-reveal class="flex max-w-[560px] flex-col gap-4">
        <h2 class="text-[32px] font-bold leading-[1.15] tracking-[-0.02em] text-ink md:text-4xl">
          Testimonios reales
        </h2>
        <p class="text-lg leading-relaxed text-muted">
          Historias de voluntarios que ya generan impacto.
        </p>
      </div>

      <div class="grid gap-8 lg:grid-cols-[2fr_1fr]">
        <figure
          v-for="(testimonial, index) in testimonials"
          :key="testimonial.author"
          v-reveal
          class="relative flex flex-col justify-between gap-8 rounded-2xl border border-line bg-card p-8 shadow-[0px_1px_2px_rgba(0,0,0,0.05)]"
          :class="index === 1 ? 'lg:mt-24' : ''"
        >
          <UIcon
            name="lucide:quote"
            class="absolute right-6 top-6 h-[30px] w-[42px] text-primary/20"
          />

          <blockquote
            class="text-lg leading-[1.6] text-muted"
            :class="index === 0 ? 'md:text-xl md:leading-[1.55]' : ''"
          >
            “{{ testimonial.quote }}”
          </blockquote>

          <figcaption class="flex items-center gap-4">
            <div
              class="flex h-14 w-14 items-center justify-center rounded-full bg-mist text-sm font-semibold text-primary"
              aria-hidden="true"
            >
              {{ testimonial.initials }}
            </div>
            <div>
              <p class="text-sm font-bold tracking-[0.01em] text-ink">
                {{ testimonial.author }}
              </p>
              <p class="text-xs font-medium leading-4 text-muted">
                {{ testimonial.role }}
              </p>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>
