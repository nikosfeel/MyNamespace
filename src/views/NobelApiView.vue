<template>
    <nobel-api/>
</template>

<script>
import NobelApi from "@/components/NobelApi.vue";

export default {
components:{NobelApi},
mounted(){
    document.title = "MyNameSpace | Nobels"
    if(!this.$store.state.authenticated){
      this.$router.push("/login")
    }
},
}

</script>
