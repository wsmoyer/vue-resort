<template>
<div class="row">
    <div v-for="room in rooms" :key="room.sys.id" class="col-xs-4"  >
<Room v-bind:room="room" v-if="room.fields.featured"/>
    </div>
</div>
</template>

<script>
import Room from './Room'
export default {
name:"Rooms",
components:{Room},

props:['rooms'],
data(){
    return{
    featured:true}
},
computed:{

}
}

</script>

<style>

</style>
