<script setup>
import LogoBlock from '../components/icons/LogoBlock.vue';
import PagesBlock from '../components/PagesBlock.vue';
</script>

<template>
  <div class="container">
    <main class="pages-wrapper">
      <header class="logo-block">
        <LogoBlock />
      </header>
      <div class="pages-block">
        <PagesBlock />
      </div>
    </main>
  </div>
</template>

<style scoped scss>
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

.logo-block {
        height: 100;
    }
</style>
