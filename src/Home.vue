<template>
  <div id="app" >
    <RoomsHero/>
<Services/>
    <div class="container">
          <h2 class="text-center">Featured Rooms</h2>

<Rooms v-bind:rooms="rooms" class="py-4"/>
    </div>
  </div>
</template>

<script>
import Rooms from './components/Rooms.vue'
import RoomsHero from './components/RoomsHero'
import Services from './components/Services'
import data from './data'
export default {
  name: 'home',
  components: {
Rooms,
Services,
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
