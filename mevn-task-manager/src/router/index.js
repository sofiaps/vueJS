import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/authentication/Login.vue'
import Register from '../views/authentication/Register.vue'
import TasksAll from '../views/tasks/TasksAll.vue'
import TasksCreate from '../views/tasks/TasksCreate.vue'
import TasksEdit from '../views/tasks/TasksEdit.vue'
import * as auth from '../services/AuthService'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    beforeEnter:(to, from, next)=>{
      if(!auth.isLoggedIn()){
       next();
     }else{
       next('/');
     }
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    beforeEnter:(to, from, next)=>{
      if(!auth.isLoggedIn()){
       next();
     }else{
       next('/');
     }
    }
  },
  {
    path: '/tasks/new',
    name: 'tasks-create',
    component: TasksCreate,
    beforeEnter:(to, from, next)=>{
      if(auth.isLoggedIn()){
       next();
     }else{
       next('/login');
     }
    }
  },
  {
    path: '/tasks/:id',
    name: 'tasks-edit',
    component: TasksEdit,
    beforeEnter:(to, from, next)=>{
      if(auth.isLoggedIn()){
       next();
     }else{
       next('/login');
     }
    }
  },
  {
    path: '/tasks',
    name: 'tasks-all',
    component: TasksAll,
    beforeEnter:(to, from, next)=>{
      if(auth.isLoggedIn()){
       next();
     }else{
       next('/login');
     }
    }
  },
  {
    path: '*',
    redirect:'/'
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass:'active'
})


router.beforeEach((to, from, next)=>{
  next();
   // if(isLoggedIn){
  //   next();
  // }else{
  //   next('/login');
  // }
});

export default router
