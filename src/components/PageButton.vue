<script setup>
const props = defineProps({ button: { type: Object, required: true } })
</script>

<template>
  <div class="container">
    <button
      class="page"
    >
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
  color: #ffff;
  opacity: 60%;    
  cursor: pointer;
  border: none;
    
  &:hover {
    opacity: 100%;
  }
}

.page {
  display: flex;
  width: 100%;
  padding: {
    top: 16px;
    bottom: 16px;
    left: 16px;
  }
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
</style>
