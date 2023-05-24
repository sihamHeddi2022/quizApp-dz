<template>
    <Navbar/>
    <h3 class="text-center my-4">Login Page</h3>
    <UserForm>
        <hr class="my-4"/>
        <button class="btn btn-dark container">
            Continue with Google
        </button>
    </UserForm>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import UserForm from '../components/UserForm.vue'
export default {
  components: { UserForm, Navbar },

}
</script>

<style>

</style>