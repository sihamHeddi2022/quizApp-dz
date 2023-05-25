<template>
  
    <router-link>Show quizzes</router-link>
    <h3 class="text-center">
        Add quizz
    </h3>
    <div>
        <textarea class="form"  placeholder="Enter the question" v-model="question">
        </textarea>
        
        <button class="btn btn-dark" @click="addQuizz">
            submit
        </button>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>