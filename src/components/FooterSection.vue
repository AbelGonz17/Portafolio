<script lang="ts" setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();

</script>

<template>
    <footer class="border-t border-border py-8">
        <div class="mx-auto max-w-6xl px-6">
            <div class="flex flex-col md:flex-row items-center justify-between gap-4">
                <p class="text-sm text-muted-foreground">
                    {{ t("Footer.Tex1") }} <span class="text-foreground font-medium">Abel Gonzalez</span>
                </p>
                <div class="flex items-center gap-6">
                    <a href="https://github.com/AbelGonz17?tab=repositories" target="_blank" rel="noopener noreferrer"
                        class="text-sm text-muted-foreground hover:text-primary transition-colors">
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/abel-gonzalez-ramirez-ab3688372/" target="_blank" rel="noopener noreferrer"
                        class="text-sm text-muted-foreground hover:text-primary transition-colors">
                        LinkedIn
                    </a>
                    <a href="mailto:abel.gonzalez.dev17@gmail.com"
                        class="text-sm text-muted-foreground hover:text-primary transition-colors">
                        {{ t("Footer.Email") }}
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>
