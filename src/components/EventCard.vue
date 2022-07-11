<script setup>
const props = defineProps({ bets: { type: Object, required: true }, events: { type: Object, required: true }, sport: { type: Object, required: true }, teams: { type: Object, required: true } })

const allEventIds = Object.values(props.sport.eventIds)
const bets = JSON.parse(JSON.stringify(props.bets))
const events = JSON.parse(JSON.stringify(props.events))
const teams = JSON.parse(JSON.stringify(props.teams))

let eventsForSport = events.filter(event => allEventIds.includes(event.id))

//functions
let getTeamNames = (event) => {
  let eventTeamIds = []
  
  for (let i = 0; i < 2; i++) {
    eventTeamIds.push(event[i].id)
  }
  
  let nameData = teams.filter(team => eventTeamIds.includes(team.id))
  
  let names = [capitalize(nameData[0].name), capitalize(nameData[1].name)]
  
  return (names) 
}

let getBets = (event) => {
  let eventBetIds = []
  
  for (let i = 0; i < 2; i++) {
    eventBetIds.push(event[i].betIds[0])
    eventBetIds.push(event[i].betIds[1])
  }
  
  let betIdData = bets.filter(bet => eventBetIds.includes(bet.id))
  
  let lineage = [ betIdData[0].lineage,
  betIdData[1].lineage, 
  betIdData[2].lineage, 
  betIdData[3].lineage, 
  ]

  return (lineage)
  }

let capitalize = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

const logit =  (whtevr) => {
  console.log(whtevr)
}

//run
logit()
</script>

<template>
  <div class="container">
    <div
      v-for="event in eventsForSport"
      :key="event.id"
      class="card"
    >
      <article class="card">
        <div class="team-one">
          <div class="team-name">
            {{ getTeamNames(event.participants)[0] }}
          </div>
          
          <div class="bets">
            {{ getBets(event.participants)[0] }}
            {{ getBets(event.participants)[1] }}
          </div>
        </div>  

        <div class="team-two">
          <div class="team-name">
            {{ getTeamNames(event.participants)[1] }}
          </div>
          
          <div class="bets">
            {{ getBets(event.participants)[2] }}
            {{ getBets(event.participants)[3] }}
          </div> 
        </div>
      </article>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  column-gap: 1em;  
  width: auto;
  overflow-y: scroll;
}
.card{
  color: black;
  background-color: white;
  height: 8em;
  width: 12em;
}
</style>