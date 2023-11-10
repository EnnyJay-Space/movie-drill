<template>
  <div id="app">
    
    <Navbar/>
    <!-- <header class="container">
      <div class="content">
        <h1>Welcome.</h1>
        <p>Millions of movies, TV shows and people to discover. Explore now.</p>

        <form>
          <label>
            <input
              type="text"
              placeholder="Search for a movie, tv show, person...."
            />
          </label>
          <input type="button" value="Search" />
        </form>
      </div>
    </header> -->

    <router-view />

  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  components: { Navbar,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.modal-header,
.modal-footer{
  display: none !important;
}
.modal-body{
  padding: 0 !important;
}

</style>
