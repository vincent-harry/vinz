import { defineConfig } from 'astro/config';

export default defineConfig({
  redirects: {
    "/about": "/#about",
    "/cv": "/#cv",
    "/skills": "/#skills",
    "/certificates": "/#certificates",
    "/seminars": "/#seminars",
    "/projects": "/#projects",
    "/capstone": "/#capstone",
    "/practicum": "/#practicum",
    "/appendices": "/#appendices",
    "/contact": "/#contact",
  },
});
