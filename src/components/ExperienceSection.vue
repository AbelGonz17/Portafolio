<script setup lang="ts">
import SectionHeader from './SectionHeader.vue'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { t } = useI18n()

interface Job {
    role: string
    company: string
    period: string
    current: boolean
    badge?: string
    description: string
    technologies: string[]
}

const jobs = computed<Job[]>(() => [
    {
        role: t('experience.Job1.role'),
        badge: t('experience.Job1.Badge'),
        company: t('experience.Job1.Company'),
        period: t('experience.Job1.Period'),
        current: true,
        description: t('experience.Job1.Description'),
        technologies: ['Vue.js', '.NET', 'SQL Server', 'Docker'],
    },
    {
        role: t('experience.Job2.role'),
        company: t('experience.Job2.Company'),
        period: t('experience.Job2.Period'),
        current: false,
        description: t('experience.Job2.Description'),
        technologies: ['.NET', 'SQL Server', 'MongoDB', 'Kafka', 'Docker'],
    }
])
</script>

<template>
    <section id="experiencia" class="py-24 md:py-32 bg-card/30">
        <div class="mx-auto max-w-6xl px-6">
            <SectionHeader number="02" :title="t('experience.Experience')" />

            <div class="mt-12 relative">

                <!-- Timeline line -->
                <div class="absolute left-[7px] top-2 bottom-2 w-px bg-border/60"></div>

                <div class="flex flex-col gap-10">
                    <div v-for="(job, index) in jobs" :key="index" class="relative flex gap-6">

                        <!-- Timeline dot -->
                        <div class="flex flex-col items-center shrink-0 pt-5">
                            <div v-if="job.current"
                                class="w-4 h-4 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                                <div class="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                            </div>
                            <div v-else class="w-4 h-4 rounded-full border-2 border-border bg-background"></div>
                            <!-- línea vertical entre dots -->
                            <div class="w-px flex-1 bg-border/60 mt-3"></div>
                        </div>

                        <!-- Card -->
                        <div class="group bg-card border rounded-xl p-6 mb-10 flex-1 transition-all duration-300"
                            :class="job.current
                                ? 'border-primary/30 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/5'
                                : 'border-border/60 hover:border-border hover:shadow-md'">

                            <!-- Header -->
                            <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                                <div>
                                    <!-- Rol + badge -->
                                    <div class="flex flex-wrap items-center gap-2">
                                        <h3 class="text-lg font-semibold text-foreground">{{ job.role }}</h3>
                                        <span v-if="job.badge"
                                            class="px-2 py-0.5 text-xs font-medium bg-primary/15 text-primary border border-primary/25 rounded-md">
                                            {{ job.badge }}
                                        </span>
                                    </div>
                                    <!-- Empresa -->
                                    <p class="text-primary font-medium text-sm mt-1">{{ job.company }}</p>
                                </div>

                                <!-- Periodo -->
                                <div class="flex flex-col items-start sm:items-end gap-1 shrink-0">
                                    <span class="font-mono text-sm text-foreground/70 font-medium">{{ job.period
                                        }}</span>
                                    <span v-if="job.current"
                                        class="inline-flex items-center gap-1 text-xs text-primary font-medium">
                                        <span class="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                                        {{ t('experience.Current') }}
                                    </span>
                                </div>
                            </div>

                            <!-- Descripción -->
                            <p class="text-muted-foreground leading-relaxed text-sm text-pretty">
                                {{ job.description }}
                            </p>

                            <!-- Tecnologías -->
                            <div class="flex flex-wrap gap-2 mt-5">
                                <span v-for="tech in job.technologies" :key="tech" class="px-2.5 py-1 text-xs font-mono
                                           bg-secondary text-secondary-foreground
                                           border border-border rounded-md
                                           hover:border-primary/50 hover:text-primary
                                           transition-colors cursor-default">
                                    {{ tech }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>