import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import Quiz from '../views/Quiz.vue'
// import { onAuthStateChanged } from 'firebase/auth'
// import { auth } from '../firebase'

// function guarAuth(to,from,next) {
  
        
//     onAuthStateChanged(auth,(user)=>{

    
//       if (user) {    
//         next()
//      } else {
//        return router.push("/")
//      }


//     })

  

  
// }

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      // beforeEnter(){
      //   onAuthStateChanged(auth, (user) => {
      //     if (user) {
           
      //       return {path:"/"}
            
      //     } 
      //     return {path:"/login"}
      //  });

      // }
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    //   beforeEnter(){
    //     onAuthStateChanged(auth, (user) => {
    //       if (user) {
           
    //         return {path:"/"}
            
    //       } 
    //       return {path:"/register"}
    // });

      // }
    },
    {
      path: '/quizz',
      name: 'quizz',
      component: Quiz,
     // beforeEnter:guarAuth
      
    }
  ]
})

export default router
