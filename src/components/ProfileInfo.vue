<template>
  <div class="mainDiv">
    <div id="main-card" >
      <div class="cover-photo"></div>
      <div class="photo">
        <img
          alt="../assets/logo.png"
          :src="this.$store.state.user.properties.picture.myName"
        />
      </div>

      <div class="content">
      <div v-for="(prop, index) in user.properties" :key="index">
        <h4>
          <h2>{{ prop.propName }}</h2>
          <span class="name" v-if="prop.edit">{{ prop.myName }}</span>
          <input type="text" v-else v-model="prop.myName" />

          <button
            class="btn btn-light"
            v-if="prop.edit"
            @click="nameEdit(prop.propName)"
          >
            <i class="fas fa-pencil"></i>
          </button>
          <button
            class="btn btn-light"
            @click="nameSave(prop.propName)"
            v-else
          >
            <i class="fas fa-save"></i>
          </button>
        </h4>
      </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      user: this.$store.state.user,
    };
  },
  async mounted() {
    if (this.$store.state.user.properties.picture.myName == "")
      await this.getUser();
  },
  methods: {
    nameEdit(param) {
      switch (param.toLowerCase()) {
        case "name":
          this.$store.state.user.properties.name.edit = false;
          break;
        case "surname":
          this.$store.state.user.properties.surname.edit = false;
          break;
        case "email":
          this.$store.state.user.properties.description.edit = false;
          break;
        case "age":
          this.$store.state.user.properties.age.edit = false;
          break;
        case "picture":
          this.$store.state.user.properties.picture.edit = false;
          break;
      }
    },
    nameSave(param) {
      switch (param.toLowerCase()) {
        case "name":
          this.$store.state.user.properties.name.edit = true;
          break;
        case "surname":
          this.$store.state.user.properties.surname.edit = true;
          break;
        case "email":
          this.$store.state.user.properties.description.edit = true;
          break;
        case "age":
          this.$store.state.user.properties.age.edit = true;
          break;
        case "picture":
          this.$store.state.user.properties.picture.edit = true;
          break;
      }
    },
    async getUser() {
      await this.$store.dispatch("getUser");
    },
  },
};
</script>
<style scoped>
.mainDiv {
  font-size: 10px;
  font-family: Comic Sans MS;
  padding: 30px 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

}

div#main-card {
  max-width: 700px;
  height: 700px;
  box-shadow: 0px 8px 14px rgb(10, 8, 8);
  word-wrap: break-word;
  transition: 1s;
}

.cover-photo {
  background: #72186d;
  height: 100px;
}

.photo {
  background: #f9f9f9;
  height: 120px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
img {
  position: relative;
  top: -50px;
  border-radius: 50%;
  box-shadow: -1px 1px 11px 6px rgba(189, 172, 172, 0.33);
  cursor: pointer;
}
.content {
  background: #f9f9f9;
  width: 700px;
  height: 514px;
  position: relative;
  top: -35px;

}

.contact {
  background: #30354d;
  width: 300px;
  height: 50px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

}

span.name,
h3,
a {
  margin: 0;
  text-align: center;
}

span.name {
  padding-bottom: 20px;
}

h3.fullstack {
  padding-bottom: 10px;
}

a {
  color: #0ab581;
  text-decoration: none;
}

a:hover {
  color: black;
}

ul {
  padding: 0;
}

a.certified {
  color: black;
  cursor: pointer;
}

a.certified:hover {
  color: #0ab581;

}

div#main-card:hover {
  -webkit-animation-name: pulse;
  animation-name: pulse;
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
    box-shadow: 0px 15px 20px rgb(0, 0, 0);
    transition: 1s;
}
@-webkit-keyframes pulse {
  0% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
  50% {
    -webkit-transform: scale3d(1.05, 1.05, 1.05);
    transform: scale3d(1.05, 1.05, 1.05);
  }
  100% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
@keyframes pulse {
  0% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
  50% {
    -webkit-transform: scale3d(1.05, 1.05, 1.05);
    transform: scale3d(1.05, 1.05, 1.05);
  }
  100% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
</style>