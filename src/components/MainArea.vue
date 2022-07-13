<script setup>
import { ref } from 'vue';
import EventCard from '../components/EventCard.vue';

const props = defineProps({
  bets: 
  { type: Array, 
  required: true 
  },
  
  events: 
  { type: Array, 
  required: true }, 
  
  sports: { type: Array, 
  required: true }, 
  
  teams: { type: Array, 
  required: true} 
})

const logit =  (whtevr) => {
  console.log(whtevr)
}

let allData = ref({
  bets: {},
  events: {},
  teams: {},
  sports: {},
})

const getAllData = () => {
  let teams = props.teams.map(team => team)
  Object.assign(allData.value.teams, teams)
  let sports = props.sports.map(sport => sport)
  Object.assign(allData.value.sports, sports)
  let events = props.events.map(event => event)
  Object.assign(allData.value.events, events)
  let bets = props.bets.map(bet => bet)
  Object.assign(allData.value.bets, bets)
  
  console.log(allData)
}


getAllData()
logit(allData)
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
          :all-data="allData" 
        />
      </article>
    </div>
  </article>
</template>
