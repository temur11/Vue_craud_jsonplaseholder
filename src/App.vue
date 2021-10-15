<template>
  <div>
   <!-- <UserData/> -->
  <router-link to="/homework">Homework</router-link>
  <br>
  <!-- <router-link :to="{name:'OneData', params:{ id: 12 }}">Onedata</router-link> -->
   <router-view/>
  </div>
</template>

<script>
// import UserData from "./components/UserData.vue"
export default {
  components:{
    // UserData

  }

}
</script>

<style>

</style>