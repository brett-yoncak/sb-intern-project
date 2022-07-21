<script setup>
import { ref, computed, defineProps } from 'vue';
import EventCard from '../components/EventCard.vue';

const props = defineProps({
  bets: { 
    type: Object, 
    required: true 
  },
  
  events: { 
    type: Object, 
    required: true 
  }, 
  
  sports: { 
    type: Object, 
    required: true 
  }, 
  
  teams: { 
    type: Object, 
    required: true
  } 
})

/* Need:
team1:
team2: 'Name'
team1ML: '+123'
team2ML: '+123'
team1Spread: '+123'
team2Spread:  
*/

// [{
//   name: '',
//   events: [{}]
// }]

// let teamFinder = (eventId) => {
//   let theEvent = props.events.find(event => event.id === eventId)
//   let theTeams = []
  
//   theEvent.participants.forEach(participant => {
//     let team = props.teams.find(team => team.id === participant.id)
//     theTeams.push(team.name)
//   })
//   team1.value = theTeams[0]
//   team2.value = theTeams[1]
//   return (theTeams)
// }

 

/* First attempt --> need to remove 'for' loop
const sportsWithEventsComputed = computed(() => props.sports.map(sport => {
  const theSport = {}
  theSport['name'] = sport.name
  theSport['events'] = props.events.filter(propEvent => {
    for(let i = 0; i < sport.eventIds.length; i++){
      if(propEvent.id == sport.eventIds[i]){
        return propEvent
      }
    }
  })
  sportsWithEvents.push(theSport)
},
console.log(sportsWithEvents),
))
*/

const sportsWithEventsComputed = ref(computed(() => props.sports.map(sport => {
  const theSport = {}
  theSport.name = sport.name
  theSport.events = sport.eventIds.map(id => {
    return props.events.reduce((events, event) => {
      if(event.id === id){
        events.id = id
        events.team1 = props.teams.find(team => team.id === event.participants[0]?.id)
        events.team1 = events.team1?.name
        events.team1ML = props.bets.find(bet => bet.id === event.participants[0]?.betIds[0])
        events.team1ML = events.team1ML?.lineage
        events.team1Spread = props.bets.find(bet => bet.id === event.participants[0]?.betIds[1])
        events.team1Spread = events.team1Spread?.lineage
        events.team2 = props.teams.find(team => team.id === event.participants[1]?.id)
        events.team2 = events.team2?.name
        events.team2ML = props.bets.find(bet => bet.id === event.participants[1]?.betIds[0])
        events.team2ML = events.team2ML?.lineage
        events.team2Spread = props.bets.find(bet => bet.id === event.participants[1]?.betIds[1])
        events.team2Spread = events.team2Spread?.lineage
      }
    return events
    },{})
  })
  return theSport
})))

console.log(sportsWithEventsComputed)


</script>

<template>
  <article class="sports-wrapper">
    <div
      v-for="sport in sportsWithEventsComputed"
      :key="sport.name"
      class="events"
    >
      <header>
        <h1> {{ sport.name }} </h1>
      </header>

      <article>        
        <EventCard
          :sport="sport.events"
        />
      </article>
    </div>
  </article>
</template>
