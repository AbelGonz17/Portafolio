// composables/useTheme.ts
import { ref, onMounted } from "vue";

type Theme = "dark" | "light";

const theme = ref<Theme>("dark");

export function useTheme() {
  const toggleTheme = (): void => {
    theme.value = theme.value === "dark" ? "light" : "dark";
    applyTheme(theme.value);
    localStorage.setItem("portfolio-theme", theme.value);
  };

  const applyTheme = (t: Theme): void => {
    if (t === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  };

  const initTheme = (): void => {
    const saved = localStorage.getItem("portfolio-theme") as Theme | null;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    theme.value = saved ?? (prefersDark ? "dark" : "light");
    applyTheme(theme.value);
  };

  onMounted(() => {
    initTheme();
  });

  return { theme, toggleTheme };
}
