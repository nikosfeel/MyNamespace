<template>
  <div>
    <button @click="generateImage" class="button-85 mb-5">
      Get Random Image <i class="fa fa-infinity"></i>
    </button>
    <div class="card" style="width: 18rem">
      <div class="card-img-top">
        <img :src="randomImage.pathLong" alt="Press the button" />
      </div>
      <div class="card-body">
        <h2 class="card-title">A Random image</h2>
        <p class="card-text">
          There is nothing to see here. Absolutely nothing, i dont know why are you still here....
          <br>
          At least hover your mouse above the image to see what i have done :))))
          <br>
          You can also click the button to see another animal picture.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      randomImage: "",
      images: [],
    };
  },
  mounted() {
    this.importAll(
      require.context("../assets/photosToIterate", true, /\.jpg$/)
    );
    document.title = "MyNameSpace | Random Image";
    if(!this.$store.state.authenticated){
      this.$router.push("/login")
    }
  },
  methods: {
    importAll(r) {
      r.keys().forEach((key) =>
        this.images.push({ pathLong: r(key), pathShort: key })
      );
      this.randomImage =
        this.images[Math.floor(Math.random() * this.images.length)];
    },
    generateImage() {
      this.randomImage =
        this.images[Math.floor(Math.random() * this.images.length)];
    },
  },
};
</script>
<style scoped>
button {
  margin-bottom: 25px;
}
img{
  width: 100%;
  height: 100%;
  border-radius:20px;
  transition: 1s;
}
.card{
  left: 42.5%;
  border-radius:20px;
  transition: 1s;
}
.card:hover {
  box-shadow: rgba(0, 0, 0, 1) 0px 29px 43px;
  transform: translate3d(0px, -10px, 0px);
}
img:hover {
  box-shadow: rgba(0, 0, 0, 1) 0px 2px 10px;
  transform: translate3d(0px, -10px, 0px);
}
.card-title{
  color: brown;
}

.card-text{
  color: rgb(161, 42, 165);
}
</style>