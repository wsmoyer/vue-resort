<template>
    <div class="row py-4">
        <div class="col-lg-8 col-xs-12">
                <h4 class="text-capitalize text-center">{{room.fields.name}}</h4>
<div class="row">
  <div class="col-lg-6" v-for="image in room.fields.images" :key="image.index" >
                  <img  :src="image.fields.file.url" class="img-fluid p-1" v-on:click="imgClick(image.index)" />
  </div>
</div>
        </div>
        <div class="col-lg-4 col-xs-12">
                <p className="room-info">{{room.fields.description}}</p>
      <h6>${{room.fields.price}}   <span>per night</span></h6>
        
      <router-link tag="button" class="btn mybtn" :to="{ name: 'rooms-single', params:{ slug:room.fields.slug }  }">
  <a class="text-white text-capitalize" >{{room.fields.name}}</a>

</router-link>
<div v-if="imgClicked">

</div>
        </div>
      </div>
  
  

</template>

<script>
export default {
name:"Room",
props:['room'],
data(){
  return {
  imgClicked:false}
},
methods:{
    imgClick(index){
       this.imgClicked = true
    }
}
}

</script>

<style scoped>


</style>
