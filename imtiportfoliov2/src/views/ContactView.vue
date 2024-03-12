<template>
  <div class="contianer-fluid">
    <div class="row1">
<form action="https://formspree.io/f/mwkgqwow" method="post" class="contact">
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
     <i class="bi bi-globe-europe-africa"></i><li class="location">Athlone ,Western Cape , 7764</li>
    <i class="bi bi-phone" @mouseover="startShake" ref="icon"></i><li class="mobile">+27 68 692 1712</li>
    </div>

    </div>
  </div>
  
</template>

<script>
export default {
   methods:{
    startShake(){
        this.$refs.icon.classList.add('shake');
    },
    
   }
}
</script>

<style> 

.button{
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
margin-top: 2rem;
transition: background-color 1s ease;
}
.submit-btn:hover{
    background-color:#D62828;
}
.icons{
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style:none;
}

@keyframes shake {
    0%, 100% {
    transform: translateX(0);
  }
  25%, 75% {
    transform: translateX(-2px);
  }
  50% {
    transform: translateX(2px);
  }
}

.bi-phone:hover{
  animation: shake 1s ease-in-out;
}
@keyframes bi-globe-europe-africa{
    0%{
        transform:rotate (0deg);
    }
    100%{
        transform:rotate (360deg)
    }
}
.bi-globe-europe-africa{
    transition: transform 0.5s ease-in-out;

}
.bi-globe-europe-africa:hover{
    transform: rotate(360deg);
    animation: spin 2s linear infinite;
}
.li{
    text-align: center;
}

.form{
    margin:0;
    padding: 0;
    height:30rem;
}
.location{
    width:15rem;
}
.form-control{
    border-radius: 0;
    width:100%;
    border: none;
    border-bottom: 1px solid ;
    margin-bottom: 1rem; 
}
.msg {
        border: none;
        border-bottom: 1px solid black;
        border-radius: 0;
        color: black;
        box-sizing: border-box;
        margin-bottom: 1rem; 
}
.msg::placeholder{
    color:rgb(33, 37, 41);
    text-indent: 10px;
}
.contianer-fluid{
    padding: 2rem;
    /* background-color:rgb(132,191,198); */
    height: 38rem ;
}
.row1{
    display: flex;
    flex-direction: row-reverse;
    gap: 15rem;
}
.input {
    margin: 1rem;
    
}
/* .textarea {
    
    /* color: black; */
.line1 {
    border-left:  2px solid black;
    height: 30rem;
}
@media(max-width: 1300px){
    .row1{
        flex-direction: column;
        gap:1rem;
    }
    .form-control,
    .msg{
    
        margin-bottom: 1rem; 
    }
    .submit-btn{
        font-size:1rem;
       
    }
    .location{
        display: flex;
        width: 100%;
        justify-content: center;
    }
    .icons{
        flex-direction: column;
        margin-left: 0;
    }
    .line1{
        display: none;
    }
}
</style>