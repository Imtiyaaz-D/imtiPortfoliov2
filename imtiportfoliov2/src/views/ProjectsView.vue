<template>
  <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-4" v-for="project in projects" :key="project.id">
          <div class="card mb-3" style="width: 17rem">
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
  display: flex;
  justify-content: center!important;
  height: 100%;
  margin-bottom: 6rem;
  /* margin-right: -15px;
  margin-left: -15px; */
}
.col-4{
  display: flex;
  justify-content: center;
  height: 100%;

}
.card {
  flex: 1 0 100%;
  /* max-width: calc(33.333333% - 30px); */
  margin-right: 15px;
  margin-left: 15px;
}
@media (max-width: 992px) {
  .card {
    max-width: calc(100% - 30px);
  }
}

@media (max-width: 768px) {
  .row{
    margin-bottom: 0rem;
  }
  .col-md-4{
    display: flex;
    justify-content: center ;
  }
  .card {
    flex: 1 0 calc(50% - 30px);
    margin-right: 15px;
    margin-left: 30px;
  }
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