# style-example

## Style Scoped

```vue
<style scoped>
.example {
  color: red;
}
</style>
=```

compiled

```vue
<style>
.example[data-v-f3f3eg9] {
  color: red;
}
</style>
```

## Global Selector

```vue
<style scoped>

/* apply globally */
:global(.red) {
  color: red;
}
</style>
```

## Slotted Selectors
```
<style scoped>
:slotted(div) {
  color: red;
}
</style>
```

## Deep Selector

```vue
<style scoped>
.a :deep(.b) {
  /* ... */
}
</style>
```

compiled
```vue
.a[data-v-f3f3eg9] .b {
  /* ... */
}
```

## Mixing Local and Global Styles

```vue
<style>
/* global styles */
</style>

<style scoped>
/* local styles */
</style>
```
global styles in dedicated css file , import in main.js

```js
import { createApp } from 'vue'
import App from './App.vue'

import "./css/styles.css"

createApp(App).mount('#app')
```

## CSS Modules

```
<template>
  <p :class="$style.red">
    This should be red
  </p>
</template>

<style module>
.red {
  color: red;
}
</style>
```

custom name
```vue
<template>
  <p :class="classes.red">red</p>
</template>

<style module="classes">
.red {
  color: red;
}
</style>
```

## Dynamic CSS

```vue
<script setup>
const theme = {
  color: 'red'
}
</script>

<template>
  <p>hello</p>
</template>

<style scoped>
p {
  color: v-bind('theme.color');
}
</style>
```
