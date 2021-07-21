<template>
  <div class="login">
    <!--  -->
    <div id="login">
      <b-card no-body class="overflow-hidden" style="max-width: 700px;">
        <b-row no-gutters>
          <b-col md="6">
            <img src="../assets/vote.jpg" alt="" srcset="" style="width:100%;height:100%;">
          </b-col>
          <b-col md="6">
            <b-card-body title="Login" style="margin:15px;">
              <b-form @submit="onSubmit">
                <b-form-group
                  id="input-group-1"
                  label="User Name:"
                  label-for="username"
                  style="margin:15px;"
                >
                  <b-form-input
                    id="username"
                    v-model="username"
                    type="text"
                    placeholder="Enter Username"
                    required
                    style="margin:15px;"
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Password:" label-for="password" style="margin:15px;">
                  <b-form-input
                    id="password"
                    v-model="password"
                    placeholder="Enter Password"
                    required
                    style="margin:15px;"
                  ></b-form-input>
                </b-form-group>
                <b-button type="submit" variant="primary" style="margin:15px;padding:5px 15px;">Submit</b-button>
              </b-form>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import router from '../router';
export default {
  name: 'Login',
  data() {
      return {
          username: '',
          password: '',
          token: '',
          roleId: null
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        axios.post('http://graduationproject1.zahran4it.com/api/Account/SignIn',{
          username:this.username,
          password:this.password
        }).then((response) => {
          console.log(response.data);
          //need to compare roleId to know where to route:super, admin, or user 
          localStorage.setItem("user",JSON.stringify(response.data));
          router.push('/home');
        })
      }
    }

}
</script>
<style scoped>
#login {
  display:flex;
  justify-content:center;
  align-items: center;
  height: 100vh;
  background-color: #eee;
}

</style>