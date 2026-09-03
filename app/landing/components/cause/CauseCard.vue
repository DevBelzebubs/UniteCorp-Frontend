<script setup lang="ts">
import NumberFlow from '@number-flow/vue'
import type { CauseCategoryId, FeaturedCause } from '../content/types'

const props = defineProps<{ cause: FeaturedCause }>()

const categoryStyles: Record<
  CauseCategoryId,
  { chip: string; accent: string }
> = {
  mentorship: {
    chip: 'border-[rgba(0,108,73,0.2)] bg-[rgba(0,108,73,0.1)] text-success',
    accent: 'text-success'
  },
  environment: {
    chip: 'border-[rgba(107,66,0,0.2)] bg-[rgba(107,66,0,0.1)] text-warn',
    accent: 'text-warn'
  },
  digital: {
    chip: 'border-[rgba(0,40,142,0.2)] bg-[rgba(0,40,142,0.1)] text-primary',
    accent: 'text-primary'
  },
  health: {
    chip: 'border-[rgba(0,40,142,0.2)] bg-[rgba(0,40,142,0.1)] text-primary',
    accent: 'text-primary'
  }
}
</script>

<template>
  <article
    class="group flex flex-col overflow-hidden rounded-xl border border-line bg-card shadow-[0px_1px_2px_rgba(0,0,0,0.05)] transition-transform duration-300 hover:-translate-y-1"
  >
    <div class="relative h-[192px] w-full overflow-hidden">
      <img
        :src="props.cause.image"
        :alt="props.cause.title"
        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <span
        class="absolute left-4 top-4 rounded-full border px-3 py-1 text-xs font-medium backdrop-blur-[2px]"
        :class="categoryStyles[props.cause.category.id].chip"
      >
        {{ props.cause.category.label }}
      </span>
    </div>

    <div class="flex flex-1 flex-col justify-between gap-6 p-6">
      <div>
        <div class="flex items-center gap-2 pb-2">
          <UIcon name="lucide:map-pin" class="h-[13px] w-[11px] text-muted" />
          <span class="text-xs font-medium leading-4 text-muted">
            {{ props.cause.location }}
          </span>
        </div>

        <h3 class="pb-2 text-2xl font-bold tracking-[-0.01em] text-ink">
          {{ props.cause.title }}
        </h3>

        <p class="text-base leading-relaxed text-muted">
          {{ props.cause.description }}
        </p>
      </div>

      <div class="flex flex-col gap-3">
        <div class="flex items-center justify-between">
          <span class="text-xs font-medium leading-4 text-muted">
            <NumberFlow
              :value="props.cause.volunteers"
              :format="{ useGrouping: true }"
              aria-hidden="true"
            />
            de {{ props.cause.volunteersGoal }} voluntarios
          </span>
          <span
            class="text-xs font-semibold leading-4"
            :class="categoryStyles[props.cause.category.id].accent"
          >
            {{ props.cause.progress }}%
          </span>
        </div>

        <div class="flex items-center justify-between pt-1">
          <div class="flex items-center gap-1">
            <UIcon name="lucide:users" class="h-[11px] w-[15px] text-muted" />
            <span class="text-xs font-medium leading-4 text-muted">
              Meta: {{ props.cause.volunteersGoal }}
            </span>
          </div>
          <a
            href="#causas"
            class="text-sm font-bold tracking-[0.01em] text-primary transition-colors hover:text-primary-600"
          >
            Quiero sumarme
          </a>
        </div>
      </div>
    </div>
  </article>
</template>
