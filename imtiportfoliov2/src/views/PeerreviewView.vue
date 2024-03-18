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
  };
  </script>
  
  <style scoped>
  .columns {
    height: 35rem;
    width: 100%;
  }
  /* .h3{
    display: flex;
    justify-content: center;
    padding-right: 2rem;
  } */
  .row {
    display: grid;
    flex-direction: column;
    grid-template-columns: 1fr ;
    gap: 3rem;
  }
  
  .testimonial {
    /* display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 15rem; */
    display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 1rem;
  }
  .p {
    width: 17rem;
    text-align: center;
    /* width: 100%; */
  /* max-width: 17rem; */
 
  }
  
  .card-body {
    text-align: center;
    /* width: 20rem; */
    margin-right: 3=4rem;
  }
  
  .image {
    position: relative;
    height: 23rem;
    width: 100%;
    overflow: hidden;
  }
  
  .card-img-top {
    width: 100%;
    height: 27rem ;
     object-fit: cover;
  }
  
  .card.border.border-dark {
    height: 35rem;
    width: 19rem;
    /* width: 100%; */
  /* max-width: 19rem; */
  }
  .background {
    background: black;
  }
  @media (min-width: 768px) {
  .columns {
    width: 100%;
   display: flex;
   justify-content: center;
  }
  .row {
    grid-template-columns: 1fr 1fr; 
  }
  .h3{
    width:17rem;
    text-align: center;
  }
  .card-img-top {
    width: 100%;
    height: 27rem ;
     object-fit: cover;
  }
}

@media (min-width: 992px) {
  .row {
    grid-template-columns: 1fr 1fr;
    
  }
  .columns{
    width: 100%;
  }
}

@media (min-width: 1200px) {
  .testimonial {
    padding: 0; 
  }
}
  </style>
  