<script setup>
import { defineProps } from 'vue';
import TeamBets from '@/components/TeamBets.vue'

const props = defineProps({ 
  eventId: {
    type: String,
    required: true
  },

  teams: {
    type: Object,
    required: true
  },

  bets: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="card">
    <header class="header">
      <h2 class="vs">
        {{ `${teams.team1.vs} vs ${teams.team2.vs}` }}
      </h2>
    </header>
      
    <article class="article">
      <div class="team1">
        <h3 class="team-name">
          {{ teams.team1.name }}
        </h3>
      </div>

      <div class="bets1">  
        <TeamBets 
          :event-id="eventId"
          :team-id="teams.team1.id"
          :team-bets="bets.team1"
        />
      </div>

      <div class="team2">
        <h3 class="team-name">
          {{ teams.team2.name }}
        </h3>
      </div>

      <div class="bets2">
        <TeamBets
          :event-id="eventId"
          :team-id="teams.team2.id"
          :team-bets="bets.team2"
        />
      </div>
    </article>
  </div>
</template>

<style lang="scss" scoped>
.card { 
  display: grid;
  grid-template-areas:
    'header header'
    'body body'
  ;
  grid-auto-rows: 40px auto;
  grid-auto-columns: 50% 50%;
  border-radius: 8px;
  min-width: 400px;
  max-width: 400px;
  background: #e7e8e8;
  color: black;
  border: 1px solid #e7e8e8;
}

.article {
  grid-area: body;
  display: grid;
  grid-template-areas:
    'team1 bets1'
    'team2 bets2'
  ;
  grid-auto-columns: 50% 50%;
  padding: 24px 32px 24px 32px;
  row-gap: 16px;
}

.team1 {
  grid-area: team1;
}
.team2 {
  grid-area: team2;
}

.team-name {
  font-size: 16px;
  color: #111111;
}

.bets1, .bets2 {
  display: flex;
  column-gap: 16px;
  justify-content: flex-end;
}

.bets1 {
  grid-area: bets1;
}
.bets2 {
  grid-area: bets2;
}

.lineage {
  color: #111111;
}

.header {
  display: flex;
  grid-area: header;
  border-radius: 8px 8px 0 0;
  width: 100%;
  background: white;
  border-bottom: 1px solid #b8b7b6;
}

.vs {
  align-self: center;
  color: #2b4564;
  font-weight: 400;
  font-size: 12px;
  margin-left: 8px;
  letter-spacing: 1.2px;
}
</style>
