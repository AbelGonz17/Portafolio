import { createI18n } from "vue-i18n";

import enAbout from "./locales/en/about.json";
import esAbout from "./locales/es/about.json";
import enContact from "./locales/en/contact.json";
import esContact from "./locales/es/contact.json";
import enHero from "./locales/en/hero.json";
import esHero from "./locales/es/hero.json";
import esExperience from "./locales/es/experience.json";
import enExperience from "./locales/en/experience.json";
import enSkills from "./locales/en/skills.json";
import esSkills from "./locales/es/skills.json";
import esEducation from "./locales/es/education.json";
import enEducation from "./locales/en/education.json";
import enProjects from "./locales/en/projects.json";
import esProjects from "./locales/es/projects.json";
import esFooter from "./locales/es/footer.json";
import enFooter from "./locales/en/footer.json";
import esNavbar from "./locales/es/navbar.json";
import enNavbar from "./locales/en/navbar.json";

export const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem("lang") || "es",
  fallbackLocale: "es",
  messages: {
    en: {
      about: enAbout,
      contact: enContact,
      hero: enHero,
      experience: enExperience,
      skills: enSkills,
      Education: enEducation,
      Projects: enProjects,
      Footer: enFooter,
      Navbar: enNavbar,
    },
    es: {
      about: esAbout,
      contact: esContact,
      hero: esHero,
      experience: esExperience,
      skills: esSkills,
      Education: esEducation,
      Projects: esProjects,
      Footer: esFooter,
      Navbar: esNavbar,
    },
  },
});
