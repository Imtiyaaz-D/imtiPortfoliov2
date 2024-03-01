<template>
  <div class="contianer-fluid">
    <div class="row1">
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
            <label for="" ><p class="msg-area"></p></label>
            <textarea id="" cols="53" rows="" placeholder="Message" class="msg" style="color: black;"></textarea>
            </div>
        </div>
        <div class="contact-btn">
            <button type="submit" class="submit-btn">Submit</button>
        </div>
    </form>
    <div class="line1"></div>
    <div class="icons">
     <i class="bi bi-globe-europe-africa"></i> <li class="location">Athlone ,Western Cape , 7764</li>
    <i class="bi bi-phone"></i> <li class="mobile">+27 68 692 1712</li>
    </div>

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
    margin: 1rem;
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
/* .submit-btn :active{
    background-color:#1f618d;
} */
.icons{
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style:none;
    
    
}
/* .li{
    text-align: center;
} */

.form{
    margin:0;
    padding: 0;
    height:30rem;
}
.form-control{
    border-radius: 0;
    border: none;
    border-bottom: 1px solid ;
    background-color:rgb(132,191,198);

}
.msg {
        border: none;
        border-bottom: 1px solid black;
        border-radius: 0;
        color: black;

}
.contianer-fluid{
    padding: 2rem;
    background-color:rgb(132,191,198);
    height: 40rem ;
}
.row1{
    display: flex;
    flex-direction: row-reverse;
    gap: 15rem;
}
input {
    margin: 1rem;
    
}
textarea {
    margin: 1rem;
    background-color:rgb(132,191,198);
    color: black;


}
.line1 {
    border-left:  2px solid black;
    height: 30rem;
}
</style>