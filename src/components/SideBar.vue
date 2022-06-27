<script setup>
import LogoBlock from '../components/icons/LogoBlock.vue';

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
}
.pages-wrapper {
    color: white;
}

.logo-block {
    height: 100;
}
</style>
