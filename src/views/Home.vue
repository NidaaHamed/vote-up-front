<template>
  <div class="home">
    <b-container>
      <b-row>
        <nav-bar />
      </b-row>
      <b-row style="height: 90vh;">
        <b-col cols="2" class="mt-4">
          <side-bar />
        </b-col>
        <b-col cols="9" class="mt-4 pt-5 bg-white">
          <div class="container">
            <router-view />
          </div>
        </b-col>
      </b-row>
      <b-row>
        <footer>
          <p style="text-align: center;padding-top: 15px;">copyrights &copy; VoteUp</p>
        </footer>
      </b-row>
    </b-container>
    
  </div>
</template>
<script>
import SideBar from '../components/SideBar.vue';
import NavBar from '../components/NavBar.vue';
export default {
  data() {
    return {
      token: '',
      roleId: null
    };
  },
  components: {
    SideBar,
    NavBar,
  },
  methods: {
    usertype() {
      let userdata = JSON.parse(localStorage.getItem("user"));
      this.token = userdata.data.token;
      this.roleId = userdata.data.user.roleId;
      console.log("token : "+this.token+" , roleId : "+this.roleId);
    }
  }
}
</script>
<style scoped>
 .container {
  max-width: 100vw !important;
}

</style>