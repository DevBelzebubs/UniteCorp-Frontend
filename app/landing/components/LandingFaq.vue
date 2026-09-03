<script setup lang="ts">
import { faqs } from '../content/faq'
</script>

<template>
  <section id="faq" class="bg-tint">
    <div class="mx-auto flex max-w-[860px] flex-col gap-12 px-5 py-24 sm:px-10">
      <div v-reveal class="flex flex-col gap-4 text-center">
        <h2 class="text-[32px] font-bold leading-[1.15] tracking-[-0.02em] text-ink md:text-4xl">
          Preguntas frecuentes
        </h2>
      </div>

      <div v-reveal class="flex flex-col gap-4">
        <details
          v-for="faq in faqs"
          :key="faq.question"
          class="group rounded-xl border border-line bg-card"
        >
          <summary
            class="flex cursor-pointer list-none items-center justify-between gap-4 p-5 [&::-webkit-details-marker]:hidden"
          >
            <span class="text-base font-semibold text-ink">
              {{ faq.question }}
            </span>
            <UIcon
              name="lucide:chevron-down"
              class="h-5 w-5 shrink-0 text-primary transition-transform duration-200 group-open:rotate-180"
            />
          </summary>
          <p class="px-5 pb-5 text-base leading-relaxed text-muted">
            {{ faq.answer }}
          </p>
        </details>
      </div>

      <div v-reveal class="flex flex-col items-center gap-3 pt-2 text-center">
        <p class="text-base text-muted">
          ¿Tienes otra pregunta?
        </p>
        <a
          href="mailto:hola@unitecorp.com"
          class="inline-flex h-[46px] items-center justify-center rounded-lg border border-line bg-card px-6 text-sm font-semibold text-primary transition-all duration-200 hover:border-primary/40 hover:bg-surface active:translate-y-0 active:scale-[0.98]"
        >
          Contáctanos
        </a>
      </div>
    </div>
  </section>
</template>
