<script setup lang="ts">
import SectionHeader from './SectionHeader.vue'

interface Job {
    role: string
    company: string
    period: string
    current: boolean
    badge?: string
    description: string
    technologies: string[]
}

const jobs: Job[] = [
    {
        role: 'Full Stack Developer',
        badge: 'Internship',
        company: 'Laboratorio Referencia',
        period: '2025 – Present',
        current: true,
        description: 'Development and maintenance of web applications using Vue in the frontend and .NET in the backend. Implementation of APIs, integration with databases and deployment in Docker environments, working in collaboration with multidisciplinary teams.',
        technologies: ['Vue.js', '.NET', 'SQL Server', 'Docker'],
    },
    {
        role: 'Backend Developer',
        company: 'Transporte Tito',
        period: '2024 – 2025',
        current: false,
        description: 'Design and development of REST APIs with .NET, integration with SQL Server and MongoDB databases, and handling messaging with Kafka. Performance optimization and structuring of scalable architectures.',
        technologies: ['.NET', 'SQL Server', 'MongoDB', 'Kafka', 'Docker'],
    }
]
</script>

<template>
    <section id="experiencia" class="py-24 md:py-32 bg-card/30">
        <div class="mx-auto max-w-6xl px-6">
            <SectionHeader number="02" title="Experience" />

            <div class="mt-12 relative">

                <!-- Timeline line -->
                <div class="absolute left-[7px] top-2 bottom-2 w-px bg-border/60"></div>

                <div class="flex flex-col gap-10">
                    <div v-for="(job, index) in jobs" :key="index" class="relative pl-10">

                        <!-- Timeline dot -->
                        <div class="absolute left-0 top-5 flex items-center justify-center">
                            <div v-if="job.current"
                                class="w-4 h-4 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                                <div class="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                            </div>
                            <div v-else class="w-4 h-4 rounded-full border-2 border-border bg-background">
                            </div>
                        </div>

                        <!-- Card -->
                        <div class="group bg-card border rounded-xl p-6 transition-all duration-300" :class="job.current
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
                                        Actual
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