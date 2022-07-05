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
    <nav class="sports-wrapper">
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
      
        <span class="button-text">
          {{ sport.key.toUpperCase() }}
        </span>
      </button>
    </nav>
  </div>
</template>

<style lang="scss" scoped >
.container {
  height: 100%;
}
.sports-wrapper {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sport {
  height: 100%;
  min-width: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  transform: skew(-30deg);
  padding: 24px;
}

button{
  transition: background-color ease-in-out .3s;
  background-color: #101c33;
  cursor: pointer;
  
  &:hover {
    transition: background-color ease-in-out .3s;
    background-color: #2b3648;
    color: #ffff;
  }
}

.button-text {
  transform: skew(30deg);;
  font-size: 16px;
  color: #ffff;
}

.icon {
  min-height: 16px;
  margin-right: 16px;
  transform: skew(30deg);
}
</style>
