/**
 * v-reveal directive registered globally via a Nuxt plugin.
 *
 * Nuxt 4 does not auto-import directives from an `app/directives/` folder,
 * so the directive is registered here with `nuxtApp.vueApp.directive()`.
 *
 * Usage: <div v-reveal>    <div v-reveal:300>         <div v-reveal="{ delay: 200, y: 40 }">
 *   - binding.arg  = delay in ms (numeric)
 *   - binding.value = `{ delay, y }` object (optional)
 *
 * Scroll-reveal is a client-only enhancement: SSR renders content visible
 * (getSSRProps returns {}), and mounted() hides + reveals on scroll.
 * Respects prefers-reduced-motion.
 */
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', {
    mounted(el: HTMLElement, binding: any) {
      const reduce =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches

      const value = typeof binding.value === 'object' ? binding.value : {}
      const y = value.y ?? 24
      const delay =
        typeof binding.arg === 'string'
          ? Number(binding.arg)
          : value.delay ?? 0

      if (reduce) {
        el.style.opacity = '1'
        el.style.transform = 'none'
        return
      }

      el.style.opacity = '0'
      el.style.transform = `translateY(${y}px)`
      el.style.transition =
        'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)'
      el.style.transitionDelay = `${delay}ms`

      let revealed = false
      const reveal = () => {
        if (revealed) return
        revealed = true
        el.style.opacity = '1'
        el.style.transform = 'translateY(0px)'
        if (observer) observer.disconnect()
      }

      if (typeof IntersectionObserver === 'undefined') {
        reveal()
        return
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) reveal()
          })
        },
        { threshold: 0.15 }
      )
      observer.observe(el)
    },
    getSSRProps() {
      return {}
    }
  })
})
