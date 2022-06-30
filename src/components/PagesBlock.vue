<script setup>
import { markRaw } from 'vue';
import IconEvents from '../components/icons/IconEvents.vue';
import IconHome from '../components/icons/IconHome.vue';
import IconPrefs from '../components/icons/IconPrefs.vue';
import IconSports from '../components/icons/IconSports.vue';
import IconTeams from '../components/icons/IconTeams.vue';
import PageButtons from '../components/PageButtons.vue';

const sidebarButtons = markRaw([ 
  { name: 'Home', comp: IconHome },
  { name: 'Sports', comp: IconSports },
  { name: 'Events', comp: IconEvents },
  { name: 'Teams', comp: IconTeams },
  { name: 'Preferences', comp: IconPrefs }
 ]) 

</script>

<template>
  <nav class="pages-wrapper">
    <div>
      <PageButtons :buttons="sidebarButtons" />
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.pages-wrapper {    
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    row-gap: 8px;
    color: white;
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
