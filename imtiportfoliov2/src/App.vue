
<template>
  <nav>
  <NavbarComp/>
  <router-view/>
  <FooterComp/>
  </nav>
</template>
<script>
import NavbarComp from './components/NavbarComp.vue';
import FooterComp from './components/FooterComp.vue';
export default {
  components:{
    NavbarComp,
    FooterComp,
    
}
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&display=swap');
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
 
  
}
::-webkit-scrollbar{
  display: none;
}
*{
  font-family: "Mulish", sans-serif;
  
}

nav {
  padding: 0px;
}
</style>
