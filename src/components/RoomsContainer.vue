<template>
<div class="container">
  <div class="row py-4">
  <div class="col-12">
        <form  class="mx-auto">
        <h3>Filter Rooms</h3>
  <div class="form-row mt-3 ">
    <div class="form-group">
      <input v-model="search" 
 class="form-control" id="inputEmail4" placeholder="Search Rooms">
    </div>
        <div class="form-group col-md-8">

  <button type="submit" class="btn mybtn text-white">Search</button>

 </div>
  </div>

</form>
  </div>
  </div>
 <RoomsAll v-bind:rooms="filter"/> 

</div>
</template>

<script>
import data from '../data'
import RoomsAll from './RoomsAll'
export default {
name:"rooms-container",
components:{RoomsAll},

data(){
return {
rooms:data,
search:''
}},
computed:{
    filter(){
        const rooms = this.rooms.filter(room =>{
            return room.fields.name.match(this.search.toLowerCase())
        })
     return rooms
                 
}
}
}
</script>

<style>

</style>
