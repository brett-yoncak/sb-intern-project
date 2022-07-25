<script setup>
import { defineProps } from 'vue';
import TeamBets from './TeamBets.vue'

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
  return `${name.charAt(0).toUpperCase()}${name.slice(1)}`
}

/* vs
--> converts both team's names to uppercase
*/  
const vs = (team1, team2) => {
  const team1Upper = team1?.name?.toUpperCase()
  const team2Upper = team2?.name?.toUpperCase()
    if(typeof team1 !== 'object' && typeof team2 !== 'object'){
    return ''
  }
  return `${team1Upper} vs ${team2Upper}`
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
          {{ vs(event.teams?.team1, event.teams?.team2) }}
        </h2>
      </header>
      
      <article class="article">
        <div class="row">
          <div class="team">
            <h3 class="team-name">
              {{ capitalize(event.teams?.team1?.name) }}
            </h3>
          </div>

          <div class="bets">  
            <TeamBets 
              :eventid="event.id"
              :teamid="event.teams?.team1?.id"
              :teambets="event.teambets?.team1"
            />
          </div>
        </div>

        <div class="row">
          <div class="team">
            <h3 class="team-name">
              {{ capitalize(event.teams?.team2?.name) }}
            </h3>
          </div>

          <div class="bets">
            <TeamBets 
              :eventid="event.id"
              :teamid="event.teams?.team2?.id"
              :teambets="event.teambets?.team2"
            />
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
  column-gap: 32px;
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
  row-gap: 16px;
  padding: 32px;
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
  column-gap: 16px
  ;
}

.lineage {
  color: #111111;
}

.row {
  display: grid;
  grid-template-areas:
    'teams bets'
  ;
  grid-auto-columns: 50% 50%;

  width: 100%;
}
.header {
  border-radius: 8px 8px 0 0;
  width: 100%;
  background: white;
  border-bottom: 1px solid #b8b7b6;
}

.vs {
  color: #2b4564;
  font-weight: 400;
  font-size: 12px;
  margin-left: 8px;
  letter-spacing: 1.2px;
}
</style>
