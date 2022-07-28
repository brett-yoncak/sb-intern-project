<script setup>
import { defineProps } from 'vue';
import Card from './Card.vue'

const props = defineProps({ 
  events: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="container">
    <div
      v-for="event in events"
      :key="event.id"
    >
      <Card
        :event-id="event.id"
        :teams="event.teams"
        :bets="event.teambets"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  overflow-y: scroll;
  column-gap: 32px;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
