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



## API Calls with Axios

## Async/Await & Progress Bar

## Using Vuex

## Universal Mode Deployment

## Static Site Generated Deployment
