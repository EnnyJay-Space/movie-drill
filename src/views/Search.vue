<template>
  <div class="search">
    
  </div>
</template>
<script>
export default {
  name: "search",
  data() {
    return {
      apiKey: process.env.VUE_APP_MOVIE_API_KEY,
      query: "",
    };
  }, 
};
</script>