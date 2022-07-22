<script setup>
import { defineProps } from 'vue';
import Team1Bets from './Team1Bets.vue'
import Team2Bets from './Team2Bets.vue'

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
          {{ event.team1?.name?.toUpperCase() + ' ' + 'vs' + ' ' + event.team2?.name?.toUpperCase() }}
        </h2>
      </header>
      
      <article class="article">
        <div class="row">
          <div class="team">
            <h3 class="team-name">
              {{ capitalize(event.team1?.name) }}
            </h3>
          </div>
          <div class="bets">  
            <div class="lineage">
              <Team1Bets 
                :eventid="event.id"
                :team1id=" event.team1?.id "
                :team1bets="event.team1?.bets"
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="team">
            <h3 class="team-name">
              {{ capitalize(event.team2?.name) }}
            </h3>
          </div>
          <div class="bets">
            <div class="lineage">
              <Team2Bets 
                :eventid="event.id"
                :team2id="event.team2?.id"
                :team2bets="event.team2?.bets"
              />
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  overflow-y: scroll;
  column-gap: 2em;
  font-family: Arial, Helvetica, sans-serif;
}

.card { 
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  min-width: 400px;
  max-width: 400px;
  background: #e7e8e8;
  color: black;
  border: 1px solid #e7e8e8;
}

.article {
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 1em;
  padding: 2em;
}

.team {
display: flex;
grid-area: teams;
width: 100%
}
.team-name {
font-size: 16px;
color: #111111;
}

.bets {
  grid-area: bets;
  display: flex;
  justify-content: flex-end;
}

.lineage {
  color: #111111;
}

.row {
display: grid;
  grid-template-areas:
    'teams bets'
  ;
width: 100%;
}
.header {
  border-radius: 8px 8px 0 0;
  width: 100%;
  background: white;
  border-bottom: 1px solid #b8b7b6;
}

.vs{
  color: #2b4564;
  font-weight: 400;
  font-size: 12px;
  margin-left: .5em;
  letter-spacing: 1.2px;
}
</style>