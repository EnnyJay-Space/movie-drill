<template>
  <div class="home">
    <div class="">
      <b-container>
        <div class="trending-content">
          <h2 class="trending-heading my-3">Popular People</h2>
        </div>

        <!-- <div class="movies-display"> -->
        <!-- <router-link :to="{ name: 'MovieDetails', params: { id: movie.id } }"> -->

        <b-card
          class="person_card"
          v-for="person in persons"
          :key="person.id"
          img-alt="Image"
          img-top
        >
          <img :src="`${baseImgPath}${person.profile_path}`" alt="" />
          <b-card-text class="people_card-text">
            <h5 class="fw-bold">{{ person.name }}</h5>
            <div class="sub">
              
            </div>
            <p
              class="d-inline "
              v-for="(known_for, index) in person.known_for"
              :key="index"
            >
              <!-- tenary operator -->
              {{
                known_for.original_title
                  ? known_for.original_title
                  : known_for.original_name
              }}
              <!-- Using comma separator -->
              <span v-if="index + 1 < person.known_for.length">,</span>
            </p>
          </b-card-text>
        </b-card>
        <!-- </router-link> -->
        <!-- </div> -->
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "People",
  data() {
    return {
      apiKey: process.env.VUE_APP_MOVIE_API_KEY,
      search: "",
      persons: [],
      baseImgPath: process.env.VUE_APP_MOVIE_API_BASE_IMG_PATH,
    };
  },
  methods: {
    fetchPersons() {
      this.$http
        .get(`person/popular${this.apiKey}`)
        .then((response) => {
          console.log(response.data.results);
          this.persons = response.data.results;
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
  },
  mounted() {
    this.fetchPersons();
    console.log(process.env, 333);
  },
};
</script>
<style scoped>
.person_card {
  display: inline-table;
  width: 20%;
  margin: 10px;
  top: 0;
  left: 0;
  height: auto;
  /* flex-wrap: wrap; */
  overflow: hidden;
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
}
.person_card img {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.people_card-text h5 {
  font-weight: 600;
  font-size: 1.1em;
}

.card-body {
  padding: 0 !important;
}

.people_card-text{
  width: 100%;
}

.sub {
  width: 100;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
}
@media screen and (max-width: 768px) {
  .person_card {
    width: 50% !important;
  }
}
</style>
