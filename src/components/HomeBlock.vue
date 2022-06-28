<script setup>
import IconHome from '../components/icons/IconHome.vue';
</script>

<template>
  <div class="container">
    <button class="page">
      <aside class="icon-wrapper">
        <IconHome />
      </aside>

      <span class="page-text">
        Home
      </span>
    </button>
  </div>
</template>

<style lang="scss" scoped>

.container {
    display: flex;
}

button {
    background-color: transparent;
    color: #ffff;
    opacity: 60%;    
    cursor: pointer;
    border: none;
    
  &:hover {
    opacity: 100%;
  }
}

.page {
    padding-top: 16px;
    padding-bottom: 16px;
    display: flex;
    width: 100%;
    justify-content: left;
    align-items: center;
    font-size: 16px;
    padding-left: 16px;
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
