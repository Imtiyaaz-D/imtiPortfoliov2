<template>
   <div>
        <nav class="navbar navbar-expand-xl bg-body-tertiary">
            <div class="container-fluid">
              <img src="https://iili.io/J1JKzxe.png" :style="{marginLeft:'144px'}" alt="logo" loading="lazy">
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-xl-0">
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
                    <router-link to="/project">Projects</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/testimonial">Peer-review</router-link>
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

</style>