<script setup lang="ts">
import { computed, ref } from 'vue'
import type { CauseCategory } from '../content/types'
import { featuredCauses } from '../content/featuredCauses'

type FilterId = 'all' | CauseCategory['id']

const selected = ref<FilterId>('all')

const filters: { id: FilterId; label: string }[] = [
  { id: 'all', label: 'Todos' },
  ...featuredCauses
    .map((cause) => cause.category)
    .filter(
      (category, index, self) =>
        self.findIndex((item) => item.id === category.id) === index
    )
    .map((category) => ({ id: category.id as FilterId, label: category.label }))
]

const causes = computed(() => {
  if (selected.value === 'all') {
    return featuredCauses
  }
  return featuredCauses.filter((cause) => cause.category.id === selected.value)
})
</script>

<template>
  <section id="causas" class="bg-tint">
    <div class="mx-auto flex max-w-[1280px] flex-col gap-10 px-5 py-20 sm:px-10">
      <div class="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div class="flex flex-col gap-2">
          <h2 class="text-[32px] font-bold leading-10 tracking-[-0.32px] text-ink">
            Causas destacadas
          </h2>
          <p class="text-base leading-6 text-muted">
            Descubre las oportunidades de voluntariado más populares esta semana.
          </p>
        </div>

        <div class="flex flex-wrap items-center gap-2" role="tablist" aria-label="Filtrar causas">
          <button
            v-for="filter in filters"
            :key="filter.id"
            type="button"
            role="tab"
            :aria-selected="selected === filter.id"
            class="rounded-full px-4 py-2 text-sm font-semibold tracking-[0.14px] transition-colors"
            :class="
              selected === filter.id
                ? 'bg-primary text-white'
                : 'border border-line bg-surface text-muted hover:border-primary/40'
            "
            @click="selected = filter.id"
          >
            {{ filter.label }}
          </button>
        </div>
      </div>

      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <CauseCard
          v-for="(cause, index) in causes"
          :key="cause.id"
          :cause="cause"
          v-reveal="{ delay: index * 100, y: 32 }"
        />
      </div>

      <div class="flex justify-center pt-2">
        <a
          href="#causas"
          class="inline-flex h-[46px] items-center justify-center rounded-xl border border-line bg-surface px-6 text-sm font-semibold tracking-[0.14px] text-primary transition-colors hover:border-primary/40"
        >
          Ver todas las causas
        </a>
      </div>
    </div>
  </section>
</template>
