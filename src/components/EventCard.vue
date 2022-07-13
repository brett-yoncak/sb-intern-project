<script setup>


// const props = defineProps({ 
//   sport: {
//     type: Object,
//     required: true
//   },

//   allData: { 
//     type: Array,
//     required: true 
//   }
// })

// const allEventIds = Object.values(props.sport.eventIds)
// let eventsForSport = props.allData.filter(event => allEventIds.includes(event.id))

//functions
// let getTeamNames = (event) => {
//   let eventTeamIds = []
  
//   for (let i = 0; i < 2; i++) {
//     eventTeamIds.push(event[i].id)
//   }
  
//   let nameData = props.teams.filter(team => eventTeamIds.includes(team.id))

//   let names = [capitalize(nameData[0].name), capitalize(nameData[1].name)]

//   return (names) 
// }

// let getBets = (event) => {
//   let eventBetIds = []
  
//   for (let i = 0; i < 2; i++) {
//     eventBetIds.push(event[i].betIds[0])
//     eventBetIds.push(event[i].betIds[1])
//   }
  
//   let betIdData = props.bets.filter(bet => eventBetIds.includes(bet.id))
  
//   let lineage = [ 
//     betIdData[0].lineage,
//     betIdData[1].lineage, 
//     betIdData[2].lineage, 
//     betIdData[3].lineage, 
//   ]

//   return (lineage)
//   }

let capitalize = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

const logit =  (whtevr) => {
  console.log(whtevr)
}

//run
logit(props.allData)
</script>

<template>
  <div class="container">
    <div
      class="card"
    >
      <article class="card">
        <div class="team-one">
          <div class="team-name" />
          
          <div class="bets" />
        </div>  

        <div class="team-two">
          <div class="team-name">
            <!-- {{ getTeamNames(event.participants)[1] }} -->
          </div>
          
          <div class="bets">
            <!-- {{ getBets(event.participants)[2] }}
            {{ getBets(event.participants)[3] }} -->
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