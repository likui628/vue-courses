<template>
  <div>
    <Html>
      <Head>
        <Title>Event {{ id }}</Title>
        <Meta name="description" content="create an event" />
      </Head>
    </Html>
    <h1>Event {{ id }}</h1>
  </div>
</template>

<script>
export default {
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
};
</script>
