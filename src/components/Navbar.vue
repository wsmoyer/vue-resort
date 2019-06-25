<template>
 <nav class="navbar navbar-expand-lg mynavbar navbar-dark text-white">
  <a class="navbar-brand" href="#">Resort Site</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
    <router-link tag="li" to="" class="nav-item">
  <a class="nav-link">Home</a>

</router-link>
<router-link tag="li" to="/about" class="nav-item">
  <a class="nav-link">About</a></router-link>

    <router-link tag="li" to="/rooms" class="nav-item">
  <a class="nav-link">Rooms</a></router-link>



   
    </ul>
  
  </div>
</nav>
</template>

<script>
export default {
name:"Navbar"
}
</script>

<style scoped>
.mynavbar{
  background: var(--primaryColor) !important;
}
</style>
