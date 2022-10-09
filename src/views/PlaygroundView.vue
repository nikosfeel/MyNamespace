<template>
  <div class="about">
    <div class="container">
      <img alt="Vue logo" src="../assets/kisspng.png" width="450px" />
      <br />
      <h1 class="h1 text-center text-wrap">{{ text }}</h1>
      <label for="story" v-if="submit">Write something to display</label>
      <textarea
        id="story"
        name="story"
        rows="10"
        cols="100"
        type="text"
        v-model="text"
        v-if="submit"
      ></textarea>
      <br />
      <div class="changeTextButton">
        <button
          v-bind:class="submit ? 'button-85 mb-3' : 'button-53 mb-3'"
          role="button"
          @click="changeInputVisibility"
        >
          {{ this.submit ? "Submit" : "Change text" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ClickCounter from "@/components/ClickCounter.vue";
import CommentSection from "@/components/CommentSection.vue";
export default {
  components: { ClickCounter, CommentSection },
  data() {
    return {
      text: this.$store.state.playground.text,
      submit: false,
    };
  },
  methods: {
    changeInputVisibility() {
      this.submit = !this.submit;
      this.$store.state.playground.text = this.text;
    },
  },
  mounted() {
    document.title = "MyNameSpace | Play Ground";
    if(!this.$store.state.authenticated){
      this.$router.push("/login")
    }
  },
};
</script>

<style>
label,
textarea {
  font-size: 1.2rem;
  letter-spacing: 1px;
  resize: none;
}
label {
  display: block;
  margin-bottom: 10px;
}
</style>
<style scoped>
.container {
  box-shadow: rgba(0, 0, 0, 0.76) 0px 10px 15px;
  background-color: rgb(244, 164, 252);
  transition: 2s;
}
.container:hover {
  box-shadow: rgba(0, 0, 0, 1) 0px 10px 25px;
  background-color: rgb(242, 124, 253);
}
</style>