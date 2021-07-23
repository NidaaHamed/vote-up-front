<template>
  <div v-if="roleId===3">
    <b-navbar toggleable="lg" type="light" variant="info" shadow>
        <b-list-group>
          <b-list-group-item><router-link to="/home"><i class="fas fa-home"></i> Over View</router-link></b-list-group-item>
          <b-list-group-item><router-link to="/candidates"><i class="fas fa-user-friends"></i> Candidates</router-link></b-list-group-item>
          <b-list-group-item><router-link to="/vote"><i class="fas fa-check-square"></i> Vote</router-link></b-list-group-item>
          <b-list-group-item><router-link to="/studentunion"><i class="fas fa-users"></i> Student Union</router-link></b-list-group-item>
          <b-list-group-item><router-link to="/commissions"><i class="fas fa-address-book"></i> Commissions</router-link></b-list-group-item>
        </b-list-group>
    </b-navbar>
  </div>
  <div v-else-if="roleId===2">
    <b-navbar toggleable="lg" type="light" variant="info" shadow>
      <b-list-group>
        <b-list-group-item><router-link to="/home"><i class="fas fa-home"></i> Over View</router-link></b-list-group-item>
        <b-list-group-item><router-link to="/candidates"><i class="fas fa-user-friends"></i> Candidates</router-link></b-list-group-item>
        <b-list-group-item><router-link to="/vote"><i class="fas fa-check-square"></i> Vote</router-link></b-list-group-item>
        <b-list-group-item><router-link to="/studentunion"><i class="fas fa-users"></i> Student Union</router-link></b-list-group-item>
        <b-list-group-item><router-link to="/commissions"><i class="fas fa-address-book"></i> Commissions</router-link></b-list-group-item>
        <b-list-group-item><router-link to="/posts"><i class="fas fa-edit"></i> Posts</router-link></b-list-group-item>
      </b-list-group>
    </b-navbar>
  </div>
  <div v-else-if="roleId===1">
    <b-navbar class="navbar-vertical fixed-left bg-white" toggleable="lg" type="light" variant="light" shadow>
      <b-list-group>
        <b-list-group-item><router-link to="/candidates"><i class="fas fa-user-friends"></i> Candidates</router-link></b-list-group-item>
        <b-list-group-item><router-link to="/studentunion"><i class="fas fa-users"></i> Student Union</router-link></b-list-group-item>
        <b-list-group-item><router-link to="/nominationrequest"><i class="fas fa-address-card"></i> Nomination Requests</router-link></b-list-group-item>
        <b-list-group-item><router-link to="/commissions"><i class="fas fa-address-book"></i> Commissions</router-link></b-list-group-item>
        <b-list-group-item><router-link to="/electionresults"><i class="fas fa-chart-pie"></i> Election Results</router-link></b-list-group-item>
        <b-list-group-item><router-link to="/complaints"><i class="far fa-frown"></i> Complaints</router-link></b-list-group-item>
      </b-list-group>
        
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      token: '',
      roleId: null
    };
  },
  methods: {
    getToken(){
      let userdata = JSON.parse(localStorage.getItem("user"));
      this.token = userdata.data.token;
      this.roleId = userdata.data.user.roleId;
      console.log("token : "+this.token+" , roleId : "+this.roleId);
    }
  },
  created() {
    this.getToken();
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg-info {
    background-color: #fff !important;
    border: 1px #fff !important;
    border-radius: 5px;
    padding: 0px;
}
.list-group-item {
  border: #fff !important;
}
a {
  color: #999 !important;
  text-decoration: none !important;
  float: left;
}
a:hover {
  color: #333 !important;
}
</style>
