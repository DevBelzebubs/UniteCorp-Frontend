<script setup lang="ts">
import { useTextSize } from '~/hooks/useTextSize'

const colorMode = useColorMode()
const { increase, decrease, size, canIncrease, canDecrease } = useTextSize()

const open = ref(false)
const panelRef = ref<HTMLElement | null>(null)
const triggerRef = ref<HTMLElement | null>(null)

const modeStates = ['system', 'light', 'dark'] as const
type ModeState = (typeof modeStates)[number]

const modeMeta: Record<ModeState, { icon: string; label: string; next: string }> = {
  system: { icon: 'lucide:monitor', label: 'Sistema', next: 'Modo claro' },
  light: { icon: 'lucide:sun', label: 'Claro', next: 'Modo oscuro' },
  dark: { icon: 'lucide:moon', label: 'Oscuro', next: 'Sistema' }
}

const currentMode = computed<ModeState>(() => {
  const pref = colorMode.preference
  if (pref === 'light' || pref === 'dark') return pref
  return 'system'
})

function cycleMode() {
  const next: ModeState =
    currentMode.value === 'system'
      ? 'light'
      : currentMode.value === 'light'
        ? 'dark'
        : 'system'
  colorMode.preference = next
}

function toggle() {
  open.value = !open.value
}

function onClickOutside(e: MouseEvent) {
  const target = e.target as Node
  if (
    open.value &&
    panelRef.value &&
    triggerRef.value &&
    !panelRef.value.contains(target) &&
    !triggerRef.value.contains(target)
  ) {
    open.value = false
  }
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') open.value = false
  if (e.key === 'Tab' && open.value) {
    const node = e.target as HTMLElement
    if (panelRef.value && !panelRef.value.contains(node)) {
      open.value = false
    }
  }
}

onMounted(() => {
  document.addEventListener('click', onClickOutside)
  document.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', onClickOutside)
  document.removeEventListener('keydown', onKeydown)
})

const themeColor = computed(() => (currentMode.value === 'dark' ? '#0a0f1a' : '#00288e'))
useHead({
  meta: [{ name: 'theme-color', content: themeColor }]
})
</script>

<template>
  <div class="fixed bottom-6 right-6 z-50 flex flex-col items-end">
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="translate-y-2 opacity-0"
      leave-active-class="transition duration-150 ease-in"
      leave-to-class="translate-y-2 opacity-0"
    >
      <div
        v-if="open"
        ref="panelRef"
        role="dialog"
        aria-label="Opciones de accesibilidad"
        class="mb-3 w-64 rounded-2xl border border-line bg-surface/95 shadow-xl backdrop-blur-md"
      >
        <div class="p-4">
          <div class="mb-3 flex items-center justify-between">
            <h2 id="accessibility-title" class="text-sm font-bold tracking-[0.01em] text-ink">
              Accesibilidad
            </h2>
            <button
              type="button"
              aria-label="Cerrar panel de accesibilidad"
              class="flex h-7 w-7 items-center justify-center rounded-full text-muted transition-colors hover:bg-periwinkle/60 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-primary"
              @click="open = false"
            >
              <UIcon name="lucide:x" class="h-4 w-4" />
            </button>
          </div>

          <div class="flex flex-col gap-4">
            <div
              class="flex items-center justify-between gap-3 rounded-xl border border-line bg-card p-3"
              role="group"
              aria-labelledby="text-size-label"
            >
              <span id="text-size-label" class="text-xs font-semibold text-muted">
                Tamaño de texto
              </span>
              <div class="flex items-center gap-1">
                <button
                  type="button"
                  aria-label="Reducir tamaño de texto"
                  :disabled="!canDecrease"
                  class="flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-ink transition-colors hover:bg-periwinkle/60 disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-primary"
                  @click="decrease"
                >
                  A−
                </button>
                <span
                  class="w-7 text-center text-[11px] font-bold uppercase tracking-wider text-muted"
                  aria-live="polite"
                >
                  {{ size }}px
                </span>
                <button
                  type="button"
                  aria-label="Aumentar tamaño de texto"
                  :disabled="!canIncrease"
                  class="flex h-8 w-8 items-center justify-center rounded-full text-base font-bold text-ink transition-colors hover:bg-periwinkle/60 disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-primary"
                  @click="increase"
                >
                  A+
                </button>
              </div>
            </div>

            <button
              type="button"
              :aria-label="`Cambiar tema: ${modeMeta[currentMode].next}`"
              class="flex items-center justify-between gap-3 rounded-xl border border-line bg-card p-3 text-sm font-semibold text-ink transition-colors hover:bg-periwinkle/60 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-primary"
              @click="cycleMode"
            >
              <span class="flex items-center gap-2">
                <UIcon :name="modeMeta[currentMode].icon" class="h-4 w-4 text-primary" />
                Tema
              </span>
              <span class="text-xs font-medium text-muted">{{ modeMeta[currentMode].label }}</span>
            </button>
          </div>
        </div>
      </div>
    </Transition>

    <button
      ref="triggerRef"
      type="button"
      :aria-label="open ? 'Cerrar opciones de accesibilidad' : 'Abrir opciones de accesibilidad'"
      :aria-expanded="open"
      aria-controls="accessibility-panel"
      class="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30 transition-all duration-200 hover:bg-primary-700 hover:shadow-xl hover:shadow-primary/40 active:scale-[0.96] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      @click="toggle"
    >
      <UIcon
        :name="open ? 'lucide:x' : 'lucide:accessibility'"
        class="h-6 w-6"
      />
    </button>
  </div>
</template>
