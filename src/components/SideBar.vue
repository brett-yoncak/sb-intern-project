<script setup>
let pages = ['Home', 'Sports', 'Events', 'Teams', 'Preferences' ]
</script>

<template>
  <div class="container">
    <div class="pages-wrapper">
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
