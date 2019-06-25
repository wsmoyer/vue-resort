<template>
  <div id="app" >
    <RoomsHero/>
    <div class="container">
<Rooms v-bind:rooms="rooms" class="py-4"/>
    </div>
  </div>
</template>

<script>
import Rooms from './components/Rooms.vue'
import RoomsHero from './components/RoomsHero'
import data from './data'
export default {
  name: 'home',
  components: {
Rooms,

RoomsHero
},
data(){
return {
rooms:data,
}}
}
</script>

<style>
*{
  margin: 0;
  padding:0;
}
</style>
