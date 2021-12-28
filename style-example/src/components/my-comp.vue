<script setup>
import { ref } from "vue";
const theme = ref({ color: "red" });

const changeColor = () => {
  theme.value.color = "green";
};
</script>
<template>
  <div class="my-comp">
    <div class="info">
      <h3>Information Box</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. ipsam fugiat similique
        totam quisquam ratione magni dicta labore distinctio laborum inventore quasi!
      </p>
    </div>
    <div class="other">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
  </div>
  <button @click="changeColor">Green</button>
</template>

<style scoped>
.my-comp {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.info {
  box-shadow: 2px 5px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 25rem;
  width: 25rem;
  margin: 0 auto;
  background: gainsboro;
  color: rebeccapurple;
  font-size: 2rem;
  align-items: center;
}
.other {
  font-weight: bold;
  font-size: 1.5rem;
  margin-top: 0.5rem;
  font-style: italic;
}
:global(.red) {
  color: red;
}

p {
  color: v-bind("theme.color");
}
</style>
