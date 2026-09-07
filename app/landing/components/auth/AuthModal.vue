<script setup lang="ts">
defineProps<{
    isOpen: boolean
}>()
const emit = defineEmits<{ close: [] }>()
const options = ["Login", "Registro"]
const isLogin = ref('Login');
const onSubmit = () => {
    navigateTo('/dashboard')
    emit('close')
}
</script>
<template>
    <div class="fixed inset-0 z-[60] flex items-center justify-center p-4 backdrop-blur-md"
        :class="[isOpen ? '' : 'hidden']" @click.self="emit('close')">
        <div
            class="relative flex w-full max-w-3xl overflow-hidden rounded-2xl bg-card shadow-2xl ring-1 ring-line/60 transition-all duration-300">
            <button type="button" aria-label="Cerrar"
                class="absolute right-3 top-3 z-20 flex h-6 w-6 items-center justify-center rounded-full bg-ink/10 text-ink/70 transition hover:bg-ink/20 hover:text-ink"
                @click="emit('close')">
                <UIcon name="lucide:x" class="h-5 w-5" />
            </button>
            <div
                class="relative hidden w-[60%] min-h-[460px] items-center overflow-hidden bg-gradient-to-br from-primary-800 via-primary to-primary-500 md:flex">
                <div class="relative z-10 p-8">
                    <h2 class="text-3xl font-bold leading-tight tracking-tight text-white">Bienvenido a UniteCorp</h2>
                    <p class="mt-3 max-w-[260px] text-sm leading-relaxed text-primary-100">Conecta tu talento con un
                        propósito y transforma tu carrera en impacto social.</p>
                </div>
            </div>
            <div class="w-full p-6 sm:p-8 md:w-[58%] md:px-8">
                <div class="mb-6 flex rounded-xl bg-tint p-1">
                    <div v-for="option in options" :key="option" class="flex-1">
                        <h3 @click="isLogin = option"
                            class="cursor-pointer rounded-lg px-4 py-2 text-center text-sm font-semibold transition-all duration-200"
                            :class="isLogin == option ? 'bg-card text-primary shadow-sm' : 'text-muted hover:text-ink'">
                            {{ option }}
                        </h3>
                    </div>
                </div>
                <div :class="[isLogin == 'Login' ? 'hidden' : '']">
                    <h2 class="mb-5 text-xl font-bold tracking-tight text-ink">Crea tu cuenta</h2>
                    <form class="flex flex-col gap-2" @submit.prevent="onSubmit">
                        <AuthInput type="text" lbl="Usuario:" placeholder="Nombre"></AuthInput>
                        <div class="flex flex-row gap-3">
                            <AuthInput type="text" lbl="Apellido Paterno:" placeholder="Apellido Paterno"></AuthInput>
                            <AuthInput type="text" lbl="Apellido Materno:" placeholder="Apellido Materno"></AuthInput>
                        </div>
                        <AuthInput type="email" lbl="Correo:" placeholder="Correo Electrónico"></AuthInput>
                        <AuthInput type="password" lbl="Contraseña:" placeholder="Contraseña"></AuthInput>
                        <AuthInput type="password" lbl="Repetir contraseña:" placeholder="Repetir contraseña">
                        </AuthInput>
                        <button type="submit">Ingresar</button>
                    </form>
                </div>

                <div :class="[isLogin == 'Registro' ? 'hidden' : '']">
                    <h2 class="mb-5 text-xl font-bold tracking-tight text-ink">Ingresa a tu cuenta</h2>
                    <div class="flex flex-col gap-4">
                        <form @submit.prevent="onSubmit">
                            <AuthInput type="email" lbl="Correo:" placeholder="Correo Electrónico"></AuthInput>
                            <AuthInput type="password" lbl="Contraseña:" placeholder="Contraseña"></AuthInput>
                            <button type="submit">Ingresar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
