<template>
     <navbar />
    <h3 class="text-center my-4">Register Page</h3>
    <UserForm></UserForm>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import UserForm from '../components/UserForm.vue';
export default {
  components: { Navbar, UserForm },

}
</script>

<style>

</style>