<template>
    <div class="testimonial">
      <div class="container-fluid">
        <div class="row">
          <div class="columns" v-for="testimonial in testimonials" :key="testimonial.id">
            <div class="card border border-dark">
              <div class="image">
                <img :src="testimonial.image" class="card-img-top" :alt="testimonial.name">
                <div class="background"></div>
              </div>
              <div class="card-body">
                <h3>{{ testimonial.name }}</h3>
                <p class="p">{{ testimonial.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isScrolled: false,
      };
    },
    computed: {
      testimonials() {
        return this.$store.state.testimonials;
      },
    },
    mounted() {
      this.$store.dispatch('fetchTestimonials');
    },
    methods: {
      // attempt to make an on scroll feature
      // window.addEventListener('scroll',this.handleScroll);
      // },
      // beforeUnmount(){
      //     window.removeEventListener('scroll',this.handleScroll);
      // },
      // methods: {
      //     handleScroll(){
      //         const containerPostion = this.$refs.testimonialContainer.getBoundingClientRect();
      //         const scrollThreshold = 200;
      //         if(containerPostion.top < scrollThreshold){
      //             this.isScrolled = true;
      //         }else{
      //             this.isScrolled = false;
      //         }
      //     }
      // }
    },
  };
  </script>
  
  <style scoped>
  .columns {
    height: 35rem;
    width: 15rem;
  }
  
  .row {
    display: grid;
    flex-direction: column;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }
  
  .testimonial {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 15rem;
  }
  .testimonial.scrolled {
    opacity: 0.5;
    transform: translateY(-20px);
    transition: opacity 2.6s ease, transform 2.6s ease;
  }
  .p {
    width: 17rem;
    text-align: center;
  }
  
  .card-body {
    text-align: center;
    width: 20rem;
    margin-right: 3=4rem;
  }
  
  .image {
    margin-left: 0.1rem;
    position: relative;
    height: 20rem;
    width: 100%;
    overflow: hidden;
  }
  
  .card-img-top {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  
  .card.border.border-dark {
    height: 35rem;
    width: 19rem;
  }
  .background {
    background: black;
  }
  </style>
  