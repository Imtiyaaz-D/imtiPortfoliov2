<template>
   <div>
        <nav class="navbar navbar-expand-xl bg-body-tertiary" :style="{ backgroundColor:'white'}">
            <div class="container-fluid">
              <img src="https://iili.io/J1JKzxe.png"  alt="logo" loading="lazy">
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <router-link to="/">Home</router-link>
                  </li>
                  <li class="nav-item">
                  <router-link to="/about">About</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/skills">Skills</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/projects">Projects</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/peer-review">Peer-review</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/contact">Contact</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.nav{
  background-color: white;
 
}

.nav-item{
  display: flex;
  padding: 0.5rem;
  justify-content: space-between;
}
nav  a{
  text-decoration: none;
  font-weight: bold;
  color: black;
}
nav a.router-link-exact-active {
  color: red;
}
</style>