<template>
  <div class="">
    <b-container>
      <div class="trending-content mt-5">
        <h2 class="trending-heading my-3">Top Rated Movies</h2>
      </div>
      <div class="movies-display">
        <div class="movie_card" v-for="movie in movies" :key="movie.id">
          <!-- content -->
          <router-link :to="{ name: 'MovieDetails', params: { id: movie.id } }">
            <img :src="` ${baseImgPath}${movie.poster_path}`" alt="" />

            <h5 class="movie-title">
              <h5>{{ movie.title }}</h5>
            </h5>
          </router-link>
          <p>{{ movie.release_date }}</p>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
    name: "LatestTrailers",
  data() {
    return {
      apiKey: process.env.VUE_APP_MOVIE_API_KEY,
      search: "",
      movies: {},
      baseImgPath: process.env.VUE_APP_MOVIE_API_BASE_IMG_PATH,
    };
  },
  methods: {
    fetchTrailer() {
      this.$http
        .get(`/movie/top_rated${this.apiKey}`)
        .then((response) => {
          console.log(response.data.results);
          // setMovies(response.data.results);
          this.movies = response.data.results;
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
  },
  mounted() {
    this.fetchTrailer();
    console.log(process.env, 333);
  },
}
</script>

<style>

</style>