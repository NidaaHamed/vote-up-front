<template>
  <b-navbar toggleable="lg" type="light" variant="info">
    <b-navbar-brand href="#">VoteUp</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Home</b-nav-item>
        <b-nav-item><router-link to="/about">About</router-link></b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            {{ name }}&nbsp; <em><img :src="image" alt="" srcset="" style="width:50px;height:50px;border-radius: 50%;"></em>
          </template>
          <b-dropdown-item><router-link to="/profile"><i class="fas fa-user"></i> Profile</router-link> </b-dropdown-item>
          <b-dropdown-item @click.native="logout"><i class="fas fa-power-off"></i> Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<style scoped>
.bg-info {
  background-color: #fff !important;
}
.navbar, .navbar-collapse {
  padding: 0px 20px !important;
  display: flex;
  justify-content: space-between;
}
.navbar-brand {
  margin-left: 2rem;
  font-size: 36px;
}
a {
  color: #333 !important;
  text-decoration: none !important;
}

</style>
<script>
export default {
  data() {
    return {
      name:'',
      image: '',
    };
  },
  methods: {
    getProfile() {
        let userdata = JSON.parse(localStorage.getItem("user"));
        this.name = userdata.data.user.name;
        this.image = userdata.data.user.image;

    },
   logout(){
      localStorage.removeItem('user');
      this.$router.push('/');
    }
  },
  created() {
      this.getProfile();
  },
}
</script>