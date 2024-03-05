<template>
  <div class="skills-container">
    <div class="card-styling" v-for="skills in skills" :key="skills.id">
            <div class="card" id="card-styling-skills" style="width: 16rem;" >
                    <img :src="skills.image" class="card-img-top" :alt="skills.type">
                    <div class="card-body">
                      <h2>{{skills.type}}</h2>
                      <p>{{skills.knowledge}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="badges">
        <div class="card-badges p-4" v-for="Ahievements in Ahievements" :key="Ahievements.id" style="width: 20rem;">
  <img :src="Ahievements.image" class="card-img-top-badges" :alt="Ahievements.name">
  <div class="card-body-badges p-4">
    <h5 class="card-title-badges">{{ Ahievements.name }}</h5>
    <!-- <p class="card-text">{{ Ahievements.description }}</p> -->
    <a href="https://www.linkedin.com/in/mogammad-imtiyaaz-damon-879944230/recent-activity/all/" class="See-more-btn">Check Out On linkedin</a>
  </div>
</div>
</div>
</template>
<script>
export default {
    computed:{
        skills(){
            return this.$store.state.skills;
        },
        Ahievements(){
            return this.$store.state.Ahievements;
        }
    },
    mounted(){
        this.$store.dispatch("fetchAhievements"),
        this.$store.dispatch("fetchSkills")
    }

}
</script>

<style>
.skills-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
   
}
#card-styling-skills {
    margin: 1rem;
    height: 28rem;
}
.skills-section {
    margin: auto;
    width: 100%;
    border:  red solid 1px; 
}
.card-styling:hover{
transition: ease-in 1s ;
background-color: red;
}
.badges{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

}
.card-styling-badges{
    height: 100%;
    width: 50rem ;
    
}
.card-img-top-badges{
    height: 20rem;
    width: 100%;
    
}
.See-more-btn{
    padding:8px 16px;
    border:none;
    outline:none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    background-color: black;
    color: #ffff;
    border-radius: 10rem;
    font-size: 16px;
    font-weight: thin;
    transition: background-color 1s ease;
}
.See-more-btn:hover{
    background-color: red;
}
</style>