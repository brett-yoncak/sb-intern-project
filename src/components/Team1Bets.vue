<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  eventid: {
    type: String,
    required: true
  },
  
  team1id: {
    type: String,
    default: '',    required: true
  },

  team1bets: {
    type: Object,
    required: true
  },
})

const submit = (eventId, teamId, betId) => {
  console.log(`Event ID: ${eventId}, Team ID: ${teamId}, Bet ID: ${betId}`)
  alert('YOU DID IT!')
}
</script>

<template>
  <div class="button-wrapper">
    <button
      class="lineage"
      @click="submit(props.eventid, props?.team1id, props.team1bets?.spread?.id)"
    >
      {{ props.team1bets?.spread?.lineage }}
    </button>
    
    <button
      class="lineage"
      @click="submit(props.eventid, props?.team1id, props.team1bets?.ml?.id)"
    >
      {{ props.team1bets?.ml?.lineage }}
    </button>
  </div>
</template>

<style lang="scss" scoped>
button {
  cursor: pointer;
  border: none;

  &:hover {
    border: 1px solid #1555d0
  }
}

.button-wrapper {
  display: flex;
  width: 100%;
  column-gap: 1em;
}
.lineage {
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 20%), 0 2px 1px -1px rgb(0 0 0 / 12%), 0 1px 1px 0 rgb(0 0 0 / 14%);
  background: white;
  width: 62px;
  height: 62px;
}
</style>