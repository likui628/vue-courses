<template>
  <div>
    <Html>
      <Head>
        <Title>Event Listing</Title>
        <Meta name="description" content="list all events" />
      </Head>
    </Html>

    <h1>Events</h1>
    <EventCard v-for="(event, index) in events" :key="index" :event="event" />
  </div>
</template>

<script>
import EventCard from "@/components/EventCard.vue";

export default {
  components: {
    EventCard,
  },
  async setup() {
    const config = useRuntimeConfig()
    const { data: events } = await useFetch(config.BASE_URL+ "events");

    return { events };
  },
};
</script>
