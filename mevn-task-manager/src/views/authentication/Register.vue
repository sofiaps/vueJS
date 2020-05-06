<template>
  <div>
    <h1>Register</h1>
    <b-alert
      :show="dismissCountDown"
      dismissible
      class="position-fixed m-0 rounded-0"
      style="z-index: 2000;top:0;right:0;"
      variant="danger"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
    >
      Username already exists
    </b-alert>
    <form class="custom-form" v-on:submit.prevent="onSubmit">
      <div class="form-group">
        <label for="first">First Name</label>
        <input type="text" v-model="first" class="form-control" id="first" placeholder="First Name">
      </div>
      <div class="form-group">
        <label for="last">Last Name</label>
        <input type="text" v-model="last" class="form-control" id="last" placeholder="Last Name">
      </div>
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" v-model="username" class="form-control" id="username" placeholder="Username">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" v-model="password" class="form-control" id="password" placeholder="Password">
      </div>
      <div class="form-group text-right">
        <button type="submit" class="btn btn-secondary">Register</button>
      </div>
    </form>
  </div>
</template>


<script>
  import * as auth from '../../services/AuthService'

  export default{
    name:'register',
    data: function(){
      return {
        username:'',
        password:'',
        first:'',
        last:'',
        dismissSecs: 5,
        dismissCountDown: 0
      }
    },
    methods:{
      countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      },
      onSubmit: async function(){
        const user = {
          username: this.username,
          password: this.password,
          first:this.first,
          last:this.last
        };

        // const registerPromise = auth.registerUser(user);
        // const loginPromise = auth.login(user);
        //
        // await Promise.all([registerPromise, loginPromise]);

        auth.registerUser(user).then(()=>{
          auth.login(user).then(()=>{
            this.$router.push({ name: 'home'});
          }).catch((err)=>{
            console.log(err);
          });
        }).catch((error)=>{
            if(error.response.status==403){
              this.dismissCountDown = this.dismissSecs;
            }
        });


      }
    }
  }
</script>
