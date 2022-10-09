<template>
  <div class="form">
    <form>
      <div class="form-group">
        <label for="name">Your Name</label>
        <input
          id="name"
          class="form-control"
          type="text"
          placeholder="Write Your Name"
          v-model="name"
        />
        <br />
        <label for="title">Title</label>
        <input
          id="title"
          class="form-control"
          type="text"
          placeholder="Title of the comment"
          v-model="title"
        />
        <br />
        <textarea
          v-model="newComment"
          rows="5"
          cols="50"
          class="form-control"
          placeholder="type in your comment"
          draggable="true"
        />
        <button @click="AddComment">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      newComment: "".trim(),
      name: "",
    };
  },
  methods: {
    AddComment() {
      this.$store.state.comments.push({
        title: this.title.trim() == "" ? "No title" : this.title.trim(),
        name: this.name.trim() == "" ? "Anonymous" : this.name.trim(),
        body: this.newComment,
        date: new Date(),
      });
      this.title = "";
      this.newComment = "";
      this.name = "";
    },
  },
};
</script>

<style scoped>
.form {
  margin-top: 1.5em;
}

label {
  display: block;
  margin-bottom: 1em;
  font-weight: 700;
  font-family: Padauk, sans-serif;
}

textarea {
  width: 100%;
  margin-top: 1em;
  font-size: 2rem;
  line-height: 1.5em;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  resize:none;
}

button {
  border: unset;
  background: #79b791;
  color: #230c0f;
  font-weight: 700;
  padding: 1em 2.5em;
  margin-top: 1em;
}
</style>