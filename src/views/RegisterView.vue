<template>
     <navbar />
    <h3 class="text-center my-4">Register Page</h3>
    <UserForm @action="(email,password)=>register(email,password)"></UserForm>
</template>

<script>
    import {  createUserWithEmailAndPassword } from "firebase/auth";
    import { auth } from "../firebase.js"
    import Navbar from '../components/Navbar.vue'
        import UserForm from '../components/UserForm.vue';
    export default {
      components: { Navbar, UserForm },
      methods:{
        register(email,password){

     
              createUserWithEmailAndPassword(auth, email, password)
                .then(() => {
                   this.$router.push("/")
                })
                .catch((error) => {
                 
                  const errorMessage = error.message;
                  //alert(errorMessage)
                });
            }
       }

    }
</script>

<style>

</style>