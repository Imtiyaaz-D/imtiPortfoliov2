<template>
  <div v-if="isLoading" class="loader"> Loading...</div>
</template>

<script>
export default {
    props:{
        isLoading: Boolean,
    }

}
</script>

<style>
.loader{
    display: block;
    margin: 0 auto;
    text-align: center;
    padding:  20px;
    font-size: 1.2rem;
    color: #333;
}

</style>