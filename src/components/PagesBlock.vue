<script setup>
import IconEvents from '../components/icons/IconEvents.vue';
import IconHome from '../components/icons/IconHome.vue';
import IconPrefs from '../components/icons/IconPrefs.vue';
import IconSports from '../components/icons/IconSports.vue';
import IconTeams from '../components/icons/IconTeams.vue';

let pages = ['Home', 'Sports', 'Events', 'Teams', 'Preferences' ]

</script>

<template>
  <div class="container">
    <nav class="pages-wrapper">
      <button
        v-for="page in pages"
        :key="page.id"
        class="page"
      >
        <aside class="icon-wrapper">
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
        </aside>

        <p class="page-text">
          {{ page }}
        </p>
      </button>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: column;
}

.pages-wrapper {    
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    row-gap: 8px;
    color: white;
    padding-left: 16px;
    padding-top: 8px;
    background-color: #182948; 
    height: 100vh;
    overflow: hidden;
}

button{
  height: 48px;
  background-color: #182948;
  color: #a7a7a7;
  cursor: pointer;
  border: none;
  padding-left: 16px;
  margin-left: -16px;
}

button:hover {
  color: #ffff;
  opacity: 100%;
}

.page {
    display: flex;
    justify-content: left;
    align-items: center;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    cursor: pointer;
}

.page-text {
      margin-left: 16px;
}

.icon-wrapper {
  height: 18px;
  width: 18px;
}

.icon {
  display: inline-flex;
  align-self: center;
  justify-self: center;
}

.icon:hover{
opacity: 100%;
}
</style>