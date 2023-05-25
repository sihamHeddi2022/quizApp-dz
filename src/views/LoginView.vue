<template>
    <Navbar/>
    <h3 class="text-center my-4">Login Page</h3>
    <UserForm @action="(email,password)=>login(email,password)">
        <hr class="my-4"/>
        <button class="btn btn-dark container" @click="loginGoogle">
            Continue with Google
        </button>
    </UserForm>
</template>

<script>
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import Navbar from '../components/Navbar.vue'
import UserForm from '../components/UserForm.vue'
import { GoogleAuthProvider } from "firebase/auth";
import { auth } from '../firebase';
export default {
  components: { UserForm, Navbar },
  methods:{
    login(email,password){

        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                this.$router.push("/") 
            
            })
            .catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage)
            });
    
    
        },
    loginGoogle(){
      

        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then(() => {
           this.$router.push("/")   
        }).catch((error) => {
            
            const errorMessage = error.message;
            alert(errorMessage)
        });

    
    
    
    
    
    }
  }

}
</script>

<style>

</style>