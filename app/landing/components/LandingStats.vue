<script setup lang="ts">
import NumberFlow from '@number-flow/vue'
import { onMounted, ref } from 'vue'
import { partnersLabel, stats } from '../content/stats'
import { partners } from '../content/partners'

const animatedValues = ref(stats.map(() => 0))
let started = false

onMounted(() => {
  const reduce =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduce) {
    animatedValues.value = stats.map((stat) => stat.value)
    return
  }
  const el = document.getElementById('impacto')
  if (!el) return
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !started) {
          started = true
          animatedValues.value = stats.map((stat) => stat.value)
          observer.disconnect()
        }
      })
    },
    { threshold: 0.4 }
  )
  observer.observe(el)
})

function initials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
}
</script>

<template>
  <section id="impacto" class="relative overflow-hidden bg-primary">
    <div
      class="pointer-events-none absolute inset-0 -z-10 opacity-20"
      style="background: radial-gradient(60% 60% at 20% 20%, rgba(184,196,255,0.35), transparent 70%), radial-gradient(50% 50% at 85% 80%, rgba(0,18,61,0.5), transparent 70%)"
    />
    <div class="mx-auto flex max-w-[1280px] flex-col gap-16 px-5 py-20 sm:px-10">
      <div class="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-8">
        <div
          v-for="(stat, index) in stats"
          :key="stat.label"
          v-reveal:100
          class="flex flex-col items-center gap-3"
        >
          <span
            class="text-6xl font-bold leading-none tracking-[-0.03em] text-white md:text-8xl"
          >
            <NumberFlow
              :value="animatedValues[index]"
              :suffix="stat.suffix"
              :format="{ useGrouping: false }"
              aria-hidden="true"
            />
          </span>
          <span class="text-lg leading-relaxed text-soft">
            {{ stat.label }}
          </span>
        </div>
      </div>

      <div v-reveal class="border-t border-[rgba(221,225,255,0.18)] pt-10">
        <p class="text-center text-xs font-medium uppercase leading-4 tracking-[0.14em] text-soft/80">
          {{ partnersLabel }}
        </p>
        <div class="mt-8 flex flex-wrap items-center justify-center gap-x-14 gap-y-6">
          <div
            v-for="partner in partners"
            :key="partner.id"
            class="flex items-center gap-3 text-white/80"
          >
            <span
              class="flex h-9 w-9 items-center justify-center rounded-lg border border-white/25 bg-white/5 text-sm font-bold text-white"
              aria-hidden="true"
            >
              {{ initials(partner.name) }}
            </span>
            <span class="text-lg font-semibold tracking-[-0.01em]">
              {{ partner.name }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
