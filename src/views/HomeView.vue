<template>
  <Navbar />
  <Main  v-if="!isAuth"/>
  <dashboard-view v-else></dashboard-view>
</template>

<script>
import Main from '../components/Main.vue';
import Navbar from '../components/Navbar.vue';
import { auth } from '../firebase';
import DashboardView from './DashboardView.vue';
import { onAuthStateChanged } from "firebase/auth";
export default {
    components: { Navbar, Main, DashboardView },
    data(){
      return {isAuth:false}
    },
    mounted(){
      onAuthStateChanged(auth, (user) => {
            if (user) {
            
              this.isAuth = true
            } else {
              this.isAuth = false
            }
      });

    }
}
</script>

<style>

</style>