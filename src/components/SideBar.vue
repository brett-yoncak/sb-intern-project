<script setup>
import LogoBlock from '../components/icons/LogoBlock.vue';
import PagesBlock from '../components/PagesBlock.vue';
</script>

<template>
  <div class="container">
    <div class="pages-wrapper">
      <header class="logo-block">
        <LogoBlock />
      </header>

      <main class="pages-block">
        <PagesBlock />
      </main>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.logo-block {
    display: flex;
    height: 64px;
    align-items: center;
    justify-content: center;
}
.pages-block {
    height: 100%;
}
</style>
