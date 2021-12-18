# component-design-patterns
https://www.vuemastery.com/courses/component-design-patterns/

## Slots

**BlogLayout.vue**
```vue
<div class="blog-container">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>
```

**App.vue**
```vue
<script>
export default {
  data() {
    return {
      layout: [
        { name: 'header', content: 'My Blog Title' },
        { name: 'body', content: 'Main body content' },
        { name: 'footer', content: 'Footer contet' }
      ]
    }
  }
}
</script>

<template>
  <BlogLayout>
    <template 
      v-for="section in layout" 
      v-slot:[section.name]
      :key="`blog-section-${section.name}`"
    >
      {{ section.content }}
    </template>
  </BlogLayout>
</template>
```

## Scoped Slots
![scoped](./images/scoped-slot.png) 

**todo-list**

```vue
<ul>
  <li v-for="( item, index ) in items">
    <slot :item="item"></slot>
  </li>
</ul>
```

**parent component**

```vue
<todo-list>
  <template v-slot:default="slotProps">
    <i class="fas fa-check"></i>
    <span class="green">{{ slotProps.item }}</span>
  </template>
</todo-list>

```

## One Object to Rule Them All

```vue
<template>
  <main>
    <Component 
      v-for="content in apiResponse"
      :key="content.id"
      :is="content.type"
      :article-title="content.title"
      :article-content="content.body"
      :ad-image="content.image"
      :ad-heading="content.heading"
      @click="content.type === 'NewsArticle' ? openArticle : openAd"
      @mouseover="content.type === 'NewsArticle' ? showPreview : trackAdEvent"
    />
  </main>
</template>
```

**refactoring** 

以对象形式传递props和event handlers

1. [v-bind](https://v3.vuejs.org/api/directives.html#v-bind)

2. [v-on](https://v3.vuejs.org/api/directives.html#v-on)

```vue
<template>
  <main>
    <Component 
      v-for="content in apiResponse"
      :key="content.id"
      :is="content.type"
      v-bind="feedItem(content).attrs"
      v-on="feedItem(content).events"
    />
  </main>
</template>

<script>
export default {
  methods: {
    feedItem(item) {
      if (item.type === 'NewsArticle') {
        return {
          attrs: {
            'article-title': item.title,
            'article-content': item.content
          },
          events: {
            click: this.openArticle,
            mouseover: this.showPreview
          }
        }
      } else if (item.type === 'NewsAd') {
        return {
          attrs: {
            'ad-image': item.image,
            'ad-heading': item.heading
          },
          events: {
            click: this.openAd,
            mouseover: this.trackAdEvent
          }
        }
      }
    }
  }
}
</script>
```
