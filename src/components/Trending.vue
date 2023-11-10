<template>
  <div class="">
    <b-container>
      <div class="trending-content">
        <h2 class="trending-heading my-3">Trending</h2>
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
  name: "Trending",
  data() {
    return {
      apiKey: process.env.VUE_APP_MOVIE_API_KEY,
      search: "",
      movies: {},
      baseImgPath: process.env.VUE_APP_MOVIE_API_BASE_IMG_PATH,
    };
  },

  methods: {
    fetchMovies() {
      this.$http
        .get(`trending/movie/day${this.apiKey}`)
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
    this.fetchMovies();
    console.log(process.env, 333);
  },
};
</script>

<style>
.trending-content {
  /* margin: 30px 0; */
  display: flex;
}
.movies-display {
  background-image: url('../assets/trending-bg.svg');
  background-repeat: no-repeat;
  background-position: bottom;
  /* background-size: contain; */
  display: grid;
  gap: 0.2em;
  grid-auto-flow: column;
  grid-auto-columns: 18%;

  overflow-x: auto;
  overscroll-behavior-inline: contain;











  /* overflow-x: scroll !important;
  overflow-y: hidden;
  transition: height 0.5s linear;
  text-align: left;
  width: 100%;
  height: 500px;
  display: flex;
  background: crimson; */
}
.movies-display p {
  font-size: 1em;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.6);
}
.movie_card {
  padding: 0.5em;


















  /* display: inline-table; */
  /* width: 100%;
  padding: 10px;
  top: 0;
  left: 0; */
  /* height: 10%; */
  /* overflow-y: scroll; */
  /* display: flex; */
  /* flex-wrap: wrap; */
  /* align-content: flex-start; */
  /* overflow: hidden; */
}
.movie_card img {
  width: 100% !important;
  height: 70%;
  /* overflow: hidden; */
  border-radius: 10px;
}
.movie-title h5 {
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  color: #000;
}
.section-title {
  text-align: left;
  font-size: 1.5em;
  font-weight: 600;
}
.trending-heading {
  text-align: left;
  font-size: 1.5em;
  font-weight: 600;
  margin-right: 20px;
}
/* Media Queries */
@media screen and (max-width: 768px) {
  .movie_card {
    width: 90% !important;
  }
  .movies-display {
    grid-auto-columns: 100%;
    gap: 0.1px;
  }
}
</style>