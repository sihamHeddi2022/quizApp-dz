<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-purple ">
  <router-link class="navbar-brand" to="/">QuizzApp</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
     
      <li class="nav-item">
        <router-link  class="nav-link" to="/login" v-show="!isAuth">Login</router-link >
      </li>
        
      <li class="nav-item">
        <router-link  class="nav-link" to="/register" v-show="!isAuth">Register</router-link >
      </li>
      <li class="nav-item">
        <router-link  class="nav-link" to="/resumes" v-show="isAuth">My Resumes</router-link >
      </li>
      <li class="nav-item">
        <router-link  class="nav-link" to="/quizz" v-show="isAuth">Quizzes</router-link >
      </li>
      <li class="nav-item">
          <button  v-show="isAuth" @click="logout" class="btn btn-dark">
             Log out
          </button>
      </li>
    </ul>
  
  </div>
</nav>
</template>

<script>
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase';

export default {
  data(){
    return {
      isAuth:false
    }
  },
  methods:{
      logout(){
            signOut(auth)
              .then(() => {
                  this.$router.push("/login")
              })
              .catch((error) => {
                console.log(error);
              });
      }
  }
  ,
    mounted(){
      onAuthStateChanged(auth, (user) => {
            if (user) {
            
              const uid = user.uid;
              this.isAuth = true
            } else {
              this.isAuth = false
            }
      });

    }
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