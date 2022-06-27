<script setup>
import { onMounted, inject, ref } from 'vue'
import HeaderBar from '../components/HeaderBar.vue';
import SideBar from '../components/SideBar.vue';

const axios = inject('axios')

// data
const allSports = ref([]);
const events = ref([]);
const bets = ref([]);
const teams = ref([]);

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

// setup
onMounted(() => {
    getAllSports() 
    getEvents()
    getBets()
    getTeams()
});
</script>

<template>
  <div class="grid-container">
    <div class="header">
      <HeaderBar
        :all-sports="allSports"
        :name="allSports.name"
      />
    </div>
    <div class="sidebar">
      <SideBar />
    </div>
    <div class="body">
      body
    </div>
  </div>
</template>

<style scoped>
.grid-container {
    display: grid;
    grid-template-rows: 20% auto;
    grid-auto-columns: 240px auto;
    grid-template-areas:
        '🟨 🟪'
        '🟨 🟥'
    ;
}

.header {
    grid-area: 🟪;
}

.sidebar {
    grid-area: 🟨;
}

.body {
    grid-area: 🟥;
}
</style>
