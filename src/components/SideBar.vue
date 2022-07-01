<script setup>
import IconEvents from '../components/icons/IconEvents.vue';
import IconHome from '../components/icons/IconHome.vue';
import IconPrefs from '../components/icons/IconPrefs.vue';
import IconSports from '../components/icons/IconSports.vue';
import IconTeams from '../components/icons/IconTeams.vue';
import LogoBlock from '../components/icons/LogoBlock.vue';
import PageButton from '../components/PageButton.vue';

const sidebarButtons = ([ 
  { name: 'Home', comp: IconHome },
  { name: 'Sports', comp: IconSports },
  { name: 'Events', comp: IconEvents },
  { name: 'Teams', comp: IconTeams },
  { name: 'Preferences', comp: IconPrefs }
 ]) 
</script>

<template>
  <div class="container">
    <div class="pages-wrapper">
      <header class="logo-block">
        <LogoBlock />
      </header>

      <nav class="pages-block">
        <PageButton
          v-for="(button, index) in sidebarButtons"
          :key="index"
          :button="button"
        />
      </nav>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: column;
    background-color: #182948;
    flex-grow: 1!important;
    height: 100%;
}

.logo-block {
    display: flex;
    max-width: 240px;
    padding: 16px;
    align-items: center;
    justify-content: center;
    background-color: #101c33;
}
</style>
