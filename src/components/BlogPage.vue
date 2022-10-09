<template>
  <section class="section">
    <div
      class="section__details"
      v-for="(comment, index) in comments"
      :key="index"
    >
      <div class="section__details-info">
        <h1>{{ comment.title }}</h1>
        <div class="section__details-img">
          <img
            src="https://res.cloudinary.com/terieyenike/image/upload/v1644896156/vvasmj6onychxlkkynua.png"
            alt="anime character"
          />
          <p>Written by {{ comment.name }}</p>
        </div>
      </div>
      <div class="section__details-content">
        <p>
          {{ comment.body }}
        </p>
      </div>
      <div>
        <comment :index="index" class="message" />
      </div>
    </div>
  </section>
</template>
<script>
import Comment from "@/components/Comment.vue";

export default {
  components: { Comment },
  data() {
    return {
      comments: this.$store.state.comments,
    };
  },
};
</script>
<style scoped>
.section {
  padding: 2.5em 0;
  text-align: center;
  vertical-align: middle;
}
.section__details {
  margin-bottom: 3%;
  transition: 1.5s;
  box-shadow: 0px 9px 23px 9px rgba(255, 0, 200, 0.199);
}
.section__details:hover {
  cursor: pointer;
  box-shadow: 0px 1px 10px 6px rgb(155, 2, 122);
}
.section__details:active{
  cursor: grab;
  box-shadow: none;
}
.section__details-info h1 {
  margin-bottom: 0.5em;
  text-transform: capitalize;
  font-family: Padauk, sans-serif;
  font-weight: 700;
}
.section__details-img {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  margin-left: 2rem;
}
.section__details-img img {
  width: 2.5rem;
  border-radius: 100%;
  border: 1px solid black;
}
.section__details-img p {
  margin-left: 0.75em;
}
@media screen and (min-width: 768px) {
  .section__details-content {
    width: 85%;
    margin-left: 7%;
  }
}
</style>