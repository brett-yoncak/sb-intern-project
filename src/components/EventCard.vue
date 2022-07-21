<script setup>
import { defineProps } from 'vue';

const props = defineProps({ 
  sport: {
    type: Array,
    required: true
  }
})

const capitalize = (name) => {
  if(typeof name !== 'string'){
    return ''
  }
  return name.charAt(0).toUpperCase() + name.slice(1)
}
</script>

<template>
  <div class="container">
    <div
      v-for="event in props.sport"
      :key="event.id"
      class="card"
    >
      <header class="header">
        <h2 class="vs">
          {{ capitalize(event.team1) + ' ' + 'vs' + ' ' + capitalize(event.team2) }}
        </h2>
      </header>
      
      <article class="article">
        <div class="info">
          <div class="team">
            <h3 class="team-name">
              {{ capitalize(event.team1) }}
            </h3>  
          </div>  
          
          <div class="bets">
            <button class="lineage">
              {{ event.team1Spread }}
            </button>
            <button class="lineage">
              {{ event.team1ML }}
            </button>
          </div>
        </div>

        <div class="info">
          <div class="team">
            <h3 class="team-name">
              {{ capitalize(event.team2) }}
            </h3>
          </div>
          
          <div class="bets">
            <button class="lineage">
              {{ event.team2Spread }}
            </button>
            <button class="lineage">
              {{ event.team2ML }}
            </button>
          </div>
        </div> 
      </article>
    </div>
  </div>
</template>

<style scoped>
button {
  cursor: pointer;
}
.container {
  display: flex;
  overflow-y: scroll;
  column-gap: 2em;
}

.card { 
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  min-width: 400px;
  max-width: 400px;
  background: white;
  color: black;
}

.article {
  display: flex;
  flex-direction: column;
  row-gap: 2em;
  padding: 3em;
  padding-left: 2em;
  padding-right: 2em;
}
.team-name {
color: black;
}

.info {
  display: flex;
  align-items: center;
}

.bets {
  display: flex;
  column-gap: 3em;
}

.lineage {
  display: flex;
  align-items: center;
  justify-content: center;
  background: gray;
  width: 62px;
  height: 62px;
}

.team {
  width: 100%;
}
.header {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  width: 100%;
  background: gray;
}

.vs{
  font-size: medium;
  margin-left: .5em;
}
</style>