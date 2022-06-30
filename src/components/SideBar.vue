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

      <nav class="pages-block">
        <PagesBlock />
      </nav>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: column;
    background-color: #182948;
    height: 100vh;
}

.logo-block {
    display: flex;
    width: 217px;
    padding: 16px;
    align-items: center;
    justify-content: center;
    background-color: #101c33;
}

</style>
