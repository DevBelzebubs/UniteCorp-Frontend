import { useCookie } from '#imports'

const MIN = 14
const MAX = 19
const STEP = 1
const DEFAULT = 16

/**
 * Accessibility text-size control.
 * Persists an explicit px offset (relative to the 16px baseline) so the whole
 * rem-based layout scales consistently. Respects prefers-reduced-motion so the
 * size applies instantly without a transition.
 */
export function useTextSize() {
  const cookie = useCookie<string>('unitecorp-text-size', {
    default: () => String(DEFAULT),
    maxAge: 60 * 60 * 24 * 365
  })

  const size = ref(clamp(Number(cookie.value) || DEFAULT))

  function clamp(value: number) {
    return Math.min(MAX, Math.max(MIN, value))
  }

  function apply() {
    const next = clamp(size.value)
    cookie.value = String(next)
    if (process.client) {
      document.documentElement.style.fontSize = `${next}px`
    }
    return next
  }

  function increase() {
    if (size.value >= MAX) return
    size.value += STEP
    apply()
  }

  function decrease() {
    if (size.value <= MIN) return
    size.value -= STEP
    apply()
  }

  if (process.client) {
    onMounted(() => apply())
  }

  return {
    size,
    increase,
    decrease,
    canIncrease: computed(() => size.value < MAX),
    canDecrease: computed(() => size.value > MIN)
  }
}
