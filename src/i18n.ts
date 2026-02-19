import { createI18n } from "vue-i18n";

import enAbout from "./Locales/en/about.json";
import esAbout from "./Locales/es/about.json";
import enContact from "./Locales/en/contact.json";
import esContact from "./Locales/es/contact.json";
import enHero from "./Locales/en/hero.json";
import esHero from "./Locales/es/hero.json";
import esExperience from "./Locales/es/experience.json";
import enExperience from "./Locales/en/experience.json";
import enSkills from "./Locales/en/skills.json";
import esSkills from "./Locales/es/skills.json";
import esEducation from "./Locales/es/education.json";
import enEducation from "./Locales/en/education.json";
import enProjects from "./Locales/en/projects.json";
import esProjects from "./Locales/es/projects.json";
import esFooter from "./Locales/es/footer.json";
import enFooter from "./Locales/en/footer.json";
import esNavbar from "./Locales/es/navbar.json";
import enNavbar from "./Locales/en/navbar.json";

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
