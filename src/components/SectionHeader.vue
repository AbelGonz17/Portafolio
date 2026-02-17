<script setup lang="ts">
interface Props {
    number: string
    title: string
}

defineProps<Props>()
</script>

<template>
    <div class="flex items-center gap-4">
        <span class="font-mono text-sm text-primary">{{ number }}.</span>
        <h2 class="text-2xl md:text-3xl font-bold text-foreground tracking-tight">{{ title }}</h2>
        <div class="hidden md:block flex-1 h-px bg-border ml-4"></div>
    </div>
</template>


