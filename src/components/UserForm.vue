<template>
    
  <form class="w-50 mx-auto" @submit.prevent="$emit('action',email,password)">
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" v-model="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
  
        <button type="submit" class="btn btn-primary container">Submit</button>
        <slot>
            
        </slot>
</form>
</template>

<script>
export default {
    data(){
        return {
            email:"",
            password:""
        }
    }
}
</script>

<style>

</style>