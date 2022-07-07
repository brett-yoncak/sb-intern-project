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
    })
}

const getEvents = () => {
  axios.get('/events')
    .then(response => {
      events.value = response.data
    })
}

const getBets = () => {
  axios.get('/bets')
    .then(response => {
      bets.value = response.data
    })
}

const getTeams = () => {
  axios.get('/teams')
    .then(response => {
      teams.value = response.data
    })
}

const getSports = () => {
  axios.get('/sports')
    .then(response => {
      sports.value = response.data
    })
}

const logit = (el) => {
  console.log(el)
}

// setup
onMounted(() => {
    getAllSports() 
    getEvents()
    getBets()
    getTeams()
    getSports()
    logit()
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
