<script setup lang="ts">
defineProps<{
    lbl: String;
}>()
</script>
<template>
    <div >
        <label class="mb-1.5 block text-sm font-semibold text-muted">{{ lbl }}</label>
        <input v-bind="$attrs" class="w-full rounded-lg border border-line bg-surface px-3.5 py-2.5 text-sm text-ink shadow-sm outline-none transition duration-200 placeholder:text-soft focus:border-primary focus:ring-2 focus:ring-primary/20">
    </div>
</template>
