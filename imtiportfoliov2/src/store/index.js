import { createStore } from 'vuex'
const dataUrl = "https://imtiyaaz-d.github.io/portfolio-sever/index.json"
export default createStore({
  state: {
    testimonials: null,
    projects: null,
    education: null,
    skills: null,
    Ahievements: null,
  },
  getters: {
  },
  mutations: {
    setTestimonials(state, testimonials){
      state.testimonials = testimonials
    },
    setProjects(state,projects){
      state.projects = projects
    },
    setEducation(state,education){
      state.education = education
    },
    setSkills(state,skills){
      state.skills = skills
    },
    setAhievements(state,Ahievements){
      state.Ahievements = Ahievements
    }
  },
  actions: {
    async fetchTestimonials(context){
      try{
        let res = await fetch(dataUrl)
        let {testimonials} = await res.json()
          context.commit('setTestimonials',testimonials)
      }catch(e) {
        console.log(e.messsage);
      }
    },
    async fetchProject(context){
      try{
        let res = await fetch(dataUrl)
        let {projects} = await res.json()
        context.commit('setProject', projects)
      }catch(e) {
        console.log(e.message)
      }
    },
    async fetchEducation(context){
      try{
        let res = await fetch(dataUrl)
        let {education} = await res.json()
        context.commit('setEducation',education)
      }catch(e){
        console.log(e.message)
      }
    },
    async fetchSkills(context){
      try{
        let res = await fetch(dataUrl)
        let {skills} = await res.json()
        context.commit('setSkills',skills)
      }catch(e){
        console.log(e.message)
      }
    },
    async fetchAhievements(context){
      try{
        let res = await fetch(dataUrl)
        let {Ahievements} = await res.json()
        context.commit('setAhievements', Ahievements)
      }catch(e){
        console.log(e.message)
      }
    }
  },
  modules: {
  }
})
