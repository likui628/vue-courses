import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    publicRuntimeConfig: {
        BASE_URL: process.env.BASE_URL
    },
    meta: {
        meta: [
            { name: "viewport", content: "width=device-width, initial-scale=1" },
        ],
    },
});
