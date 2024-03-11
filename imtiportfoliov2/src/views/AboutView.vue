<template>
  <div class="contianer-fluid">
    <div class="about-me-container">
         <h2 class="About-me-section">About me</h2>
    <p class="paragraph-1">Hi there! You might call me Imtiyaaz, but my name is Mogammad Imtiyaaz Damon. I get my energy from the thrill of learning new things. I've happily obtained badges in operating systems, networking, cybersecurity, and AWS Cloud as a committed learner. Every one of these educational experiences had obstacles, but I met them head-on and overcame them to succeed.</p>
    
        <p class="paragraph-2">I find balance and renewal in being active when I'm not staring at a screen. I love spending time outside to refocus, whether it's through a quick stroll or an energising run around my neighbourhood. On the football pitch, where I play intense games with friends, I can let my competitive nature run wild. In addition, I enjoy relaxing with gaming sessions and making treasured memories and experiences with pals.
        </p>

    </div>
  <div class="btns">
    <button class="See-skills">See My Skills</button>
    <button class="See-projects">See My Projects</button>
    <button  class="See-CV"><a href=" https://drive.google.com/uc?export=download&id=1ZMZIaeT5JbQK4HYMHkcHXrepiS5hc_1r" target="_blank"> Download CV</a></button>
  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container-fluid{
  height: 100%;
  
}
/* .about-me-container{
  height: 30rem;
} */
.btns{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 15rem;
}
.See-CV,.See-skills,.See-projects{
  padding: 8px 16px;
  border:none;
    outline:none;
    cursor: pointer;
    margin: 1rem;
  display: flex;
background-color: black;
color: #ffff;
border-radius: 10rem;
font-size: 16px;
font-weight: thin;
transition: background-color 1s ease;
}
.See-CV a{
  color: white;
  text-decoration: none;
  font: thin;
  font-size: 16px;
}
.See-CV:hover{
  background-color:red;
}
.See-skills:hover{
  background-color: red;
}
.See-projects:hover{
  background-color:red;

}
</style>