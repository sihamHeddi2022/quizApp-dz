<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-purple ">
  <router-link class="navbar-brand" to="/">QuizzApp</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
     
      <li class="nav-item">
        <router-link  class="nav-link" to="/login">Login</router-link >
      

      </li>
        
      <li class="nav-item">
        <router-link  class="nav-link" to="/register">Register</router-link >
      

      </li>

    </ul>
  
  </div>
</nav>
</template>

<script>
export default {

}
</script>

<style>
.navbar-brand,.nav-link{
  color: rgb(252, 252, 252) !important;

}
 .bg-purple{
   background-color: rgb(106, 39, 168);
 }
</style>