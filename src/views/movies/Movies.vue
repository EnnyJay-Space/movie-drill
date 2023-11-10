<template>
  <div>
    <Header/>
    <Trending />
    <TopRated />
    <!-- <Search/> -->
  </div>
  
</template>

<script>
import Trending from "@/components/Trending.vue";
import Header from "@/components/Header.vue";
import TopRated from "@/components/TopRated.vue";
export default {
  name: "Movies",
  components: {
    Trending, Header, TopRated,
  },
};
</script>

<style>

</style>