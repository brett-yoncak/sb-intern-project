<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  eventid: {
    type: String,
    required: true
  },
  
  teamid: {
    type: String,
    default: '', 
    required: true
  },

  teambets: {
    type: Object,
    required: true
  },
})

const submit = (eventId, teamId, betId) => {
  const submission = {
    event: eventId,
    team: teamId,
    bet: betId 
  }
  console.log(submission)
  alert('YOU DID IT!')
}
</script>

<template>
  <div
    v-for="bet in props.teambets"
    :key="bet.id"
  >
    <button 
      class="lineage"
      @click="submit(props.eventid, props?.teamid, props.teambets?.spread?.id)"
    >
      {{ bet.lineage }}
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

.lineage {
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 20%), 0 2px 1px -1px rgb(0 0 0 / 12%), 0 1px 1px 0 rgb(0 0 0 / 14%);
  background: white;
  color: #111111;
  width: 62px;
  height: 62px;
}
</style>
