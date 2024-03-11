<template>
  <div class="container">
      <div class="row">
        <div class="col-4 g-3" v-for="project in projects" :key="project.id">
          <div class="card" style="width: 17rem">
            <img :src="project.image" class="card-img-top " :alt="project.title"/>
            <div class="card-body">
              <p>{{ project.description }}</p>
              <a class="project-btn" target="_blank" :href='project.netlink'>{{project.title}}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    computed: {
    projects(){
      return this.$store.state.projects;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProjects");
  },
}
</script>

<style scoped>
.row{
  height: 100%;
}
.col-4{
  display: flex;
  justify-content: center;
  height: 100%;
 
}

.project-btn{
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
.project-btn:hover{
  background-color: red;
}
</style>