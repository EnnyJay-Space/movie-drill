<template>
  <div class="container">
    <div class="header">
      <b-container fluid class="bv-example-row">
        <b-row class="mx-3">
          <b-col sm="12" class="my-5">
            <h1>Welcome.</h1>
            <p>
              Millions of movies, TV shows and people to discover. Explore now.
            </p>
            
            <div class="d-flex search-input">
              <b-form-input
                class="input-search"
                v-model="search"
                placeholder="Search for a movie, tv show, person...."
              >
              </b-form-input>
              <b-button v-on:click="isNinja = !isNinja" class="btn-search" text="Button" @click="fetchSearch"
                >Search</b-button
              >
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
      <div>
        <h4 class="search-header mt-4" v-show="!isNinja">Search Results</h4>
        <!-- <p v-show="!isNinja">Searched Results</p> -->
        <!-- <button v-on:click="isNinja = !isNinja"> Show</button> -->
      </div>
    <div class="movies-display">
      <div class="movie_card" v-for="result in results" :key="result.id">
        <!-- content -->
        <router-link :to="{ name: 'MovieDetails', params: { id: result.id } }">
        <img :src="` ${baseImgPath}${result.poster_path}`" alt="" />

        <h5 class="movie-title">
          <h5>{{ result.title }}</h5>
        </h5>
        </router-link>
        <p>{{ result.release_date }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      apiKey: process.env.VUE_APP_MOVIE_API_KEY,
      search: "",
      results: {},
      baseImgPath: process.env.VUE_APP_MOVIE_API_BASE_IMG_PATH,
      isNinja:true
    };
  },
  methods: {
    fetchSearch() {
      this.$http
        .get(`search/movie${this.apiKey}&query=${this.search}`)
        .then((response) => {
          console.log(response.data.results);
          this.results = response.data.results;
          //  console.log(333,query)
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
  },
};
</script>

<style>
.header {
  background-image: linear-gradient(
      to right,
      rgba(3, 37, 65, 0.8) 0%,
      rgba(3, 37, 65, 0) 100%
    ),
    url(@/assets/hero.jpg);
  text-align: left;
  min-height: 300px;
  height: calc(100vh / 2.5);
  max-height: 360px;
  background-size: cover;
  background-repeat: no-repeat;
  color: #fff;
}
.header h1 {
  font-size: 48px;
  font-weight: bold;
}
.header p {
  font-size: 32px;
}
.input-search {
  border-top-left-radius: 500px !important;
  border-bottom-left-radius: 500px !important;
}
.btn-search {
  position: relative;
  background: linear-gradient(
    74deg,
    rgba(30, 213, 169, 1) 0%,
    rgba(1, 173, 228, 0.6671043417366946) 100%
  );
  border: 1px solid transparent !important;
  border-radius: 500px !important;
  margin-left: -30px;
  font-size: 20px !important;
  font-weight: bold !important;
  padding: 0 20px !important;
}
.btn-search:hover {
  color: #000 !important;
}
.search-header{
  text-align: left;
  font-size: 1.5em;
  font-weight: 600;
  margin-right: 20px;
}
.movies-display p {
  font-size: 1em;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.6);
}
</style>