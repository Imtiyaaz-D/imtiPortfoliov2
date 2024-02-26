
import FooterComp from './components/FooterComp.vue';
<template>
  <nav>
    <NavbarComp/>
  <router-view/>
  <FooterComp/>
  </nav>
  
</template>
<script>
import FooterComp from './components/FooterComp.vue';
import NavbarComp from './components/NavbarComp.vue';
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
  color: #2c3e50;
}
*{
  font-family: "Oswald", sans-serif;
}

nav {
  padding: 30px;
}

nav a {
  text-decoration: none;
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: red;
}
</style>
