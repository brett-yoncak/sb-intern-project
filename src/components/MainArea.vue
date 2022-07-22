<script setup>
import { ref, computed, defineProps } from 'vue';
import IconBaseball from '../components/icons/IconBaseballDark.vue';
import IconBasketball from '../components/icons/IconBasketballDark.vue';
import IconFootball from '../components/icons/IconFootball.vue';
import IconHockey from '../components/icons/IconHockeyDark.vue';
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

const sportIcons = [ 
  { name: 'mlb', comp: IconBaseball },
  { name: 'nba', comp: IconBasketball },
  { name: 'nfl', comp: IconFootball },
  { name: 'nhl', comp: IconHockey },
 ] 
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
  theSport.name = sport.key
  theSport.icon = sportIcons.find(icon => icon.name === sport.key)
  theSport.events = sport.eventIds.map(id => {
    return props.events.reduce((events, event) => {
      if(event.id === id){
        events.id = id
        events.team1 = props.teams.find(team => team.id === event.participants[0]?.id)
        events.team1 = { 
          id: events.team1?.id,
          name: events.team1?.name,
          bets: { 
            ml: props.bets.find(bet => bet.id === event.participants[0]?.betIds[0]),
            spread: props.bets.find(bet => bet.id === event.participants[0]?.betIds[1])
          }
        }
        events.team2 = props.teams.find(team => team.id === event.participants[1]?.id)
        events.team2 = {
          id: events.team2?.id,
          name: events.team2?.name,
          bets: {
            ml: props.bets.find(bet => bet.id === event.participants[1]?.betIds[0]),
            spread: props.bets.find(bet => bet.id === event.participants[1]?.betIds[1])
          }
        }
      }
    return events
    },{})
  })
  return theSport
})))
</script>

<template>
  <article class="sports-wrapper">
    <div
      v-for="sport in sportsWithEventsComputed"
      :key="sport.name"
      class="events"
    >
      <header>
        <span class="header">
          <component
            :is="sport.icon.comp"
            class="icon"
          />
            
          {{ sport.name.toUpperCase() }}
        </span>
      </header>

      <article class="event-card">        
        <EventCard
          :sport="sport?.events"
        />
      </article>
    </div>
  </article>
</template>

<style scoped>
.sports-wrapper {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
  background: white;
}

.header {
  display: flex;
  align-items: center;
  color: #111111;
  padding-top: 3em
}

.icon {
  padding-right: .5em;
  min-height: 16px;
}

.events {
  padding-left: 2em;
}

.event-card {
  padding-top: 1em;
}
</style>
