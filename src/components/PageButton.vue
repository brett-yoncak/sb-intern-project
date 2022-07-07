<script setup>
const props = defineProps({ button: { type: Object, required: true } })
</script>

<template>
  <div class="container">
    <button class="page">
      <aside class="icon-wrapper">
        <component :is="button.comp" />
      </aside>

      <span class="page-text">
        {{ button.name }}
      </span>
    </button>
  </div>
</template>

<style lang="scss" scoped>
button {
  background-color: transparent;
  color: rgb(160, 160, 160);
  fill:rgb(160, 160, 160);
  cursor: pointer;
  border: none;
    
  &:hover {
    fill: #ffff;
    color: #ffff;
  }
}

.page {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 16px;
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
</style>
