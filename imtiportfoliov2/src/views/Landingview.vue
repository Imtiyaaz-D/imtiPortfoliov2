<template>
  <div class="container-fluid">
    <img src="https://iili.io/JGfR7WB.jpg" alt="home-img" loading="lazy" style="width: 19rem;">
    <h1>Mogammad Imtiyaaz Damon</h1>
    <h2>{{ typedText }}<span class="cursor"></span></h2>
    <button class="learn more-btn">
        <router-link to="/about" style="text-decoration:none ;" @click="scrollTop()"><a>Learn About Me</a></router-link>
    </button>
  </div>
</template>

<script>
import NavbarComp from '@/components/NavbarComp.vue';
export default {
    components: {NavbarComp},
    data(){
      return{
        originalText: "I am a Full-Stack Developer ",
        typedText: ""
      };
    },
    methods: {
        scrollTop(){
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        },
        startTyping(){
          let index = 0 ;
          const intervalId = setInterval(() =>{
            this.typedText += this.originalText[index];
            index++;

            if( index === this.originalText.length){
              clearInterval(intervalId)
            }
          },100)
        }
    }, 
    mounted(){
      this.startTyping();
    }

}
</script>

<style>
/* @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&display=swap'); */
h2{
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  
  
}

.cursor {
  display: inline-block;
  width: 0.1rem;
  height: 2rem;
  vertical-align: middle;
  background-color: red;
  animation: blink-caret 1s  infinite;
}

@keyframes blink-caret{
  from,
  to {
    border-color: transparent;
  }
  50%{
    border-color: red;
  }
}

</style>