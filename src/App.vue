<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/news">News</router-link>|
      <user-name /> 
    </div>
    
    <router-view />
  </div>
</template>
<script>
import UserName from "./components/UserName.vue"
  export default {
    components:{
      UserName
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    width: 30%;
    margin: 0 auto;
    color: #2c3e50;
  }

  #nav {
    display: flex;
    justify-content:space-between ;
    
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>