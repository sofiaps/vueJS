<template>
  <header>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top custom-bg-dark">
      <router-link to="/" class="navbar-brand">
        <img alt="Vue logo" src="../assets/logo.png" style="max-height:25px"/>
      Task Manager</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link" exact>Home</router-link>
          </li>
          <li class="nav-item" v-if="$store.state.isLoggedIn">
            <router-link to="/tasks" class="nav-link" exact>Tasks</router-link>
          </li>
          <li class="nav-item" v-if="!$store.state.isLoggedIn">
            <router-link to="/register" class="nav-link" exact>Register</router-link>
          </li>
          <li class="nav-item" v-if="!$store.state.isLoggedIn">
            <router-link to="/login" class="nav-link" exact>Login</router-link>
          </li>
          <li class="nav-item" v-if="$store.state.isLoggedIn">
            <a class="nav-link" @click.prevent="logout" href="#">Logout</a>
          </li>
          <li class="nav-item" v-if="$store.state.isLoggedIn">
            <a class="nav-link" href="#">
              {{$store.state.username ? $store.state.username : 'User'}}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import * as auth from '../services/AuthService';

  export default {
    name: 'Navbar',
    methods:{
      logout: function(){
        auth.logout();
        if(this.$route.path!=='/'){
          this.$router.push({name:'home'});
        }
      }
    }
  }
</script>
