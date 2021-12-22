# Scaling Vue with Nuxt.js
https://www.vuemastery.com/courses/scaling-vue-with-nuxt-js/

## Universal Mode

1. render the page requested on the server-side first
2. code-splitting by default
3. smart prefetching

## SEO with Meta Tags
1. [useMeta Composable](https://v3.nuxtjs.org/docs/usage/meta-tags#usemeta-composable)
    ```js
    export default {
    setup () {
        useMeta({
        meta: [
            { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' }
        ],
        bodyAttrs: {
            class: 'test'
        }
        })
    }
    }
    ```

2. [Meta Components](https://v3.nuxtjs.org/docs/usage/meta-tags#meta-components)
    ```
    <template>
    <div>
        <Html lang="en-US">
        <Head>
            <Title>Hello World</Title>
            <Meta name="description" content="it is a Hello World page" />
            <Link rel="preload" href="/test.txt" as="script" />
        </Head>
        </Html>

        <h1>Hello World</h1>
    </div>
    </template>
    ```


3. [nuxt.config#meta](https://v3.nuxtjs.org/docs/directory-structure/nuxt.config#meta)

    ```js
    meta: {
    meta: [
    // <meta name="viewport" content="width=device-width, initial-scale=1">
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    script: [
    // <script src="https://myawesome-lib.js"></script>
    { src: 'https://awesome-lib.js' }
    ],
    link: [
    // <link rel="stylesheet" href="https://myawesome-lib.css">
    { rel: 'stylesheet', href: 'https://awesome-lib.css' }
    ],
    // please note that this is an area that is likely to change
    style: [
    // <style type="text/css">:root { color: red }</style>
    { children: ':root { color: red }', type: 'text/css' }
    ]
    }
    ```

## File-based Routing

Pages directory :

```
-| pages/
---| index.vue
---| users-[group]/
-----| [id].vue
```

page `[id].vue`:

```html
<template>
  {{ $route.params.group }}
  {{ $route.params.id }}
</template>
```

Navigating to /users-admins/123 would render:
```
admins 123
```



## Data Fetching
`useAsyncData`:

```
<script setup>
const { data } = await useAsyncData('count',
    () => $fetch('/api/count'))
</script>
```
`useLazyAsyncData`: identically to `useAsyncData` with the `lazy: true`

`useFetch`: wrapper around `useAsyncData` and `$fetch`.

`useLazyFetch`:  identically to `useFetch` with the `lazy: true`

## Runtime Config
`.env`
```
BASE_URL=https://nuxtjs.org
API_SECRET=api_secret_token
```

`nuxt.config.ts`
```js
export default defineNuxtConfig({
  publicRuntimeConfig: {
    BASE_URL: process.env.BASE_URL
  },
  privateRuntimeConfig: {
    API_SECRET: process.env.API_SECRET
  }
})
```

usage:

1. virtual `#config`
    ```js
    import config from '#config'

    export default async () => {
    const result = await $fetch('https://my.api.com/test', {
        headers: {
        Authorization: `Bearer ${config.API_AUTH_TOKEN}`
        }
    })
    return result
    }
    ```

2. `useRuntimeConfig`

    ```vue
    <script setup>
    const config = useRuntimeConfig()
    </script>
    ```

## Using Vuex

## Universal Mode Deployment

## Static Site Generated Deployment
