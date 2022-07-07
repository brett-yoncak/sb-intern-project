<script setup>
import EventCard from '../components/EventCard.vue';
const props = defineProps({ sports: { type: Array, required: true }, events: { type: Array, required: true }, teams: { type: Array, required: true} })
</script>

<template>
  <article class="sports-wrapper">
    <div
      v-for="sport in sports"
      :key="sport.key"
      class="sport"
    >
      <header>
        <span> {{ sport.key.toUpperCase() }}</span>
      </header>

      <article>
        <EventCard
          :sport="sport" 
          :events="events" 
          :teams="teams" 
        />
      </article>
    </div>
  </article>
</template>
