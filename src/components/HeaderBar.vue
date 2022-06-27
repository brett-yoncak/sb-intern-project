<script setup>
import { ref } from 'vue';
import IconBaseball from '../components/icons/IconBaseball.vue';
import IconBasketball from '../components/icons/IconBasketball.vue';
import IconFootball from '../components/icons/IconFootball.vue';
import IconHockey from '../components/icons/IconHockey.vue';

const props = defineProps({ allSports: { type: Array, required: true } })
</script>

<template>
  <div class="container">
    <div class="sports-wrapper">
      <button
        v-for="sport in allSports" 
        :key="sport.key"
        class="sport"
      >
        <IconBaseball
          v-if="sport.key === 'mlb'"
          class="icon"
        />
      
        <IconHockey
          v-if="sport.key === 'nhl'" 
          class="icon"
        />
      
        <IconBasketball
          v-if="sport.key === 'nba'" 
          class="icon"
        />
      
        <IconFootball
          v-if="sport.key === 'nfl'" 
          class="icon"
        />
      
        <p class="button-text">
          {{ sport.key.toUpperCase() }}
        </p>
      </button>
    </div>
  </div>
</template>

<style>
.container {
  width: 100%;
}

.sports-wrapper {
  height: 64px;
  max-width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: scroll;
}

.sport {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 180px;
  transform: skew(-30deg);
  outline: none;
  border: none;
}

button{
  height: 64px;
  transition: background-color ease-in-out .3s;
  background-color: #101c33;
  color: #a7a7a7;
  cursor: pointer;
}

button:hover {
  transition: background-color ease-in-out .3;
  background-color: #2b3648;
  color: #ffff;
}

.button-text {
  transition: color ease-in-out .3;
  transform: skew(30deg);;
  font-size: 16px;
}

.icon {
  min-height: 16px;
  margin-right: 16px;
  transform: skew(30deg);
}
</style>
