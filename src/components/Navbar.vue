<template>
  <div>
    <b-navbar class="navbar" toggleable="lg">
      <div class="container">
        <img alt="Vue logo" fluid src="../assets/logo.svg" />
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <router-link to="/">Movies</router-link>
            <router-link :to="{ name: 'People' }">People</router-link>
            <router-link :to="{ name: 'TvShow' }">Tv Show</router-link>
            <router-link :to="{ name: 'More' }">More</router-link>
            <router-link :to="{ name: 'Search' }">Search</router-link>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <router-link :to="{ name: 'Login' }">Login</router-link>
            <router-link :to="{ name: 'Join' }">Join TMDB</router-link>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
    <!-- <router-view /> -->
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "Navbar",
  components: {
    Navbar,
  },
};
</script>

<style>
.navbar img {
  width: 10%;
  margin-right: 30px;
}
.navbar {
  padding: 20px;
  text-align: left;
  align-content: center;
  justify-items: center;
  background: #032541;
  /* display: flex; */
}
.navbar a.router-link-exact-active {
  color: #42b983;
}

.navbar {
  padding: 20px;
  text-align: left;
  align-content: center;
  justify-items: center;
  background: #032541;
  /* display: flex; */
}


.navbar a {
  font-weight: bold;
  color: white;
  margin-right: 30px;
  padding: 8px;
  text-decoration: none;
}

</style>