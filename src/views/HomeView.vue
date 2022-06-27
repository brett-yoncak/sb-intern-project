<script setup>
import { onMounted, inject, ref } from 'vue'
import HeaderBar from '../components/HeaderBar.vue';
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
  <HeaderBar
    :all-sports="allSports"
    :name="allSports.name"
  />
</template>
