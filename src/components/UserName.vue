<template>
  <div class="user-name">
    <span v-if="status === 'loading'">loading……</span>
    <template v-else-if="status === 'login'">
      <router-link to="/user" >{{user.name}}</router-link>|
      <a href="" @click.prevent="handleLoginOut">退出</a>|
    </template>

    <router-link to="/login" v-else exact-path>Login</router-link>
  </div>
</template>

<script>
  import {mapState,mapGetters} from "vuex"
  export default {
    computed:{
      //需要知道此时仓库的用户名
      //需要知道此时的仓库的登录状态
      ...mapState("loginUser",["user"]),
      ...mapGetters("loginUser",["status"])
    },
    methods:{
      async handleLoginOut(){
        //需要退出登录
        await this.$store.dispatch("loginUser/loginOut")
        //退出登录后，跳转至登录页面
        this.$router.push("/login")
      }
    }
  }
</script>

<style>

</style>