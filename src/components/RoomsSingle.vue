<template>
    <div class="container py-4">
        <div v-for="room in roomArr" :key="room.sys.id">
<h1 class="text-capitalize">{{room.fields.name}}</h1>
<div class="row">
    <div class="col-md-6 col-xs-12">
        <div class="row">
            <div class="col-md-6 col-xs-12" :key="img.index"  v-for="img in room.fields.images" 
 >
        <img :src="img.fields.file.url" class="img-fluid my-3" alt="">
            </div>
        </div>
    </div>
    <div class="col-md-6">
        <h3>Description</h3>
        <p class="lead">
        {{room.fields.description}}
        </p></div>
</div>
<div class="row">
    <div class="col-md-6">
        <h3>Extras</h3>
        <ul>
            <li v-for="item in room.fields.extras" :key="item.index">{{item}}</li>
        </ul>
    </div>
    <div class="col-md-6">
        <h3>Details</h3>
        {{room.fields.price}}
                {{room.fields.size}}

    </div>
</div>
</div>
    </div>
</template>

<script>
import data from '../data'
export default {
name:"rooms-single",
data(){
    return {
rooms:data,
slug:this.$route.params.slug,
}},
computed:{
roomArr:function(){
    const slug = this.slug
    const room = this.rooms.filter(room => {
        return room.fields.slug === slug})
return room
}
}
}
</script>

<style>

</style>
