
<template>
  {{"test"}}
  <Coordinate 
    brand="naver"
    ip= "10.10.10.9797"
    date="2022-02-03 13:13:13"/>
</template>
<script setup lang="ts">
import Coordinate from './components/Coordinate.vue'
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
