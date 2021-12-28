<template>
  <div class="other red" :class="size.l">Some Other Info</div>
  <div class="desc" :class="color.purple">description</div>
  <my-comp />
</template>

<script setup>
import MyComp from "./components/my-comp.vue";
</script>

<style>
/* #app {
  padding: 32px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
} */
</style>

<style scoped>
.other {
  font-size: 2rem;
}

.desc {
  font-size: 1rem;
}

:deep(.other) {
  color: green;
}
</style>

<style module="color">
.purple {
  color: purple;
}
</style>

<style module="size">
.s {
  font-size: 2rem;
}

.m {
  font-size: 3rem;
}

.l {
  font-size: 4rem;
}
</style>
