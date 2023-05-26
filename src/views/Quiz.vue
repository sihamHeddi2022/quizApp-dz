<template>
  
    <router-link>Show quizzes</router-link>
    <h3 class="text-center">
        Add quizz
    </h3>
    <div>
        
        <textarea class="form-control"  placeholder="Enter the question" v-model="question">
        </textarea>

        <input type="text" placeholder="answer1" v-model="answer[0]"/>
        <input type="text" placeholder="answer2" v-model="answer[1]"/>
        <input type="text" placeholder="answer3" v-model="answer[2]"/>
        
        <label> The right answer </label>

        <select v-model="rightAns">

            <option value="0">answer 1</option>
            <option value="1">answer 2</option>
            <option value="2">answer 3</option>

        </select>
        
        <button class="btn btn-dark" @click="addQuizz">
            submit
        </button>
    </div>
</template>

<script>
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../firebase';

export default {
        methods:{
            async addQuizz(){
                try {
                    
                    const doc = await addDoc(collection(db, "quizzes"), {
                        rightAns,
                        answer,
                        question
                    });
                    
                    console.log(doc);

                } catch (error) {
                    console.log(error);
                }
                  
            }
        },
        data(){
            return {
                rightAns:0,
                answer:["","",""],
                question:""
            }
        }
}
</script>

<style>

</style>