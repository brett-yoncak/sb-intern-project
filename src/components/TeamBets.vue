<script setup>
import { defineProps, inject } from 'vue';

const axios = inject('axios')

const props = defineProps({
  eventId: {
    type: String,
    required: true
  },
  
  teamId: {
    type: String,
    required: true
  },

  teamBets: {
    type: Object,
    required: true
  },
})

const postBet = (id) => {
axios
  .post('/submit', {
    'eventId': `${props.eventId}`,
    'betId': `${id}`,
    'teamId': `${props.teamId}`
  })
  .then(response => {
    console.log(response)
  })
  .catch(error => {
    console.log(error)
  })
}
</script>

<template>
  <div
    v-for="bet in teamBets"
    :key="bet.id"
  >
    <button
      class="lineage"
      @click="postBet(bet.id)"
    >
      {{ bet.lineage }}
    </button>
  </div>
</template>

<style lang="scss" scoped>
button {
  cursor: pointer;
  border: none;

  &:hover {
    border: 1px solid #1555d0
  }
}

.lineage {
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 20%), 0 2px 1px -1px rgb(0 0 0 / 12%), 0 1px 1px 0 rgb(0 0 0 / 14%);
  background: white;
  color: #111111;
  width: 62px;
  height: 62px;
}
</style>
