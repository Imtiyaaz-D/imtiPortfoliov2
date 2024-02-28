<template>
   <footer class="container-fluid text-center sticky-bottom">
     <div class="row">
        <div class="col-md-6">
            <p class="text-md-start ">Powered by Imtiyaaz Damon &COPY; {{ cYear }}</p>
        </div>
            <div class="col-md-6 d-flex justify-content-md-end">
            <a href="https://github.com/Imtiyaaz-D" target="_blank" class="mx-2"><i class="bi bi-github"></i></a>
            <a href="https://www.linkedin.com/in/mogammad-imtiyaaz-damon-879944230/" target="_blank" class="mx-2"><i class="bi bi-linkedin"></i></a>
            <a href="mailto:imtidamon777@gmail.com" target="_blank" key="" class="mx-2"><i class="bi bi-envelope-at" ></i></a>
        </div>
     </div>
         
        </footer>
       <!-- <div class="copyright">
                <p>POWERED BY Imti-Damon COPYRIGHT &COPY; {{cYear}}</p>  
              
                
            </div>
            <div class="icons">
                
                <a href="https://github.com/Imtiyaaz-D" target="_blank"><i class="bi bi-github"></i></a>
                <a href="https://www.linkedin.com/feed/" target="_blank"><i class="bi bi-linkedin"></i></a>
                <a href="mailto:imtidamon777@gmail.com" target="_blank"><i class="bi bi-envelope-at"></i></a>
                </div> -->
</template>

<script>
export default {
    data() {
            return{
                cYear: new Date().getUTCFullYear()
            }
        }
}
</script>

<style>
.bi:hover {
    color: red;
}

.bi {
    font-size: 1.8rem;
    margin: 0.5rem;
    color: black;
}
.copyright{
    display: flex;
    justify-content: center;
}
.icons{
    display: flex;
    justify-content: flex-end;
}

</style>