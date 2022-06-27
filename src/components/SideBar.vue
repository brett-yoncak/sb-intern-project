<script setup>
import LogoBlock from '../components/icons/LogoBlock.vue';
import IconEvents from '../components/icons/IconEvents.vue';
import IconHome from '../components/icons/IconHome.vue';
import IconPrefs from '../components/icons/IconPrefs.vue';
import IconSports from '../components/icons/IconSports.vue';
import IconTeams from '../components/icons/IconTeams.vue';

let pages = ['Home', 'Sports', 'Events', 'Teams', 'Preferences' ]
</script>

<template>
  <div class="container">
    <div class="pages-wrapper">
      <div class="logo-block">
        <LogoBlock />
      </div>
      <div
        v-for="page in pages"
        :key="page.id"
        class="page"
      >
        <IconHome
          v-if="page === 'Home'"
          class="icon"
        />
        
        <IconSports
          v-if="page === 'Sports'"
          class="icon"
        />
        
        <IconEvents
          v-if="page === 'Events'"
          class="icon"
        />

        <IconPrefs
          v-if="page === 'Preferences'"
          class="icon"
        />

        <IconTeams
          v-if="page === 'Teams'"
          class="icon"
        />
        
        <p>{{ page }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
}

.logo-block {
    display: flex;
    height: 64px;
    align-items: center;
    justify-content: center;
}

.page {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: #182948;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    cursor: pointer;
}

.pages-wrapper {
    color: white;
}

.logo-block {
    height: 100;
}

.icon {
    padding: 24px
}
</style>
