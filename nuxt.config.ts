import { defineNuxtConfig } from "nuxt/config";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Portofolio Nurul Helda",
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, viewport-fit=cover",
        },
      ],
      link: [{ rel: "icon", href: "/favicon-bw.png" }],
      script: [
        {
          async: "",
          src: "https://www.googletagmanager.com/gtag/js?id=G-98SHRX2R23",
        },
        {
          type: "text/javascript",
          src: "js/useGtag.js",
          body: true,
        },
      ],
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.scss",
  },
  build: {
    transpile: ["gsap", "@headlessui/vue", "@heroicons/vue"],
  },
});
