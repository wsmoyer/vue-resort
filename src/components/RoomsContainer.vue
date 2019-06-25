<template>
<div class="container">
        <form>
        <h3>Filter Rooms</h3>
  <div class="form-row mt-3">
    <div class="form-group col-md-4">
      <input v-model="search" 
 class="form-control" id="inputEmail4" placeholder="Search Rooms">
    </div>
        <div class="form-group col-md-8">

  <button type="submit" class="btn  btn-primary">Search</button>

 </div>
  </div>

</form>
 <RoomsAll v-bind:rooms="filter"/> 

</div>
</template>

<script>
import data from '../data'
import RoomsAll from './RoomsAll'
import RoomSearch from './RoomSearch'
export default {
name:"rooms-container",
components:{RoomsAll,RoomSearch},

data(){
return {
rooms:data,
search:''
}},
computed:{
    filter(){
        const rooms = this.rooms.filter(room =>{
            return room.fields.name.match(this.search)
        })
     
        return rooms
}
}
}
</script>

<style>

</style>
