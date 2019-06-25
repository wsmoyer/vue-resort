<template>
    <div class="row p-2">
      <div class="col-md-12">
      <div class="row">
        <div class="col-md-8">
                <h3 class="text-capitalize">{{room.fields.name}}</h3>

                  <img v-for="image in room.fields.images" :src="image.fields.file.url" class="img-fluid p-1" :key="image.index" v-on:click="imgClick(image.index)" />

        </div>
        <div class="col-md-4">
                <p className="room-info">{{room.fields.description}}</p>
      <h6>${{room.fields.price}}   <span>per night</span></h6>
        
      <router-link tag="button" class="btn btn-primary" :to="{ name: 'rooms-single', params:{ slug:room.fields.slug }  }">
  <a class="text-white text-capitalize" >{{room.fields.name}}</a>

</router-link>
<div v-if="imgClicked">

</div>
        </div>
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
.img-fluid{
    max-width:100%;
    height:200px;
}
</style>
