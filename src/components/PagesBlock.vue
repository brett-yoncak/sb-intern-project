<script setup>
import IconEvents from '../components/icons/IconEvents.vue';
import IconHome from '../components/icons/IconHome.vue';
import IconPrefs from '../components/icons/IconPrefs.vue';
import IconSports from '../components/icons/IconSports.vue';
import IconTeams from '../components/icons/IconTeams.vue';

const icons = [ 
  { name: 'Home', comp: IconHome },
  { name: 'Sports', comp: IconSports },
  { name: 'Events', comp: IconEvents },
  { name: 'Teams', comp: IconTeams },
  { name: 'Preferences', comp: IconPrefs }
 ] 

</script>

<template>
  <div class="container">
    <nav class="pages-wrapper">
      <button
        v-for="icon in icons"
        :key="icon.name"
        class="page"
      >
        <aside class="icon-wrapper">
          <component
            :is="icon.comp"
            :class="'icon'"
          />
        </aside>

        <p class="page-text">
          {{ icon.name }}
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

button {
    height: 48px;
    background-color: #182948;
    color: #ffff;
    opacity: 60%;    
    cursor: pointer;
    border: none;
    padding-left: 16px;
    margin-left: -16px;
  
  &:hover {
    opacity: 100%;
  }
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
}
</style>
