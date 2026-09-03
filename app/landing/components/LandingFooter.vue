<script setup lang="ts">
import { ref } from 'vue'
import {
  footerColumns,
  footerCopyright,
  footerDescription
} from '../content/navigation'
import { validateEmail } from '../utils/validateEmail'

const email = ref('')
const error = ref(false)
const subscribed = ref(false)

function handleSubscribe() {
  error.value = false
  if (validateEmail(email.value)) {
    subscribed.value = true
    email.value = ''
  } else {
    error.value = true
  }
}
</script>

<template>
  <footer class="border-t border-line bg-tint">
    <div class="mx-auto flex max-w-[1280px] flex-col gap-12 px-5 py-16 sm:px-10">
      <div class="grid gap-12 lg:grid-cols-[2fr_1fr_1fr]">
        <div class="flex max-w-[576px] flex-col gap-4">
          <a href="#inicio" class="text-2xl font-bold text-primary">
            UniteCorp
          </a>
          <p class="max-w-[448px] text-base leading-relaxed text-muted">
            {{ footerDescription }}
          </p>

          <form class="flex max-w-[448px] flex-col gap-2 pt-2" @submit.prevent="handleSubscribe">
            <label for="newsletter-email" class="text-sm font-semibold text-ink">
              Recibe nuevas oportunidades
            </label>
            <div class="flex items-start gap-2">
              <input
                id="newsletter-email"
                v-model="email"
                type="email"
                name="email"
                autocomplete="email"
                placeholder="tu@correo.com"
                class="h-[46px] flex-1 rounded-lg border border-line bg-card px-4 text-base text-ink placeholder:text-muted/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <button
                type="submit"
                class="inline-flex h-[46px] items-center justify-center rounded-lg bg-primary px-5 text-base font-semibold text-white transition-all duration-200 hover:bg-primary-700 active:scale-[0.98]"
              >
                Suscribir
              </button>
            </div>
          </form>

          <p
            v-if="error"
            class="text-sm text-warn"
            role="alert"
          >
            Ingresa un correo electrónico válido.
          </p>
          <p
            v-if="subscribed"
            class="flex items-center gap-2 text-sm font-medium text-success"
            role="status"
          >
            <UIcon name="lucide:check" class="h-4 w-4" />
            ¡Gracias! Te has suscrito correctamente.
          </p>
        </div>

        <nav
          v-for="column in footerColumns"
          :key="column.title"
          :aria-label="column.title"
          class="flex flex-col gap-4"
        >
          <h4 class="text-base font-medium text-ink">
            {{ column.title }}
          </h4>
          <ul class="flex flex-col gap-3">
            <li v-for="link in column.links" :key="link.label">
              <a
                v-if="link.disabled"
                :href="link.href"
                aria-disabled="true"
                title="Próximamente"
                class="cursor-not-allowed text-base leading-6 text-muted/50 opacity-60"
              >
                {{ link.label }}
              </a>
              <a
                v-else
                :href="link.href"
                :target="link.href.startsWith('http') ? '_blank' : undefined"
                :rel="link.href.startsWith('http') ? 'noopener noreferrer' : undefined"
                class="text-base leading-6 text-muted transition-colors hover:text-primary"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div class="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-8">
        <p class="text-base leading-6 text-muted">
          {{ footerCopyright }}
        </p>
        <div class="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/company/unitecorp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            class="text-muted transition-colors hover:text-primary"
          >
            <UIcon name="lucide:linkedin" class="h-5 w-[18px]" />
          </a>
          <a
            href="https://x.com/unitecorp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            class="text-muted transition-colors hover:text-primary"
          >
            <UIcon name="lucide:twitter" class="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
