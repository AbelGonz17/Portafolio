<script setup lang="ts">
import SectionHeader from './SectionHeader.vue'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

interface Project {
    title: string
    description: string
    image: string
    technologies: string[]
    github: string
    live: string
}

const projects = computed<Project[]>(() => [
    {
        title: t('Projects.Projects.Project1.Title'),
        description: t('Projects.Projects.Project1.Description'),
        image: '/images/PokedexCore.png',
        technologies: ['.NET', 'Entity Framework', 'SQL Server', 'Docker Compose', 'Design Patterns'],
        github: 'https://github.com/AbelGonz17/PokedexCore',
        live: '',
    },
    {
        title: t('Projects.Projects.Project2.Title'),
        description: t('Projects.Projects.Project2.Description'),
        image: '/images/ApiReservacionesGym.png',
        technologies: ['.NET', 'SQL Server', 'Entity Framework', 'Docker'],
        github: 'https://github.com/AbelGonz17/Api_ReservacionesGym',
        live: '',
    },
    {
        title: t('Projects.Projects.Project3.Title'),
        description: t('Projects.Projects.Project3.Description'),
        image: '/images/BarberiaAPI.png',
        technologies: ['.NET', 'SQL Server', 'Entity Framework', 'Docker'],
        github: 'https://github.com/AbelGonz17/BarberiaApi',
        live: '',
    },
    {
        title: t('Projects.Projects.Project4.Title'),
        description: t('Projects.Projects.Project4.Description'),
        image: '/images/Drink&Coffe.png',
        technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
        github: 'https://github.com/AbelGonz17/DrinksCoffe-vue',
        live: 'https://drinks-coffe-vue.vercel.app/',
    },
    {
        title: t('Projects.Projects.Project5.Title'),
        description: t('Projects.Projects.Project5.Description'),
        image: '/images/Microservices.png',
        technologies: ['.NET', 'RabbitMQ', 'Docker Compose', 'Design Patterns', 'Microservices', 'Clean Architecture', 'CQRS'],
        github: 'https://github.com/AbelGonz17/MicroservicesRabbitMQ',
        live: '',
    },
    {
        title: t('Projects.Projects.Project6.Title'),
        description: t('Projects.Projects.Project6.Description'),
        image: '/images/Veterianaria.png',
        technologies: ['Vue.js', 'Tailwind CSS', 'Netlify'],
        github: 'https://github.com/AbelGonz17/Admin-Pacientes',
        live: 'https://administracion-veterinaria.netlify.app/',
    }
])


</script>

<template>
    <section id="proyectos" class="py-24 md:py-32 bg-card/30">
        <div class="mx-auto max-w-6xl px-6">
            <SectionHeader number="05" :title="t('Projects.Projects.Projects')" />

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                <article v-for="project in projects" :key="project.title"
                    class="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/40 transition-all duration-300 hover:-translate-y-1">
                    <!-- Project Image -->
                    <div class="relative overflow-hidden aspect-video">
                        <img :src="project.image" :alt="'Captura del proyecto ' + project.title"
                            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        <div
                            class="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                            <a v-if="project.github" :href="project.github" target="_blank" rel="noopener noreferrer"
                                class="p-3 bg-background/90 border border-border rounded-full text-foreground hover:text-primary hover:border-primary transition-colors"
                                aria-label="Ver codigo en GitHub">
                                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path
                                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                            <a v-if="project.live" :href="project.live" target="_blank" rel="noopener noreferrer"
                                class="p-3 bg-background/90 border border-border rounded-full text-foreground hover:text-primary hover:border-primary transition-colors"
                                aria-label="Ver proyecto en vivo">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <!-- Project Content -->
                    <div class="p-6">
                        <h3 class="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                            {{ project.title }}
                        </h3>
                        <p class="text-sm text-muted-foreground leading-relaxed mt-2 text-pretty">
                            {{ project.description }}
                        </p>
                        <div class="flex flex-wrap gap-2 mt-4">
                            <span v-for="tech in project.technologies" :key="tech"
                                class="px-2.5 py-0.5 text-xs font-mono bg-primary/10 text-primary rounded-full">
                                {{ tech }}
                            </span>
                        </div>
                    </div>
                </article>
            </div>

            <!-- CTA to GitHub -->
            <div class="text-center mt-12">
                <a href="https://github.com/AbelGonz17?tab=repositories" target="_blank" rel="noopener noreferrer"
                    class="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-semibold rounded-lg hover:border-primary hover:text-primary transition-colors">
                    {{ t('Projects.Projects.Text1') }}
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </a>
            </div>
        </div>
    </section>
</template>
