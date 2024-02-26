<template>
  <div class="container-fluid">
    <img src="https://iili.io/JGfR7WB.jpg" alt="home-img" loading="lazy" style="width: 20rem;">
    <h1>Mogammad Imtiyaaz Damon</h1>
    <h3>Web-developer</h3>
    <button class="learn more-btn">
        <router-link to="/about" style="text-decoration:none ;" @click="scrollTop()"><a>Learn About Me</a></router-link>
    </button>
  </div>
</template>

<script>
import NavbarComp from '@/components/NavbarComp.vue';
export default {
    components: {NavbarComp},
    methods: {
        scrollTop(){
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
    }

}
</script>

<style>
/* @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&display=swap'); */

</style>