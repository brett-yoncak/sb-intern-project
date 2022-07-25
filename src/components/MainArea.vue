<script setup>
import { ref, computed, defineProps } from 'vue';
import IconBaseball from '../components/icons/IconBaseball.vue';
import IconBasketball from '../components/icons/IconBasketball.vue';
import IconFootball from '../components/icons/IconFootball.vue';
import IconHockey from '../components/icons/IconHockey.vue';
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

/*
sportsWithEventsComputed
--> Creates an object for each event in the sport.
--> Object contains Event ID, Team info, and Bet info to pass to EventCard.
*/
const sportsWithEventsComputed = ref(computed(() => props.sports.map(sport => {
  const theSport = {
    name: sport.key,
    icon: sportIcons.find(icon => icon.name === sport.key),
    events: sport.eventIds.map(id => {
      const event = props.events.find(eventProp => eventProp.id === id)

      event.teams = {
        team1: props.teams.find(team => team.id === event.participants[0]?.id),
        team2: props.teams.find(team => team.id === event.participants[1]?.id)
      }
      
      event.teambets = {
        team1: {
          spread: props.bets.find(bet => bet.id === event.participants[0].betIds[0]),
          ml: props.bets.find(bet => bet.id === event.participants[0].betIds[1])
        },
        team2: {
          spread: props.bets.find(bet => event.participants[1].betIds[0] === bet.id),
          ml: props.bets.find(bet => event.participants[1].betIds[1] === bet.id)
        }
      }
      return event
      },{})
    }
    return theSport
    }),
))

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
        <span class="header">
          <component
            :is="sport.icon.comp"
            :class="['icon', { 'dark-icon' : sport.icon.name != 'nfl' }]"
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
  padding: 48px 0 0 48px;
}

.header {
  display: flex;
  align-items: center;
  color: #111111;
}

.icon {
  padding-right: 8px;
  min-height: 16px;
}

.dark-icon {
  fill: #000000;
}

.event-card {
  padding-top: 16px;
  padding-bottom: 48px;
}
</style>
