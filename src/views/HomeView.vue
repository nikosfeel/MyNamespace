<template>
  <div>
    <h1 class="welcometext">
      WELCOME {{ this.$store.state.user.properties.name.myName }}!!!111!!1!
    </h1>
    <h2>Here are some photos</h2>
    <div v-for="(photo,index) in images" :key="index" class="images">
      <img :src="photo.pathLong" alt="" class="image">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [],
    };
  },
  mounted() {
    document.title = "MyNameSpace | Home";
     this.importAll(
      require.context("../assets/WelcomePagePhotos", true, /\.jpg$/)
    );
    if(!this.$store.state.authenticated){
      this.$router.push("/login")
    }
  },
  methods:{
    importAll(r) {
      r.keys().forEach((key) =>
        this.images.push({ pathLong: r(key), pathShort: key })
      );
      this.randomImage =
        this.images[Math.floor(Math.random() * this.images.length)];
    },
  }
};
</script>
<style scoped>
.images{
  display: inline-block;

}
.image{
  width:500px;
  height:400px;
  margin-right: 10px;
  margin-bottom: 10px;
  transition: 0.7s;
  box-shadow: 0px 1px 10px #000;

}
.image:hover{
  box-shadow: 0px 10px 20px #000;
  margin-right: 20px;
  margin-bottom: 20px;
  margin-left: 10px;
  margin-top: 10px;
  cursor:pointer;
}
.welcometext{
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
</style>