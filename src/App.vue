<template>
  <div id="app">
    <nav class="navbar" v-if="!$route.meta.hideNavbar">
      <ul class="nav-links">
        <div class="menu">
          <li>
            <router-link to="/home"><i class="fa fa-home"></i></router-link>
          </li>
          <li>
            <router-link to="/news"
              >News Feed ({{ this.$store.state.cards.length }})
              <i class="fa fa-envelope"></i
            ></router-link>
          </li>
          <li>
            <router-link to="/playground"
              >Playground <i class="fa fa-play"></i
            ></router-link>
          </li>
          <li>
            <router-link to="/profile"
              >Profile <i class="fa fa-user"></i
            ></router-link>
          </li>
          <li>
            <router-link to="/nobel"
              >Nobel <i class="fa fa-award"></i
            ></router-link>
          </li>
          <li>
            <router-link to="/blog"
              >Blog <i class="fa fa-comment"></i
            ></router-link>
          </li>
          <li>
            <router-link to="/random"
              >Random <i class="fa fa-random"></i
            ></router-link>
          </li>
          <li>
            <router-link to="/todo"
              >To Do List <i class="fa fa-check"></i
            ></router-link>
          </li>
        </div>
      </ul>
    </nav>
    <router-view />
  </div>
</template>
<script>
export default {
  mounted() {
    if (!this.$store.state.authenticated) {
      this.$router.push("/login");
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 1vw;
}
nav {
  z-index: 999;
  box-shadow: rgba(0, 0, 0, 0.8) 0px 3px 4px;
  transition: 1s;
  background-color: #72186d;
  color: #fff;
  width: 50vw;
  left: 25vw;
}
</style>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.navbar {
  position: sticky;
  top: 0;
  border-radius: 15px;
  margin-bottom: 2vw;
  justify-content: space-around;
}
.nav-links {
  list-style-type: none;
}
.nav-links a {
  color: #fff;
  text-decoration: none;
  position: relative;
  vertical-align: middle;
}
/* NAVBAR MENU */
.menu li {
  border-radius: 5px;
  font-size: 1vw;
  list-style: none;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  transition: 0.5s;
  margin-left: 1vw;
  display: inline-block;
}
.menu li:hover {
  background-color: #b9739f94;
  cursor: pointer;
}

</style>