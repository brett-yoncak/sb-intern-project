<script>
const props = defineProps({ allSports: { type: Array, required: true } }, { bets: {type: Array, required: true }})</script>

<template>
  <div class="container">
    <article class="sports">
      <Sports />
    </article>
  </div>
</template>