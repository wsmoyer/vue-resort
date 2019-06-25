<template>
    <div class="defaultHero">
  <h1 >Resort Site</h1>
</div>
</template>

<script>

export default {
name:"RoomsHero"
}
</script>

<style scoped>
  .defaultHero,
  .roomsHero {
    min-height: calc(100vh - 66px);
    background: url("../images/defaultBcg.jpeg") center/cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .roomsHero {
    background-image: url("../images/room-2.jpeg");
    min-height: 60vh;
  }
</style>
