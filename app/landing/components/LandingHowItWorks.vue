<script setup lang="ts">
import { howItWorks } from '../content/howItWorks'
</script>

<template>
  <section id="como-funciona" class="bg-surface">
    <div class="mx-auto flex max-w-[1280px] flex-col items-center gap-20 px-5 py-24 sm:px-10">
      <div v-reveal class="flex max-w-[640px] flex-col items-center gap-4 text-center">
        <h2 class="text-[32px] font-bold leading-[1.15] tracking-[-0.02em] text-ink md:text-4xl">
          ¿Cómo funciona?
        </h2>
        <p class="max-w-[520px] text-lg leading-relaxed text-muted">
          Encuentra la oportunidad perfecta para ti en tres pasos.
        </p>
      </div>

      <div class="flex w-full flex-col gap-24">
        <div v-for="(step, index) in howItWorks" :key="step.title" v-reveal
          class="relative grid gap-6 md:grid-cols-2 md:items-center md:gap-16">
          <!-- Decorative compiler: only for steps 1 and 3 to avoid zigzag monotony -->
          <div v-if="index % 2 === 0"
            class="pointer-events-none absolute left-0 -top-20 hidden text-[180px] font-bold leading-none tracking-[-0.04em] text-primary/10 md:block"
            aria-hidden="true">
            {{ String(index + 1).padStart(2, '0') }}
          </div>

          <!-- Step 2 is centered full-width, not a zigzag row -->
          <div v-if="index === 1"
            class="relative col-span-1 flex flex-col items-center gap-4 text-center md:col-span-2 md:mx-auto md:max-w-xl">
            <div class="flex h-20 w-20 items-center justify-center rounded-2xl bg-periwinkle/70">
              <UIcon :name="step.icon" class="h-8 w-8 text-primary" />
            </div>
            <h3 class="text-2xl font-bold tracking-[-0.01em] text-ink">
              {{ step.title }}
            </h3>
            <p class="max-w-[440px] text-base leading-relaxed text-muted">
              {{ step.description }}
            </p>
          </div>

          <!-- Steps 1 and 3: content right, decorative numeral left -->
          <div v-else class="relative z-10 flex flex-col items-start gap-4 text-left md:col-start-2">
            <div class="flex h-20 w-20 items-center justify-center rounded-2xl bg-periwinkle/70">
              <UIcon :name="step.icon" class="h-8 w-8 text-primary" />
            </div>
            <h3 class="text-2xl font-bold tracking-[-0.01em] text-ink">
              {{ step.title }}
            </h3>
            <p class="max-w-[440px] text-base leading-relaxed text-muted">
              {{ step.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
