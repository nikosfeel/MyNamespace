<template>
  <div>
    <profile-info />
  </div>
</template>

<script>
import ProfileInfo from "@/components/ProfileInfo.vue";
export default {
  components: { ProfileInfo, },
  mounted() {
    document.title = "MyNameSpace | Profile";
    if(!this.$store.state.authenticated){
      this.$router.push("/login")
    }
  },
};
</script>