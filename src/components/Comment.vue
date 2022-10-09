<template>
  <div class="comment">
    <div class="comment__flex">
      <div class="comment__flex-btn">
        <button class="del" @click="deleteComment(index)"><i class="fa fa-trash"></i></button>
      </div>
    </div>
  </div>
</template>
<script >
export default {
    props: ['index'],
    data(){
        return{
        }
    },
    methods:{
        deleteComment(index){
            this.$store.state.comments.splice(index,1)
        }
    }
}
</script>
<style scoped>
.message {
  margin-bottom: 2em;
}
.comment {
  margin: 1em 0 2em;
  border-bottom: 1px solid #ccc;
}
.comment__flex-btn {
  margin: 1em 0;
}
button + button {
  margin-left: 1em;
}
button {
  padding: 0.75em 1em;
  border: unset;
}
.del {
  background: #f93943;
  color: #000807;
  border-radius: 10px;
  box-shadow: 0px 1px 8px 3px rgb(241, 141, 141);
  transition: 0.5s;
}
.del:hover{
  box-shadow: 0px 1px 8px 3px rgb(255, 0, 55);
}
.del:active{
  background-color: #4d0e11;
  box-shadow: 0px 1px 8px 3px #4d0e11;;
}
.update {
  background: #7eb2dd;
  color: #000807;
}
textarea {
  width: 100%;
}
.open {
  margin: 1em 0;
}
</style>