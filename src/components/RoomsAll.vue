<template>
<div class="row">

    <div v-for="room in rooms" :key="room.sys.id" class="col-xs-4"  >
<Room v-bind:room="room"/>
    </div>
</div>
</template>

<script>
import Room from './Room'
export default {
name:"rooms-all",
components:{Room},

props:['rooms'],


}

</script>

<style>

</style>
