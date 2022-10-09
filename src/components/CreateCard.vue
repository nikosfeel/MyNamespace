<template>
  <div>
    <div v-if="!made">
      <form>
        <div class="form-row align-items-center">
          <div class="col-auto">
            <label class="sr-only" for="inlineFormInputGroup">Image</label>
            <div class="input-group mb-2">
              <div class="input-group-prepend">
                <div class="input-group-text">@Image</div>
              </div>
              <input
                type="text"
                class="form-control"
                id="inlineFormInputGroup"
                placeholder="Place image link here"
                v-model="article.image"
              />
            </div>
          </div>
          <div class="col-auto">
            <label class="sr-only" for="inlineFormInputGroup">@City</label>
            <div class="input-group mb-2">
              <div class="input-group-prepend">
                <div class="input-group-text">@City</div>
              </div>
              <input
                type="text"
                class="form-control"
                id="inlineFormInputGroup"
                placeholder="City"
                v-model="article.title"
              />
            </div>
          </div>
          <div class="col-auto">
            <label class="sr-only" for="inlineFormInputGroup"
              >Description</label
            >
            <div class="input-group mb-2">
              <div class="input-group-prepend">
                <div class="input-group-text">@Description</div>
              </div>
              <input
                type="text"
                class="form-control"
                id="inlineFormInputGroup"
                placeholder="My Description"
                v-model="article.description"
              />
            </div>
          </div>
          <div class="col-auto">
            <button
              type="submit"
              class="btn btn-primary mb-2"
              @click="addComponentToList"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
    <div v-if="made">
      <button @click="addAnotherArticle" class="niceButton">
        <span></span>
        <span></span>
        <span>Create</span>
      </button>
    </div>
  </div>
</template>


<script>

export default {
  data() {
    return {
      article: {
        image: "",
        title: "",
        description: "",
      },
      made: true,
    };
  },
  methods: {
    addComponentToList() {
      if (
        this.article.image == "" ||
        this.article.description == "" ||
        this.article.title == ""
      ) {
        return;
      }
      this.$store.state.cards.push(structuredClone(this.article));
      this.made = !this.made;
      this.article.image = "";
      this.article.description = "";
      this.article.title = "";
    },
    addAnotherArticle() {
      this.made = !this.made;
    },
  },
};
</script>
