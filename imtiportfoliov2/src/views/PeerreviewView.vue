<template>
  <div class="testimonial">
    <div class="container-fluid">
        <div class="row">
            <div class="columns" v-for= "testimonial in testimonials" :key="testimonial.id">
                <div class="card border border-dark" >
                    <div class="image">
                        <img :src="testimonial.image"  class="card-img-top" :alt="testimonial.name">
                        <div class="background">

                        </div>
                    </div>
                    <div class="card-body">
                        <h3>{{ testimonial.name }}</h3>
                        <p class="p">{{ testimonial.description  }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    computed:{
        testimonials(){
            return this.$store.state.testimonials
        }
    },
    mounted(){
        this.$store.dispatch('fetchTestimonials')
    }
        
    }


</script>

<style>
.columns {
    height: 35rem;
    width:  15rem;
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

.p {
    width: 16rem;
    text-align: center;
}

.card-body {
    text-align: center;
    margin-right: 3=4rem;
}

.image {
    margin: 2rem;
}

.card-img-top {
        height: 17rem;
        width: 15rem;
}

.card.border.border-dark {
    height: 35rem;
    width: 19rem;
}
.background{
    background: black;
}
</style>