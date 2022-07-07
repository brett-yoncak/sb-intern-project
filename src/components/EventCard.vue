<script setup>
const props = defineProps({ sport: { type: Object, required: true }, events: { type: Array, required: true }, teams: { type: Array, required: true } })

const logit =  (el) => {
  console.log(el)
}

const allEventIds = Object.values(props.sport.eventIds)


</script>

<template>
  <div class="container">
    <div
      v-for="id in allEventIds"
      :key="id" 
      class="card"
    >
      <article class="card">
        <header @click="logit(sportEvents)">
          {{ id }}
        </header>
        <div class="teams" />
      </article>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  column-gap: 1em;  
  width: auto;
  overflow-y: scroll;
}
.card{
  color: black;
  background-color: white;
}
</style>