<template>
  <div  class="page-loader">
    Loading
    <div class="spinner-sector spinner-sector-red"></div>
    <div class="spinner-sector spinner-sector-blue"></div>
    <div class="spinner-sector spinner-sector-green"></div>

    <div class="spinner2"> Loading</div>
  </div>
</template>

<script>
export default {
   

}
</script>

<style  scoped>
/* 
.page-loader{
display: block;
margin: 0 auto;
text-align: center;
padding:  20px;     
font-size: 1.2rem;
color: #333;
} */
 *,*::after,*::before{
    box-sizing: border-box;
 }
.spinner{
    width:300px;
    height:300px;
    display: flex;
    justify-content: center;
    align-items:center;
    font-size: 2rem;
    overflow:hidden;
}
/* .spinner-sector{
    position:
} */
</style>