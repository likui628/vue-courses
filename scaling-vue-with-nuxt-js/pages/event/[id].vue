<template>
  <div>
    <Html>
      <Head v-if="event">
        <Title>{{ event.title }}</Title>
        <Meta name="description" :content="event.title + event.description" />
      </Head>
    </Html>
    
    <div class="event-header">
      <span class="eyebrow"> @{{ event.time }} on {{ event.date }} </span>
      <h1 class="title">
        {{ event.title }}
      </h1>
      <h5>Organized by {{ event.organizer ? event.organizer.name : "" }}</h5>
      <h5>Category: {{ event.category }}</h5>
    </div>

    <span name="map">
      <h2>Location</h2>
    </span>

    <address>{{ event.location }}</address>

    <h2>Event details</h2>
    <p>{{ event.description }}</p>

    <h2>
      Attendees
      <span class="badge -fill-gradient">
        {{ event.attendees ? event.attendees.length : 0 }}
      </span>
    </h2>
    <ul class="list-group">
      <li
        v-for="(attendee, index) in event.attendees"
        :key="index"
        class="list-item"
      >
        <b>{{ attendee.name }}</b>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async setup() {
    const route = useRoute()
    const config = useRuntimeConfig()

    const { data: event } = await useFetch(
      `${ config.BASE_URL }events/${ route.params.id }`
    );

    return { event };
  },
};
</script>
