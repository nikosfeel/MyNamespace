<template>
  <div class="commentsArea">
    <h1>Comment area</h1>
    <textarea v-model="commentToBeAdded" v-if="show"></textarea>
    <span v-else>
      <h1>Congrats! you made a comment</h1>
      <br />
      <button @click="show = true" class="button-85" :disabled="disabled">Make another</button>
    </span>
    <br>
    <button v-if="show" @click="addComment" :disabled="disabled" class="button-85" role="button">
      Add Comment
    </button>
    <div id="comment-box" v-for="(comment,index) in comments" :key="index">
      <span>user said:</span>
      <br />
      <h1>{{ comment }}</h1>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      commentToBeAdded: "",
      comments: [],
      show: true,
      disabled:false,
    };
  },
  methods: {
    addComment() {
      if (this.commentToBeAdded != "") {
        this.disabled = true;
        this.comments.push(this.commentToBeAdded);
        this.commentToBeAdded = "";
        this.show = !this.show;
        this.disabled = false;
      }
    },
  },
};
</script>

<style scoped>
.commentsArea {
  padding: 1rem;
}
label,
textarea {
  font-size: 0.8rem;
  letter-spacing: 1px;
}
textarea {
  padding: 10px;
  max-width: 100%;
  line-height: 1.5;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px #999;
  outline: 5px double rgb(0, 14, 0);
}
#comment-box {
  width: 500px;
  background-color: #4f7e4d;
  position: relative;
  padding: 20px;
  color: white;
  margin-bottom: 5rem;
  word-wrap: break-word;
  margin: 0 auto;
  margin-top: 15px;
  margin-bottom: 30px;
}

#comment-box::after {
  content: "";
  position: absolute;
  height: 25px;
  width: 25px;
  bottom: -25px;
  left: 90%;
  background-color: #4f7e4d;
  clip-path: polygon(0 0, 100% 0, 100% 100%);
}
</style>