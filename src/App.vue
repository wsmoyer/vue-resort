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
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
    --primaryColor: #af9a7d;
    --mainWhite: #fff;
    --offWhite: #f7f7f7;
    --mainBlack: #222;
    --mainGrey: #ececec;
    --darkGrey: #cfcfcf;
    --mainTransition: all 0.3s linear;
    --mainSpacing: 3px;
    --lightShadow: 2px 5px 3px 0px rgba(0, 0, 0, 0.5);
    --darkShadow: 4px 10px 5px 0px rgba(0, 0, 0, 0.5);
  }
  /* globals */
  body {
    color: var(--mainBlack) !important;
    background: var(--mainWhite) !important;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    line-height: 1.4;
  }
 
p{
  font-size: 1em !important;
}
  h1 {
    font-size: 2.5em !important;
    line-height: 1 !important;
    margin-bottom: 0.5em !important;
  }
  h2 {
    font-size: 1.8em !important;
    margin-bottom: 0.75em !important;
  }
  h3 {
    font-size: 1.5em;
    line-height: 1;
    margin-bottom: 1em;
  }
  h4 {
    font-size: 1.2em;
    line-height: 1.25;
    margin-bottom: 1.25em;
  }
  h5 {
    font-size: 1em;
    font-weight: bold;
    margin-bottom: 1.5em;
  }
  h6 {
    font-size: 1em;
    font-weight: bold;
    margin-bottom: 1.5em;
  }
 
.text-center{
  text-align: center !important;
}
.mybtn{
  background: var(--primaryColor) !important;
}
</style>
