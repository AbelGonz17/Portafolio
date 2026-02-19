<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()


</script>

<template>
    <section id="inicio" class="relative min-h-screen flex items-center overflow-hidden">
        <!-- Background glow effect -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
            <div class="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div class="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        </div>

        <div class="relative mx-auto max-w-6xl px-6 py-32 md:py-0 w-full">
            <div class="grid md:grid-cols-2 gap-12 items-center">

                <!-- Text Content -->
                <div class="order-2 md:order-1">

                    <!-- Nombre + rol en una sola línea visual coherente -->
                    <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
                        {{ t('hero.Abel') }}
                    </h1>
                    <p class="text-2xl md:text-3xl font-semibold text-primary mt-2">
                        {{ t('hero.Software') }}
                    </p>

                    <!-- Stack tags -->
                    <div class="flex flex-wrap gap-2 mt-4">
                        <span
                            class="px-2.5 py-1 text-xs font-mono bg-primary/10 text-primary border border-primary/20 rounded-md">Vue.js</span>
                        <span
                            class="px-2.5 py-1 text-xs font-mono bg-primary/10 text-primary border border-primary/20 rounded-md">.NET</span>
                        <span
                            class="px-2.5 py-1 text-xs font-mono bg-primary/10 text-primary border border-primary/20 rounded-md">Full
                            Stack</span>
                    </div>

                    <p class="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed text-pretty max-w-lg">
                       {{ t('hero.Text1') }}
                    </p>

                    <!-- CTAs -->
                    <div class="flex flex-wrap items-center gap-4 mt-8">
                        <a href="#proyectos"
                            class="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity">
                            {{ t('hero.See') }}
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                        <a href="#contacto"
                            class="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-semibold rounded-lg hover:border-primary hover:text-primary transition-colors">
                            {{ t('hero.Contact') }}
                        </a>
                    </div>

                    <!-- Social Links -->
                    <div class="flex items-center gap-5 mt-10">
                        <a href="https://github.com/AbelGonz17" target="_blank"
                            rel="noopener noreferrer" class="text-muted-foreground hover:text-primary transition-colors"
                            aria-label="GitHub">
                            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                        <span class="w-px h-4 bg-border"></span>
                        <a href="https://www.linkedin.com/in/abel-gonzalez-ramirez-ab3688372/" target="_blank"
                            rel="noopener noreferrer" class="text-muted-foreground hover:text-primary transition-colors"
                            aria-label="LinkedIn">
                            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>
                        <span class="w-px h-4 bg-border"></span>
                        <a href="mailto:abel.gonzalez.dev17@gmail.com"
                            class="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </a>
                    </div>
                </div>

                <!-- Profile Image -->
                <div class="order-1 md:order-2 flex justify-center md:justify-end">
                    <div class="relative">
                        <!-- Glow de fondo -->
                        <div class="absolute -inset-4 bg-primary/10 rounded-full blur-2xl"></div>

                        <!-- Anillo decorativo exterior animado -->
                        <div
                            class="absolute -inset-3 rounded-full border border-primary/20 animate-spin [animation-duration:12s]">
                        </div>

                        <!-- Foto -->
                        <div
                            class="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-primary/30">
                            <img src="/images/Abel Gonzalez.jpg" alt="Foto de perfil"
                                class="w-full h-full object-cover" />
                        </div>

                        <!-- Badge flotante "Full Stack" -->
                        <div class="absolute -bottom-3 left-1/2 -translate-x-1/2
                                    flex items-center gap-1.5 px-3 py-1.5
                                    bg-card border border-border rounded-full shadow-lg
                                    text-xs font-mono text-primary whitespace-nowrap">
                            <span class="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                            Full Stack Dev
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <!-- Scroll indicator -->
        <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <svg class="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
        </div>
    </section>
</template>