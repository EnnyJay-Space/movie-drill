<template>
  <div>
    <div class="bv-example-row backdrop" :style="backDropStyle">
      <div class="mt-5 detail-content">
        <b-container>
          <b-row class="py-5">
            <b-col cols="4">
              <b-img
                class="poster-img"
                :src="getImagePath(movie.poster_path)"
                fluid
                alt="Fluid image"
              ></b-img>
            </b-col>
            <b-col cols="8" class="my-auto">
              <div class="movie-title">
                <h2>{{ movie.title }} ({{ movie.release_date }})</h2>
                <div class="d-flex mb-4">
                  <span class="certification">R</span>
                  <p class="mr-3">{{ movie.release_date }} (GB)</p>
                  <li></li>
                  <span
                    class="genres mr-2"
                    v-for="genre in movie.genres"
                    :key="genre.id"
                    >{{ genre.name }}
                  </span>
                  <li>{{ movie.runtime }}</li>
                </div>
                <div
                  class="d-flex"
                  :to="{ name: 'MovieDetails', params: { id: movie.id } }"
                >
                  <h6 class="my-auto mr-3 user_score_chart">
                    {{ movie.vote_average }}
                  </h6>
                  <ul class="d-flex actions my-auto">
                    <h5 class="my-auto mr-4 text-light">User <br />Score</h5>
                    <li>
                      <b-icon
                        class="icons"
                        icon="menu-button-wide"
                        aria-hidden="true"
                      ></b-icon>
                    </li>
                    <li>
                      <b-icon
                        class="icons"
                        icon="heart-fill"
                        aria-hidden="true"
                      ></b-icon>
                    </li>
                    <li>
                      <b-icon
                        class="icons"
                        icon="bookmark-fill"
                        aria-hidden="true"
                      ></b-icon>
                    </li>
                    <li>
                      <b-icon
                        class="icons"
                        icon="star-fill"
                        aria-hidden="true"
                      ></b-icon>
                    </li>
                    <b-button
                      @click="fetchMovieTrailer()"
                      class="btn-trailer"
                      v-b-modal.modal-xl
                      ><b-icon
                        class="icons"
                        icon="play-fill"
                        aria-hidden="true"
                      ></b-icon>
                      Play Trailer</b-button
                    >
                  </ul>
                </div>
                <p class="tagline mb-3">{{ movie.tagline }}</p>

                <h4>Overview</h4>
                <p class="text-light">{{ movie.overview }}</p>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div>

    <div class="trailer-display">
      <b-modal id="modal-xl" size="xl" centered titled="Extra Large Modal">
        <b-embed
          type="iframe"
          aspect="16by9"
          :src="`https://youtube.com/embed/${result.results[0].key}?rel=0`"
          allowfullscreen
        ></b-embed>
      </b-modal>
    </div>
  </div>
</template>

<script>
export default {
  name: "Movies",
  props: ["id"],
  // OR
  // data(){
  //     return{
  //         id: this.$route.params.id
  //     }
  // }
  data() {
    return {
      apiKey: process.env.VUE_APP_MOVIE_API_KEY,
      search: "",
      movie: {},
      result: null,
      backDropStyle: null,
      baseImgPath: process.env.VUE_APP_MOVIE_API_BASE_IMG_PATH,
      movie_id: this.$route.params.id,
    };
  },

  methods: {
    fetchMovieDetails() {
      //   console.log(process.env.VUE_APP_MOVIE_API_KEY, 222);
      this.$http
        .get(`movie/${this.movie_id}${process.env.VUE_APP_MOVIE_API_KEY}`)
        .then((response) => {
          console.log(response.data);
          this.movie = response.data;
          // Background image back-drop
          this.backDropStyle = `background-image: url(${this.getImagePath(
            this.movie.backdrop_path
          )})`;

          this.fetchMovieTrailer();
        })
        .catch((error) => {
          // console.log("error", error.response);
        });
    },
    fetchMovieTrailer() {
      this.$http
        .get(
          `movie/${this.movie_id}/videos${process.env.VUE_APP_MOVIE_API_KEY}`
        )
        .then((response) => {
          // console.log(333, response.data);
          this.result = response.data;
        });
    },

    getImagePath(image) {
      return this.baseImgPath + image;
    },

    getPercentage() {
      num = num.toString();

      var finalPercentage;

      if (num.length === 1) {
        finalPercentage = `${num}0%`;
        console.log(finalPercentage, 555);
      } else {
        finalPercentage = `${num.replace(".", "")}`;
        finalPercentage = `${finalPercentage.substring(0, 2)}%`;
      }
      return finalPercentage;
      getPercentage();
    },
  },

  mounted() {
    this.fetchMovieDetails();
    // console.log(process.env.VUE_APP_MOVIE_API_KEY, 333);
  },
};
</script>

<style scoped>
p {
  margin: 0;
}
.movie-title {
  text-align: left;
  color: #fff;
}
.movie-title h2 {
  font-size: 35.2px;
  font-weight: 700;
}

.backdrop {
  background-repeat: no-repeat;
  /* background-position: center; */
  background-size: cover;
  border-bottom: 1px solid var(--primaryColor);
  background-position: left calc((50vw - 170px) - 340px) top;
}
.detail-content {
  background-image: linear-gradient(
    to right,
    rgb(0, 0, 0) calc((50vw - 170px) - 340px),
    rgba(18, 18, 1, 0.84) 50%,
    rgba(6, 10, 33, 0.84) 100%
  );
}
.poster-img {
  border-radius: 20px;
}
.certification {
  border: 1px solid rgba(255, 255, 255, 0.6);
  color: rgba(255, 255, 255, 0.6);
  padding: 0.06em 4px 0.15em 4px !important;
  font-size: 16px;
  /* line-height: 1; */
  border-radius: 2px;
  margin-right: 7px;
}
.genres {
  background: black;
  padding: 2px 10px;
  border-radius: 10px;
}
.tagline {
  font-style: italic;
}
.actions {
  list-style-type: none;
}
.actions li {
  padding: 10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 20px;
  text-align: center;
  align-items: center;
  justify-content: center;
  background: #032541;
}
.actions .icons {
  text-align: center;
  font-size: 1em;
  color: #fff;
}
.btn-trailer {
  background-color: transparent !important;
  border: transparent;
}
.user_score_chart {
  background: #000;
  padding: 30px 20px;
  border-radius: 100%;
  font-weight: bolder;
  color: #fff;
  text-decoration: none;
}
</style>