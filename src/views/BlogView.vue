<template>
  <div class="container">
    <blog-page />
    <div class="comment-space">
    <p>{{comments.length == 1 ? "Comment" : "Comments"}} ({{comments.length}})</p>
    </div>

    <add-comment/>
  </div>
</template>

<script>
import BlogPage from "@/components/BlogPage.vue";
import AddComment from "@/components/AddComment.vue";
import Comment from "@/components/Comment.vue";

export default {
  components: { BlogPage, AddComment,Comment },
  data(){
    return{
        comments:this.$store.state.comments,
    }
  },
  mounted(){
    if(!this.$store.state.authenticated){
      this.$router.push("/login")
    }
  }
};
</script>
