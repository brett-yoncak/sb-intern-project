<script setup>
import IconBaseball from '@/components/icons/IconBaseball.vue';
import IconBasketball from '@/components/icons/IconBasketball.vue';
import IconFootball from '@/components/icons/IconFootball.vue';
import IconHockey from '@/components/icons/IconHockey.vue';

const sports = [  
  { name: 'MLB', comp: IconBaseball },
  { name: 'NBA', comp: IconBasketball },
  { name: 'NFL', comp: IconFootball },
  { name: 'NHL', comp: IconHockey },
]
</script>

<template>
  <div class="container">
    <nav class="sports-wrapper">
      <button
        v-for="sport in sports" 
        :key="sport.name"
        class="sport"
      >
        <component
          :is="sport.comp"
          class="icon"
        />

        <span class="button-text">
          {{ sport.name }}
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
