<script setup lang="ts">
import { navLinks } from '../content/navigation'
import AuthModal from "../components/auth/AuthModal.vue"
const mobileOpen = ref(false)
const activeLink = ref('Inicio')

const loginOpen = ref<boolean>(false)
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-line/70 bg-surface/85 backdrop-blur-md">
    <div class="mx-auto flex h-20 max-w-[1280px] items-center justify-between gap-6 px-5 sm:px-10">
      <a href="#inicio" class="text-2xl font-bold tracking-[-0.02em] text-primary">
        UniteCorp
      </a>
      <nav class="hidden h-full items-center gap-5 lg:flex" aria-label="Principal">
        <a v-for="link in navLinks" :key="link.label" :href="link.href"
          @click="activeLink = link.label"
          class="flex h-full items-center border-b-2 px-0.5 text-sm font-semibold tracking-[0.01em] transition-colors"
          :class="activeLink === link.label ? 'border-primary text-primary' : 'border-transparent text-muted hover:text-primary'">
          {{ link.label }}
        </a>
      </nav>

      <div class="flex items-center gap-2 sm:gap-3">
        <h3 class="hidden h-[44px] items-center justify-center 
            rounded-lg bg-primary px-5 text-sm font-semibold text-white transition-all duration-200 
            hover:bg-primary-700 active:scale-[0.98] lg:inline-flex hover:cursor-pointer" @click="loginOpen = !loginOpen">
            Únete
        </h3>
        <button type="button" aria-label="Abrir menú"
          class="flex h-10 w-10 items-center justify-center rounded-full text-primary hover:bg-periwinkle/50 lg:hidden"
          @click="mobileOpen = !mobileOpen">
          <UIcon :name="mobileOpen ? 'lucide:x' : 'lucide:menu'" class="h-6 w-6" />
        </button>
      </div>
    </div>

    <div v-if="mobileOpen" class="border-t border-line bg-surface/95 px-5 pb-4 pt-2 backdrop-blur-md lg:hidden">
      <nav class="flex flex-col" aria-label="Principal móvil">
        <a v-for="link in navLinks" :key="link.label" :href="link.href"
          class="border-b border-line/60 py-3 text-sm font-semibold tracking-[0.01em]"
          :class="link.active ? 'text-primary' : 'text-muted'" @click="mobileOpen = false">
          {{ link.label }}
        </a>
        <a href="#causas" @click="mobileOpen = false"
          class="mt-3 inline-flex h-[46px] items-center justify-center rounded-lg bg-primary px-5 text-sm font-semibold text-white">
          Únete
        </a>
      </nav>
    </div>
  </header>
  <Transition
    enter-active-class="transition-all duration-300 ease-out"
    enter-from-class="opacity-0 scale-95"
    enter-to-class="opacity-100 scale-100"
    leave-active-class="transition-all duration-200 ease-in"
    leave-from-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-95"
  >
    <AuthModal v-if="loginOpen" :is-open="true" @close="loginOpen = false" />
  </Transition>
</template>
