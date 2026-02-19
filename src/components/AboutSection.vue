<script setup lang="ts">
import SectionHeader from './SectionHeader.vue'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { t } = useI18n()

const stats = computed(() => [
    { value: '10+', label: t('about.stats.projects'), icon: '🚀' },
    { value: '5+', label: t('about.stats.technologies'), icon: '⚡' },
    { value: '2+', label: t('about.stats.experience'), icon: '📅' },
    { value: '100%', label: t('about.stats.quality'), icon: '✦' },
])

const interests = computed(() => [
    { label: t('about.interests.music'), icon: '🎵' },
    { label: t('about.interests.videogames'), icon: '🎮' },
    { label: t('about.interests.opensource'), icon: '🛠️' },
    { label: t('about.interests.family'), icon: '🤝' },
])
</script>


<template>
    <section id="sobre-mi" class="py-24 md:py-32">
        <div class="mx-auto max-w-6xl px-6">
            <SectionHeader number="01" :title="t('about.title')" />

            <div class="grid md:grid-cols-5 gap-12 mt-12 items-start">

                <div class="md:col-span-3 space-y-5">
                   <p class="text-muted-foreground leading-relaxed text-pretty text-base">
                        {{ t('about.description1') }}
                        <span class="text-foreground font-medium">Vue</span>
                        {{ t('about.frontend') }}
                        <span class="text-foreground font-medium">.NET</span>
                        {{ t('about.backend') }}
                    </p>
                    <p class="text-muted-foreground leading-relaxed text-pretty text-base">
                        {{ t('about.description2') }}
                    </p>

                    <div class="pt-2">
                       <p class="text-muted-foreground leading-relaxed text-pretty text-base">
                            {{ t('about.outOfCode') }}
                        </p>
                        <div class="flex flex-wrap gap-2">
                            <span v-for="item in interests" :key="item.label" class="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm
                                       bg-secondary text-secondary-foreground border border-border
                                       rounded-full hover:border-primary/40 hover:text-primary
                                       transition-colors cursor-default">
                                <span>{{ item.icon }}</span>
                                {{ item.label }}
                            </span>
                        </div>
                    </div>

                    <div class="pt-2">
                        <a href="#proyectos" class="inline-flex items-center gap-2 text-sm font-medium text-primary
                                   hover:gap-3 transition-all duration-200 group">
                            {{ t('about.seeProjects') }}
                            <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div class="md:col-span-2 grid grid-cols-2 gap-3">
                    <div v-for="stat in stats" :key="stat.label" class="group bg-card/50 border border-border/60 rounded-xl p-5
                               flex flex-col items-center text-center gap-1
                               hover:border-primary/40 hover:bg-card hover:-translate-y-1
                               hover:shadow-lg hover:shadow-primary/5
                               transition-all duration-300">
                        <span class="text-xl mb-1">{{ stat.icon }}</span>
                        <p class="text-2xl md:text-3xl font-bold text-primary">{{ stat.value }}</p>
                        <p class="text-xs text-muted-foreground leading-tight">{{ stat.label }}</p>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>