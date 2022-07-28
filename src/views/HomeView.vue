<script setup>
import { inject, onMounted, ref } from 'vue'
import HeaderBar from '../components/HeaderBar.vue';
import SideBar from '../components/SideBar.vue';
import MainArea from '../components/MainArea.vue';

const axios = inject('axios')

// data
const allSports = ref([]);
const sports = ref([]);
const events = ref([]);
const teams = ref([]);
const bets = ref([]);

// functions
const getAllSports = () => {
  axios.get('/all-sports')
    .then(response => {
      allSports.value = response.data
    })
}

  const getSports = () => {
    axios.get('/sports')
      .then(response => {
        sports.value = response.data
      })
  }

const getEvents = () => {
  axios.get('/events')
    .then(response => {
      events.value = response.data
    })
}

  const getTeams = () => {
    axios.get('/teams')
      .then(response => {
        teams.value = response.data
      })
  }

const getBets = () => {
  axios.get('/bets')
    .then(response => {
      bets.value = response.data
    })
}

// setup
onMounted(() => {
  getAllSports() 
  getSports()
  getEvents()
  getTeams()
  getBets()
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
        v-if="sports.length && events.length && teams.length && bets.length"
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
}
</style>
