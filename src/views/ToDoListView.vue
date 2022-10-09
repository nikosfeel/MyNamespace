<template>
  <div class="content">
    <!-- TO DO LIST -->
    <div class="card todos">
      <h5 class="card-header">
        <b>To Do List </b>
        <button v-if="!creating" @click="enableCreating" class="btn btn-info">
          <i class="fa fa-plus"></i>
        </button>
        <div v-else class="input-group-prepend mb-2 mr-sm-2">
          <input
            type="text"
            v-model="todoText"
            class="form-control"
            placeholder="Type here for your todo(e.g 'magic')"
          />
          <button @click="createToDo" class="input-group-text btn btn-success">
            Submit
          </button>
        </div>
      </h5>
      <ul
        class="list-group list-group-flush"
        v-for="(todo, toDoIndex) in toDoItems"
        :key="toDoIndex"
      >
        <li class="list-group-item">
          <h3 style="position: inherit; top: 20px">{{ todo }}</h3>
          <button
            class="btn btn-success"
            style="left: 37%; position: inherit; bottom: 20px"
            @click="transferToDone(todo, toDoIndex)"
          >
            <i class="fa fa-check"></i>
          </button>
          <button
            class="btn btn-danger"
            style="left: 38%; position: inherit; bottom: 20px"
            @click="deleteTodo(toDoIndex)"
          >
            <i class="fa fa-trash"></i>
          </button>
          <button
            style="left: 39%; position: inherit; bottom: 20px"
            @click="editTodo(todo, toDoIndex)"
            class="btn btn-warning"
          >
            <i class="fa fa-pencil"></i>
          </button>
        </li>
      </ul>
    </div>

    <!-- DONE LIST -->
    <div class="card dones">
      <h5 class="card-header">
        <b>Done </b>
        <button disabled class="btn btn-info">
          <i class="fa fa-cut"></i>
        </button>
      </h5>
      <ul
        class="list-group list-group-flush"
        v-for="(todo, doneIndex) in doneItems"
        :key="doneIndex"
      >
        <li class="list-group-item">
          <div v-if="todo.toLowerCase().includes('magic')">
            <img src="../assets/todo/mind-blown-explosion.gif" alt="dsadsa" />
          </div>
          <h3 v-else style="position: inherit; top: 20px">{{ todo }}</h3>
          <button
            class="btn btn-info"
            style="left: 42%; position: inherit; bottom: 20px"
            @click="undoDone(todo, doneIndex)"
          >
            <i class="fa fa-undo"></i>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      creating: false,
      todoText: "",
      toDoItems: this.$store.state.toDoItems,
      doneItems: this.$store.state.doneItems,
    };
  },
  mounted() {
    if(!this.$store.state.authenticated){
      this.$router.push("/login")
    }
  },
  methods: {
    enableCreating() {
      this.creating = true;
    },
    createToDo() {
      if (this.todoText == "") {
        return;
      }
      this.toDoItems.push(
        this.todoText + " (" + new Date().toLocaleTimeString() + ")"
      );
      this.todoText = "";
      this.creating = false;
    },
    transferToDone(todo, index) {
      if (todo.includes("o aris trwei")) {
        this.doneItems.push("o aris efage");
      } else {
        this.doneItems.push(todo);
      }

      this.toDoItems.splice(index, 1);
    },
    undoDone(todo, index) {
      if (todo.includes("o aris efage")) {
        this.toDoItems.push("o aris trwei");
      } else {
        this.toDoItems.push(todo);
      }
      this.doneItems.splice(index, 1);
    },
    deleteTodo(index) {
      this.toDoItems.splice(index, 1);
    },
    editTodo(todo, index) {
      this.creating = true;
      this.todoText = todo.substring(0, todo.indexOf('('));
      this.toDoItems.splice(index, 1);
    },
  },
};
</script>

<style scoped>
img{
  border-radius: 10px;
  box-shadow: 0px 3px 10px #000;
}
h3{
  width:75%;
}
.btn{
  box-shadow: 0px 0px 5px #000;
}
.card {
  display: inline-block;
  width: 40rem;
  margin-left: 1rem;
  margin-right: 1rem;
  border-radius: 10px;
  background-color: rgba(137, 43, 226, 0.123);
  box-shadow: 0px 0px 10px #000;
}
.card-header {
  border:none;
}
.list-group-item {
  background-color: rgb(253, 186, 231);
  transition: 0.3s;
  font-family: "Times New Roman", Times, serif;
  border-radius: 10px;
  margin-bottom: 7px;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.514);
}
.list-group-item:hover {
  box-shadow: rgba(0, 0, 0, 0.616) 0px 6px 10px;
  transform: translate3d(0px, -1px, 0px);
}
</style>
