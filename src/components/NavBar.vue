<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useTheme } from '../Composables/useTheme'
import { useI18n } from 'vue-i18n'

const { locale, t } = useI18n()

const displayed = ref('')
const fullText = 'Abel_Gonz/>'
const prefix = '> '


interface NavItem {
    label: string
    href: string
}

const toggleLanguage = () => {
    locale.value = locale.value === 'es' ? 'en' : 'es'
    localStorage.setItem('lang', locale.value)
}

const mobileMenuOpen = ref<boolean>(false)
const scrolled = ref<boolean>(false)
const activeSection = ref<string>('inicio')

const { theme, toggleTheme } = useTheme()

const navItems = computed<NavItem[]>(() => [
    { label: t('Navbar.Start'), href: '#inicio' },
    { label: t('Navbar.About'), href: '#sobre-mi' },
    { label: t('Navbar.Experience'), href: '#experiencia' },
    { label: t('Navbar.Skills'), href: '#habilidades' },
    { label: t('Navbar.Projects'), href: '#proyectos' },
    { label: t('Navbar.Contact'), href: '#contacto' },
    { label: t('Navbar.Education'), href: '#educacion' },
])

const handleScroll = (): void => {
    scrolled.value = window.scrollY > 50

    const sections: string[] = navItems.value.map((item) => item.href.slice(1))
    for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el) {
            const rect = el.getBoundingClientRect()
            if (rect.top <= 120) {
                activeSection.value = sections[i]
                break
            }
        }
    }
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})

onMounted(() => {
    let i = 0
    const interval = setInterval(() => {
        displayed.value = fullText.slice(0, i + 1)
        i++
        if (i === fullText.length) clearInterval(interval)
    }, 100)
})
</script>

<template>
    <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        :class="scrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border' : 'bg-transparent'">
        <nav class="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">

            <!-- Logo -->
            <a href="#inicio" class="flex items-center font-mono text-xl font-bold tracking-tight group">
                <span class="text-primary mr-1.5">&gt;</span>
                <span class="text-foreground group-hover:text-primary transition-colors">{{ displayed }}</span>
                <span class="ml-0.5 inline-block w-[2px] h-5 bg-primary"
                    :class="displayed.length < fullText.length ? '' : 'animate-pulse'">
                </span>
            </a>

            <!-- Desktop Navigation -->
            <ul class="hidden md:flex items-center gap-1">
                <li v-for="item in navItems" :key="item.href">
                    <a :href="item.href"
                        class="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary rounded-md transition-colors"
                        :class="{ 'text-primary': activeSection === item.href.slice(1) }">
                        {{ item.label }}
                    </a>
                </li>

                <!-- Theme toggle -->
                <li class="ml-1">
                    <button @click="toggleTheme" class="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary
                               transition-all duration-200 border border-transparent hover:border-border"
                        :aria-label="theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'">
                        <!-- Luna (modo oscuro activo → mostrar opción a claro) -->
                        <svg v-if="theme === 'dark'" class="w-4 h-4" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                        <!-- Sol (modo claro activo → mostrar opción a oscuro) -->
                        <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 7a5 5 0 110 10A5 5 0 0112 7z" />
                        </svg>
                    </button>
                </li>

                <!-- Language toggle -->
                <li class="mt-2">
                    <button @click="toggleLanguage" class="flex items-center justify-center gap-2 w-full px-4 py-3
               text-sm font-medium rounded-lg border border-border
               hover:border-primary hover:text-primary transition-colors">
                        🌎 {{ locale === 'es' ? 'EN' : 'ES' }}
                    </button>
                </li>

                <!-- GitHub CTA -->
                <li class="ml-2">
                    <a href="https://github.com/AbelGonz17" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground
                               text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity">
                        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path
                                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        GitHub
                    </a>
                </li>
            </ul>

            <!-- Mobile: theme toggle + hamburger -->
            <div class="md:hidden flex items-center gap-2">
                <button @click="toggleTheme"
                    class="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary transition-all duration-200"
                    :aria-label="theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'">
                    <svg v-if="theme === 'dark'" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                    <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 7a5 5 0 110 10A5 5 0 0112 7z" />
                    </svg>
                </button>

                <button @click="mobileMenuOpen = !mobileMenuOpen"
                    class="p-2 text-muted-foreground hover:text-foreground transition-colors"
                    :aria-label="mobileMenuOpen ? 'Cerrar menu' : 'Abrir menu'" :aria-expanded="mobileMenuOpen">
                    <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </nav>

        <!-- Mobile Menu -->
        <transition enter-active-class="transition duration-200 ease-out" enter-from-class="opacity-0 -translate-y-2"
            enter-to-class="opacity-100 translate-y-0" leave-active-class="transition duration-150 ease-in"
            leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-2">
            <div v-if="mobileMenuOpen" class="md:hidden bg-background/95 backdrop-blur-xl border-b border-border">
                <ul class="flex flex-col px-6 py-4 gap-1">
                    <li v-for="item in navItems" :key="item.href">
                        <a :href="item.href" @click="mobileMenuOpen = false" class="block px-4 py-3 text-sm font-medium text-muted-foreground
                                   hover:text-primary hover:bg-secondary rounded-lg transition-colors"
                            :class="{ 'text-primary bg-secondary': activeSection === item.href.slice(1) }">
                            {{ item.label }}
                        </a>
                    </li>
                    <!-- Language toggle mobile -->
                    <li class="mt-3">
                        <button @click="toggleLanguage" class="flex items-center justify-between w-full px-4 py-3
           rounded-xl bg-muted/40 hover:bg-muted transition-colors">
                            <span class="text-sm font-medium">
                                🌎 Language
                            </span>

                            <span class="text-sm font-semibold text-primary">
                                {{ locale.toUpperCase() }}
                            </span>
                        </button>
                    </li>
                    <li class="mt-2">
                        <a href="https://github.com/AbelGonz17" target="_blank" rel="noopener noreferrer"
                            class="inline-flex items-center gap-2 px-4 py-3 bg-primary text-primary-foreground
                                   text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity w-full justify-center">
                            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            GitHub
                        </a>
                    </li>
                </ul>
            </div>
        </transition>
    </header>
</template>