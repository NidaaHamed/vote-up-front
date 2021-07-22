<template>
  <div class="home">
    <b-container>
      <b-row>
        <nav-bar />
      </b-row>
      <b-row style="min-height: 85vh;">
        <b-col cols="2" class="mt-4" style="width: 20%">
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
  
  components: {
    SideBar,
    NavBar,
  },
  
}
</script>
<style scoped>
 .container {
  max-width: 100vw !important;
}

</style>