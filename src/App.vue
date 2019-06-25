<template>
  <div id="app">
        <!-- <router-view/> -->
            <Navbar/>

    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'app',
  components: {
Navbar

},

}
</script>

<style>
*{
  margin: 0;
  padding:0;
}
</style>
