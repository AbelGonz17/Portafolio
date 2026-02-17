<script setup lang="ts">
import SectionHeader from './SectionHeader.vue'

type EducationType = 'Baccalaureate' | 'course' | 'University' | 'Other'

interface EducationItem {
    type: EducationType
    title: string
    institution: string
    period: string
    description?: string
    badge?: string        // ruta a imagen del badge/logo
    credential?: string   // URL al certificado
    technologies?: string[]
}

// ─── Reemplaza los datos con los tuyos ───────────────────────────────────────
const education: EducationItem[] = [
    {
        type: 'Baccalaureate',
        title: 'Baccalaureate/Language Technician',
        institution: 'Colegio Parroquial Nuestra Señora de Lourdes',
        period: '2017 – 2021',
        description: 'Completed secondary education with a strong emphasis on analytical thinking, mathematics, and technology fundamentals. Developed discipline, teamwork, and problem-solving skills that laid the foundation for my career in software development.',
        badge: '/images/Colegio.jfif',
    },
    {
        type: 'University',
        title: 'Software Developer (In Progress)',
        institution: 'Instituto Tecnologico de la Americas (ITLA)',
        period: '2025 – Present',
        description: 'Developing strong foundations in system design, clean architecture, APIs, and full-stack development. Complementing academic training with hands-on projects using modern technologies and industry best practices.',
        badge: '/images/ITLA.png',
    }
]

const courses: EducationItem[] = [
    {
        type: 'course',
        title: 'Building Minimal APIs with ASP.NET Core 9 and EF Core',
        institution: 'Udemy',
        period: '2024',
        badge: '/images/Udemy.png',
        credential: 'https://www.udemy.com/certificate/UC-f6e7fb87-1d58-4c68-a7eb-5aa9fdadfa5e/',
        technologies: ['.NET 9', 'Minimal APIs', 'Entity Framework Core', 'Clean Architecture'],
    },
    {
        type: 'course',
        title: 'C# TOTAL - Expert Programmer',
        institution: 'Udemy',
        period: '2024',
        badge: '/images/Udemy.png',
        credential: 'https://www.udemy.com/certificate/UC-39608cd1-b434-47e1-9f7c-84ba6768f990/',
        technologies: ['C#', '.NET', 'OOP', 'Design Patterns'],
    },
    {
        type: 'course',
        title: 'Microservices with ASP.NET Core and Event Driven Architecture',
        institution: 'Udemy',
        period: '2025',
        badge: '/images/Udemy.png',
        credential: '',
        technologies: ['.NET', 'Microservices', 'RabbitMQ', 'Docker Compose', 'CQRS', 'Clean Architecture'],
    },
    {
        type: 'course',
        title: 'SQL TOTAL - Master Databases',
        institution: 'Udemy',
        period: '2024',
        badge: '/images/Udemy.png',
        credential: '',
        technologies: ['SQL', 'Database Design', 'Query Optimization', 'Advanced SQL'],
    },
    {
        type: 'course',
        title: 'Building RESTful Web APIs with ASP.NET Core 9',
        institution: 'Udemy',
        period: '2024',
        badge: '/images/Udemy.png',
        credential: 'https://www.udemy.com/certificate/UC-e3d0cebc-0fa7-43dd-8e76-9ee5cc6353eb/',
        technologies: ['ASP.NET Core 9', 'RESTful APIs', 'Entity Framework Core', 'CQRS', 'Clean Architecture'],
    },
    {
        type: 'course',
        title: 'Vue.js 3 - The Complete Guide - Composition Pinia MEVN 10 Apps',
        institution: 'Udemy',
        period: '2025',
        badge: '/images/Udemy.png',
        credential: '',
        technologies: ['Vue.js 3', 'Composition API', 'Pinia', 'MEVN Stack', 'Tailwind CSS'],
    },
    {
        type: 'course',
        title: 'Python TOTAL - Advanced Programmer',
        institution: 'Udemy',
        period: '2024',
        badge: '/images/Udemy.png',
        credential: 'https://www.udemy.com/certificate/UC-9c8b1e5c-7a0e-4f1b-9c8a-2f0e5b6c8d9f/',
        technologies: ['Python', 'Advanced Programming', 'Data Structures', 'Algorithms', 'OOP'],
    },
    {
        type: 'course',
        title: 'Database Foundation',
        institution: 'Platzi',
        period: '2024',
        badge: '/images/Platzi.png',
        credential: 'https://drive.google.com/file/d/14k6W2xqo6OTKzUy0s5m1GvvFq_MaCShm/view?usp=drive_link',
        technologies: ['Database Design', 'SQL', 'Query Optimization', 'Advanced SQL'],
    },
    {
        type: 'course',
        title: 'Unit testing course with C# and .NET',
        institution: 'Platzi',
        period: '2024',
        badge: '/images/Platzi.png',
        credential: 'https://drive.google.com/file/d/1Ouj5bgXA7jUSIj3F9Rk0BeIxPudvKl5w/view?usp=drive_link',
        technologies: ['Unit Testing', 'C#', '.NET', 'xUnit', 'Moq'],
    },
    {
        type: 'course',
        title: 'Fronted Development',
        institution: 'Platzi',
        period: '2024',
        badge: '/images/Platzi.png',
        credential: 'https://drive.google.com/file/d/1lVuJLEDbTf_23712OqjdOU80BQZzDFyp/view?usp=drive_link',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'React'],
    },
    {
        type: 'course',
        title: 'Entity Framework fundamentals course',
        institution: 'Platzi',
        period: '2024',
        badge: '/images/Platzi.png',
        credential: 'https://drive.google.com/file/d/1dER3VfUe0n7AwnSkEyYQQpxHMCk0BJoZ/view?usp=drive_link',
        technologies: ['Entity Framework', '.NET', 'Database Access', 'ORM', 'Code First'],
    }
]
// ─────────────────────────────────────────────────────────────────────────────

const platformColors: Record<string, string> = {
    Udemy: 'text-violet-400 bg-violet-400/10 border-violet-400/20',
    Coursera: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
    Platzi: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
    default: 'text-primary bg-primary/10 border-primary/20',
}

const getPlatformStyle = (institution: string): string =>
    platformColors[institution] ?? platformColors.default
</script>

<template>
    <section id="educacion" class="py-24 md:py-32">
        <div class="mx-auto max-w-6xl px-6">

            <SectionHeader number="04" title="Education" />

            <p class="mt-6 max-w-2xl text-muted-foreground">
                My academic background and the courses I have completed to stay up-to-date with the latest technologies.
            </p>

            <!-- ── Formación académica ──────────────────────────────────────── -->
            <div class="mt-12">
                <h3 class="flex items-center gap-3 text-sm font-mono text-primary uppercase tracking-widest mb-6">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                    Academic training
                </h3>

                <div class="grid md:grid-cols-2 gap-4">
                    <div v-for="item in education" :key="item.title" class="group bg-card/50 border border-border/60 rounded-xl p-6
                               hover:border-primary/40 hover:-translate-y-1
                               hover:shadow-lg hover:shadow-primary/5
                               transition-all duration-300 flex gap-5">
                        <!-- Badge / Logo -->
                        <div class="shrink-0">
                            <div v-if="item.badge"
                                class="w-14 h-14 rounded-xl overflow-hidden border border-border bg-secondary flex items-center justify-center">
                                <img :src="item.badge" :alt="item.institution"
                                    class="w-full h-full object-contain p-1" />
                            </div>
                            <!-- Fallback icono si no hay imagen -->
                            <div v-else
                                class="w-14 h-14 rounded-xl border border-border bg-primary/10 flex items-center justify-center">
                                <svg class="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                </svg>
                            </div>
                        </div>

                        <!-- Contenido -->
                        <div class="flex-1 min-w-0">
                            <div class="flex items-start justify-between gap-2">
                                <h4 class="font-semibold text-foreground leading-tight">{{ item.title }}</h4>
                                <span class="font-mono text-xs text-muted-foreground whitespace-nowrap pt-0.5">
                                    {{ item.period }}
                                </span>
                            </div>
                            <p class="text-sm text-primary font-medium mt-1">{{ item.institution }}</p>
                            <p v-if="item.description" class="text-sm text-muted-foreground mt-2 leading-relaxed">
                                {{ item.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ── Cursos y certificaciones ────────────────────────────────── -->
            <div class="mt-14">
                <h3 class="flex items-center gap-3 text-sm font-mono text-primary uppercase tracking-widest mb-6">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    Courses and certifications
                </h3>

                <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div v-for="course in courses" :key="course.title" class="group relative bg-card/50 border border-border/60 rounded-xl p-5
                               hover:border-border hover:-translate-y-1
                               hover:shadow-lg hover:shadow-black/10
                               transition-all duration-300 flex flex-col gap-4">
                        <!-- Header: badge + plataforma -->
                        <div class="flex items-center justify-between">
                            <!-- Logo plataforma -->
                            <div v-if="course.badge"
                                class="w-10 h-10 rounded-lg overflow-hidden border border-border bg-secondary flex items-center justify-center">
                                <img :src="course.badge" :alt="course.institution"
                                    class="w-full h-full object-contain p-1" />
                            </div>
                            <div v-else
                                class="w-10 h-10 rounded-lg border flex items-center justify-center text-xs font-bold"
                                :class="getPlatformStyle(course.institution)">
                                {{ course.institution.slice(0, 2).toUpperCase() }}
                            </div>

                            <!-- Pill de plataforma -->
                            <span class="text-xs font-medium px-2.5 py-1 rounded-full border"
                                :class="getPlatformStyle(course.institution)">
                                {{ course.institution }}
                            </span>
                        </div>

                        <!-- Título y año -->
                        <div>
                            <h4 class="font-semibold text-foreground text-sm leading-snug">{{ course.title }}</h4>
                            <p class="text-xs text-muted-foreground font-mono mt-1">{{ course.period }}</p>
                        </div>

                        <!-- Tecnologías -->
                        <div v-if="course.technologies" class="flex flex-wrap gap-1.5 mt-auto">
                            <span v-for="tech in course.technologies" :key="tech" class="px-2 py-0.5 text-xs font-mono bg-secondary text-secondary-foreground
                                       border border-border rounded-md">
                                {{ tech }}
                            </span>
                        </div>

                        <!-- Link al certificado -->
                        <a v-if="course.credential" :href="course.credential" target="_blank" rel="noopener noreferrer"
                            class="flex items-center gap-1.5 text-xs text-muted-foreground
                                   hover:text-primary transition-colors mt-1 group/link">
                            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            Ver certificado
                            <span class="group-hover/link:translate-x-0.5 transition-transform">→</span>
                        </a>

                        <!-- Línea decorativa de color en hover -->
                        <div class="absolute bottom-0 left-5 right-5 h-px rounded-full
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-300
                                    bg-gradient-to-r from-transparent via-primary/40 to-transparent">
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>