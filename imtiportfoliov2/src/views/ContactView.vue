<template>
  <div class="contianer-fluid">
   
    <form action="" method="post" class="contact">
        <div class="row">
            <div class="col-lg-6">
            <label for="" class="form-label"></label>
            <input type="name" name="First Name" class="form-control" placeholder="First Name" required>
        </div>
        </div>
        <div class="row">
            <div class="col-lg-6">
            <label for="" class="form-label"></label>
            <input type="name" name="Last Name" class="form-control" placeholder="Last Name" required>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6">
            <label for="" class="form-label"></label>
            <input type="name" name="Email address" class="form-control" placeholder="Email" required>
        </div>
        </div>
        <div class="row">
            <div class="col-lg-6">
            <label for="" class="form-control" placeholder="Message"><p class="msg-area">Message</p></label>
            <textarea id="" cols="73" rows="" class="msg"></textarea>
            </div>
        </div>
        <div class="contact-btn">
            <button type="submit" class="submit-btn">Submit</button>
        </div>
    </form>
    <div class="icons">
     <i class="bi bi-globe-europe-africa"></i> <li class="location">Athlone ,Western Cape , 7764</li>
    <i class="bi bi-phone"></i> <li class="mobile">+27 68 692 1712</li>
    </div>
    
   
    <!-- <DividerComp /> -->
  </div>
  
</template>

<script>
export default {
   
}
</script>

<style>
button{
    padding:8px 16px;
    border:none;
    outline:none;
    cursor: pointer;
}
.submit-btn{
display: flex;
background-color: black;
color: #ffff;
border-radius: 10rem;
font-size: 16px;
font-weight: thin;
transition: background-color 1s ease;
}
.submit-btn:hover{
    background-color:#D62828;
}
.submit-btn :active{
    background-color:#1f618d;
}
.icons{
    display: flex;
    justify-content: center;
    list-style:none
}
.msg-area{
    display: flex;
    align-content: flex-start;
    padding: 0rem;
}
.form{
    margin:0;
    padding: 0;
}
.form-control{
    border-radius: 0;
    border: none;
    border-bottom: 1px solid ;
}
.contianer-fluid{
    padding: 2rem;
}
</style>