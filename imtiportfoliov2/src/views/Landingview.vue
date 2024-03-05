<template>
  <div class="container-fluid ">
    <!-- <loading-spinner :isLoading="isLoading"/>
    <img  v-if="!isLoading && imageUrl"  src="https://iili.io/JGfR7WB.jpg" alt="" @load="imageLoaded"> -->
    <img src="https://iili.io/JGfR7WB.jpg" alt="" loading="lazy" style="width: 20rem;">
    <h1>Mogammad Imtiyaaz Damon</h1>
    <h2>{{ typedText }}<span class="cursor"></span></h2>
    <button class="learn-more-btn">
        <router-link to="/about" style="text-decoration:none ;" @click="scrollTop()"><a>Learn About Me</a></router-link>
    </button>
  </div>
</template>

<script>
// import NavbarComp from '@/components/NavbarComp.vue';
import LoadingComp from '@/components/LoadingComp.vue';
export default {
    components: {
      LoadingComp
    },
    data(){
      return{
        originalText: "I am a Full-Stack Web Developer ",
        typedText: "",

        // imageUrl: 'https://iili.io/JGfR7WB.jpg',
        // isLoading: true,
      };
    },
    methods: {
        scrollTop(){
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        },
        // imageLoaded(){
        //   this.isLoading = false;
        // },
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
  animation: blink 1s  infinite;
}

@keyframes blink{
  from,
  to {
    border-color: transparent;
  }
  50%{
    border-color: red;
  }
}
.home-img{
  padding: 10rem;
}
.learn-more-btn{
  background-color:black;
  border-radius: 10rem;
  color: #ffff;
  font-size:16px;
  font-weight: thin;
  transition: background-color 0.3s ease;
}
button{
    padding:8px 16px;
    border:none;
    outline:none;
    cursor: pointer;
}
.learn-more-btn:hover{
  background-color:#D62828;
}
</style>