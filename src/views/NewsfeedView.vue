<template>
  <div class="home">
    <div class="container">
      <div v-show="this.$store.state.user.properties.name.myName != ''">
      <h1>Hello <b>{{this.$store.state.user.properties.name.myName}}</b>!</h1>
    </div>
    <img alt="Vue logo" src="../assets/pngegg.png" width="180px;" />
    <news-feed />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NewsFeed from "@/components/NewsFeed.vue";

export default {
  name: "NewsfeedView",
  components: {
    NewsFeed,
  },
  mounted(){
    document.title = "MyNameSpace | News Feed"
    if(!this.$store.state.authenticated){
      this.$router.push("/login")
    }
}
};
</script>


