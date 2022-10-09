<template>
  <div>
    <h1 class="warning" v-if="span" style="color: red">
      PRESS THE BUTTON NOT ENTER!!!!!
    </h1>
    <div class="box">
    <h1 class="welcome-logo">MyNameSpace</h1>
      <form class="loginbox form-group">
        <label for="usrnm"><i class="fa fa-user"></i> Username</label>
        <input
        id="usrnm"
          type="text"
          placeholder="Username"
          class="form-control"
          v-model="username"
        />
        <label for="psswd"><i class="fa fa-key"></i> Password</label>
        <input
        id="psswd"
          type="password"
          class="form-control"
          v-model="password"
          @keyup.enter="span = true"
          autocomplete="on"
        />
        <a
          class="btn btn-dark"
          :href="logged ? '/#/home' : '#'"
          @click="checkLoginfo"
          >Submit</a
        >
        <br />
        <span v-if="wronginfo > 0" style="color: red"
          >Wrong Username or Password, try again!
        </span>
      </form>
    </div>
  </div>
</template>


<script>
export default {
  mounted() {
    document.title = "MyNameSpace | Login";
  },
  data() {
    return {
      adminUser: {
        user: "admin",
        pass: "admin",
      },
      username: "",
      password: "",
      logged: this.$store.state.authenticated,
      wronginfo: 0,
      span: false,
    };
  },
  methods: {
    checkLoginfo() {
      if (
        this.username.toLowerCase() == this.adminUser.user &&
        this.password == this.adminUser.pass
      ) {
        this.logged = true;
        this.$store.state.authenticated = true;
      } else {
        this.wronginfo++;
        this.span = false;
      }
    },
  },
};
</script>


<style scoped>
.box{
  box-shadow: 0px 10px 20px;
  border-radius: 5px;
  margin-left: 35vw;
  margin-top: 5vw;
  width: 30vw;
  background-color: rgba(255, 255, 255, 0.404);
  height: 30vw;
}
.loginbox {
  margin-top: 5vw;
  display: inline-block;
  width: 25rem;
}
a {
  margin-top: 20px;
  align-content:center;
  vertical-align: middle;
  width: 10vw;
}
.warning {
  box-shadow: 10px 10px 100px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  height: 100%;
}
.welcome-logo {
  width: 30vw;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-style: italic;
  font-size: 3vw;
}
label{
  margin-top: 10px;
  margin-right:19rem;
}
</style>