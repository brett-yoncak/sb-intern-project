<script setup>
import { inject, onMounted, ref } from 'vue'
import HeaderBar from '../components/HeaderBar.vue';
import SideBar from '../components/SideBar.vue';
import MainArea from '../components/MainArea.vue';

const axios = inject('axios')

// data
const allSports = ref([]);
const events = ref([]);
const bets = ref([]);
const teams = ref([]);
const sports = ref([]);

// functions
const getAllSports = () => {
  axios.get('/all-sports')
    .then(response => {
      allSports.value = response.data
      console.log(allSports)
    })
}

const getEvents = () => {
  axios.get('/events')
    .then(response => {
      events.value = response.data
      console.log(events)
    })
}

const getBets = () => {
  axios.get('/bets')
    .then(response => {
      bets.value = response.data
      console.log(bets)
    })
}

const getTeams = () => {
  axios.get('/teams')
    .then(response => {
      teams.value = response.data
      console.log(teams)
    })
}

const getSports = () => {
  axios.get('/sports')
    .then(response => {
      sports.value = response.data
      console.log(sports)
    })
}

const logit = (whtevr) => {
  console.log(whtevr)
}

// setup
onMounted(() => {
    getAllSports() 
    getBets()
    getEvents()
    getSports()
    getTeams()
});
</script>

<template>
  <div class="grid-container">
    <header class="header">
      <HeaderBar
        :all-sports="allSports"
        :name="allSports.name"
      />
    </header>
    <aside class="sidebar">
      <SideBar />
    </aside>
    
    <article class="content">
      <MainArea
        :sports="sports"
        :events="events"
        :teams="teams"
        :bets="bets"
      />
    </article>  
  </div>
</template>

<style lang="scss" scoped>
.grid-container {
  display: grid;
  height: 100%;
  grid-template-rows: 64px auto;
  grid-auto-columns: 240px auto;
  grid-template-areas:
    'sidebar header'
    'sidebar content'
  ;
}

.header {
  grid-area: header;
  overflow-x: scroll;
}

.sidebar {
  grid-area: sidebar;
  overflow-y: scroll;
  background-color: #182948;
}

.content {
  grid-area: content;
  overflow-y: scroll;
  /* placeholder styles */
  color: #ffff;
}
</style>
