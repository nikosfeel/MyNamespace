<template>
  <div class="container">
    <div class="d-flex justify-content-center">
      <create-card class="mt-5"/>
    </div>
    <div class="d-flex flex-column">
      <div
        v-for="(card, index) in this.$store.state.cards"
        :key="index"
        class="card mt-5 stylish"
        style="width: 100%"
      >
        <img class="card-img-top" :src="card.image" alt="Card image cap" />
        <div class="card-body">
          <h1 class="card-title">{{ card.title }}</h1>
          <h2 style="color: red">Description</h2>
          <p class="card-text">{{ card.description }}</p>
          <button class="btn btn-danger" @click="removeArticle(index)">
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CreateCard from "./CreateCard.vue";

export default {
  components: { CreateCard },
  methods: {
    removeArticle(index) {
      this.$store.state.cards.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.stylish {
  box-shadow: rgba(0, 0, 0, 0.22) 0px 10px 15px;
  transition: 1s;
}
.stylish:hover {
  box-shadow: rgba(0, 0, 0, 0.59) 0px 19px 43px;
  transform: translate3d(0px, -5px, 0px);
  transition: 0.5s;
}
</style>